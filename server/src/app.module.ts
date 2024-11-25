import { Module } from '@nestjs/common';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { UsersController } from './users/users.controller';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [ApiController, TodosController, UsersController],
  providers: [TodosService,],
})
export class AppModule {}
