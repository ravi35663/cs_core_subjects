import { config } from "dotenv"; config();
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    process.env.DB_NAME?? 'localhost' as string,
    process.env.DB_USER?? 'postgres' as string,
    process.env.DB_PASSWORD,
    {
        dialect:'postgres',
        host:process.env.DB_HOST,
        logging:false,
        port:Number(process.env.DB_PORT??5432),
    }
)
// Singleton Pattern used