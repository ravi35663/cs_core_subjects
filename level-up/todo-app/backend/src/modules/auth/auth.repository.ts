import { User } from "../../infrastructure/database/models/index.js";

export class AuthRepository{
    async createUser(data:{email:string,password:string}){
        return User.create(data);
    }

    async findUserByEmail(email:string){
        return User.findOne({where:{email}})
    }
}