import { Todo } from './../../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  public todos: Todo[] = [];
  constructor(private todoSvc: TodoService, private router: Router) {}
  public loading: boolean = false;
  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.todoSvc
        .getAll()
        .then(
          (res) => (this.todos = res.filter((todo) => todo.completed == false))
        );

      this.loading = false;
    }, 2000);
  }

  newTodo: Partial<Todo> = {
    id: 1,
    title: 'prova',
    completed: false,
  };

  save(myForm: NgForm) {
    this.newTodo.title = myForm.value.title;
    this.newTodo.id = Math.floor(Math.random() * 500);
    this.todoSvc.addTodo(this.newTodo);
    this.loading = true;
    setTimeout(() => {
      this.todoSvc
        .getAll()
        .then(
          (res) => (this.todos = res.filter((todo) => todo.completed == false))
        );

      this.loading = false;
    }, 2000);
  }
  delete(id: number | undefined) {
    if (!id) return;

    this.loading = true;
    setTimeout(() => {
      this.todoSvc.delete(id).then((res) => {
        this.todos = this.todos.filter((t) => t.id != id);
      });

      this.loading = false;
    }, 2000);
  }

  complete(todo: Todo) {
    todo.completed = true;
    this.todoSvc.update(todo);
    this.todoSvc
      .getAll()
      .then(
        (res) => (this.todos = res.filter((todo) => todo.completed == false))
      );
  }
}
