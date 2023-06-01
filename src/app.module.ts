import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TodoController } from './todo/todo.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TestController, TodoController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
