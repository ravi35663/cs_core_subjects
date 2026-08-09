import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private readonly todoRepository:Repository<Todo>){}
  
  async create(createTodoDto: CreateTodoDto):Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todo);
  }

  async findAll():Promise<Todo[]> {
    return this.todoRepository.find({relations:['comments']});
  }

  async findOne(id: number):Promise<Todo> {
    try {
        return await this.todoRepository.findOneByOrFail({id}) 
    } catch (error) {
      // throw error;
      throw new NotFoundException(error);
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto):Promise<Todo> {
    try {
        const todo = await this.findOne(id)  ;
        todo.title = updateTodoDto.title ||  todo.title;
        todo.description = updateTodoDto.description || todo.description;
        todo.view += 1;
        return this.todoRepository.save(todo);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: number):Promise<Todo> {
    try {
      const todo = await this.findOne(id)
      return this.todoRepository.remove(todo);      
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
