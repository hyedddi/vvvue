import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
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

  private idCounter = 3;

  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(
    @Query('content') content: string
  ): Todo[] {
    return this.todos.filter(todo => todo.content.startsWith(content));
  }

  @Get(':id')
  getTodo(@Param('id') id: string): Todo {
    const findTodo = this.todos.find((todo) => todo.id === +id);

    if (!findTodo) {
      throw new NotFoundException('존재하지 않는 ID의 TODO 항목입니다.');
    }

    return findTodo;
  }

  @Post()
  registerTodo(
    @Body('content') content: string,
    @Body('dueDate') dueDate: string,
  ) {
    const todo: Todo = {
      id: this.idCounter++,
      content,
      dueDate,
    };

    this.todos.push(
      todo,
    );

    return todo;
  }

  @Patch(':id')
  patchTodo(
    @Param('id') id: string,
    @Body('content') content: string,
  ) {
    const findTodo = this.todos.find((todo) => todo.id === +id);

    if (!findTodo) {
      throw new NotFoundException('존재하지 않는 ID의 TODO 항목입니다.');
    }

    Object.assign(findTodo, { content });

    return findTodo;
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    const todoIndex = this.todos.findIndex(todo => todo.id === +id);

    if (todoIndex === -1) {
      throw new NotFoundException('존재하지 않는 ID의 TODO 항목입니다.');
    }

    this.todos.splice(todoIndex, 1);

    return id;
  }
}
