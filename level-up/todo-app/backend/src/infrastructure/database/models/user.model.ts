import { DataTypes, Model } from "sequelize";

import { sequelize } from "../sequelize.js";

export class User extends Model{
    public readonly createdAt!:Date;
    public email!: string;
    public id!: string;
    public isVerified!: boolean;

    public password!: null | string;
    public readonly updatedAt!:Date;
}

User.init({
    email:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true
    },
    id:{
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        type:DataTypes.UUID
    },
    isBlocked:{
        allowNull:false,
        defaultValue:false,
        type:DataTypes.BOOLEAN
    },
    isVerified:{
        defaultValue:true,
        type:DataTypes.BOOLEAN
    },
    password:{
        allowNull:true,
        type:DataTypes.STRING
    }

},{sequelize,tableName:"users"})