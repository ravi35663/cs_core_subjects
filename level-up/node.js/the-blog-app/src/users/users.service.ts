import { Get, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users:User[] = [{id:1,name:"Ravi"} as User];

    findAll(name?:string):User[]{
        if(name){
            return (this.users.filter(item=> item.name == name))
        }
        return this.users;
    }

    findOneById(id:number):User | null{
        return this.users.find((item:any)=> item.id == id) || null;
    }

    create(payload:CreateUserDto):User{
        const item = {id:this.users.length+1,name:payload.name};
        this.users.push(item);
        return item;
    }

    delete(id:string):any{
        this.users = this.users.filter((item:any)=> item.id != id);
        return;
    }
}
