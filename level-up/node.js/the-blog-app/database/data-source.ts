// Typeorm configuration for migrations
/*
Note:
    Migrations do NOT use TypeOrmModule.forRoot(), they use a DataSource file.
// dist/database/data-source.js is generated from this file
*/
import { DataSource, DataSourceOptions } from "typeorm";
import '../src/config/env';
export const appDataSourceOptions:DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'the-blog-app-db',

  //ONLY compiled entities for migrations
  // entities: ['src/**/*.entity.ts'],
  
  // ONLY compiled migrations
  // migrations: ['database/migrations/*.ts'],

  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],

  synchronize: false,
}
export const AppDataSource = new DataSource(appDataSourceOptions);