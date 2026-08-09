import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Pipe are also used for validation and you can apply it globally or module wise.
  app.useGlobalPipes(new ValidationPipe());
  
  // Swagger API documentation setup
  const config = new DocumentBuilder()
                .setTitle('Nest Blog Apis')
                .setDescription("This document contains details of each blog apis")
                .setVersion('1.0')
                .build()
  const document = SwaggerModule.createDocument(app,config);

  SwaggerModule.setup('/',app,document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
