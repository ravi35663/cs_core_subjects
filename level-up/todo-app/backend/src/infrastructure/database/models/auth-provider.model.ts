import { DataTypes,Model } from "sequelize";

import { sequelize } from "../sequelize.js";

export class AuthProvider extends Model{
    public readonly createdAt!: Date;
    public id!: string;
    public provider!: string;
    public providerId!: null | string;

    public readonly updatedAt!: Date;
    public userId!: string;
    
}

AuthProvider.init({
    id:{
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
        type: DataTypes.UUID
    },
    provider:{
        allowNull:true,
        type:DataTypes.STRING
    },
    providerId:{
        allowNull:true,
        type: DataTypes.STRING
    },
    userId:{
        allowNull:false,
        type:DataTypes.UUID
    },
},{sequelize,tableName:"auth_providers"})
