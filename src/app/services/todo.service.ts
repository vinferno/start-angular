import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Array<Todo> = [];
  constructor(
    private http: HttpClient,
  ) {
    this.getTodos();
  }

  addTodo(task: string) {
    if (!task) {
      console.log('task needs a value')
      return;
    }
    this.todos.push(new Todo(task));
  }

  getTodos() {
    return this.http.get<Todo[]>('http://localhost:3005/todos').pipe(tap((todos) => console.log(todos)))
  }
}


