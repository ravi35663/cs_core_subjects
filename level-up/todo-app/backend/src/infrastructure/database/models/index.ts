import { sequelize } from "../sequelize.js";
import { AuthProvider } from "./auth-provider.model.js";
import { User } from "./user.model.js";

//  Model Associations:
User.hasMany(AuthProvider,{
    as:"providers",
    foreignKey:"userId"
});
AuthProvider.belongsTo(User,{
    as:"user",
    foreignKey:"userId"
})
export {AuthProvider,sequelize,User}