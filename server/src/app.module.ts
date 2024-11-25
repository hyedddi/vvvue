import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { UsersController } from './users/users.controller';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [ApiController, AppController, TodosController, UsersController],
  providers: [AppService, TodosService],
})
export class AppModule {}
