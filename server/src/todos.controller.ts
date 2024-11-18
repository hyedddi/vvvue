import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class AppController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): string[] {
    return this.todosService.getTodos();
  }
}
