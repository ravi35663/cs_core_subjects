import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./comment.entity";

enum Status {
    completed = "Completed",
    open = "Open",
    inprogress = 'Inprogress',
    done = 'Done'
}

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:200})
    title:string;

    @Column({default:0})
    view:number;

    @Column()
    description?:string

    @Column({type:"enum",enum:Status,default:Status.open})
    static:Status

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    update_at:Date;

    @OneToMany(type=> Comment, comment => comment.todo)
    comments:Comment[]
}
