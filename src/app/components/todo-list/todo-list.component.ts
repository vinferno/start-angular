import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$!: Observable<Todo[]>;
  constructor(private todoService: TodoService) {

   }

  ngOnInit(): void {

    this.todos$ = this.todoService.getTodos();
  }

}
