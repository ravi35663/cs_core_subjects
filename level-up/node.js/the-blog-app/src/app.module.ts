import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appDataSourceOptions } from 'database/data-source';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
  //   TypeOrmModule.forRootAsync({
  //   imports:[ConfigModule],
  //   inject:[ConfigService],
  //   useFactory:((config:ConfigService)=>({
  //     type:'postgres',
  //     host: config.get<string>('DB_HOST'),
  //     port: config.get<number>('DB_PORT'),
  //     database: config.get<string>('DB_NAME'),
  //     username: config.get<string>('DB_USER'),
  //     password:config.get<string>('DB_PASSWORD'),
  //     autoLoadEntities:true,
  //     synchronize:false,
  //     // migrations:['dist/src/database/migrations/*.js'],
  //     // cli:{
  //     //   migrationsDir:'src/database/migrations'
  //     // }
  //   }))
  // }),
  TypeOrmModule.forRoot(appDataSourceOptions),
  
  UsersModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
// synchronize:false, // false in dev, // if true it auto synchronize update tables rows
// entities:['dist/src/**/*.entity.js'] // Used to identify database entity files in compiled or build files not on dev?
// entities:[__dirname + '/**/*.entity{.ts,.js}']
// entities:[__dirname + '/**/*.entity{.ts,.js}'] // Work both in prod and dev