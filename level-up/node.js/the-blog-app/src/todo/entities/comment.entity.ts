import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "./todo.entity";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    text:string;

    @ManyToOne(type => Todo, todo => todo.comments)
    todo:Todo;
}