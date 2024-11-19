import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

interface Todo {
  id: number;
  content: string;
  dueDate: string;
}

@Controller('todos')
export class TodosController {
  // TODO: 영속성 계층 구현시 변경될 예정 TBD
  _now = new Date();
  private todos: Todo[] = [
    {
      id: 1,
      content: 'Modern Javascript Deep Diver chapter 01',
      dueDate: new Date().setDate(new Date().getDate() + 1).toString(),
    },
    {
      id: 2,
      content: 'Modern Javascript Deep Diver chapter 02',
      dueDate: new Date().setDate(new Date().getDate() + 2).toString(),
    },
  ];

  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): Todo[] {
    return this.todos;
  }

  @Get(':id')
  getTodo(@Param('id') id: string): Todo {
    const findTodo = this.todos.find((todo) => todo.id === +id);

    if (!findTodo) {
      throw new NotFoundException('존재하지 않는 ID의 TODO 항목입니다.');
    }

    return findTodo;
  }
}
