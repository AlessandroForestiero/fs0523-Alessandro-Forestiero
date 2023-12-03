import { Todo } from './../../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  public todos: Todo[] = [];
  constructor(private todoSvc: TodoService, private router: Router,private spinner:NgxSpinnerService) {}

  public loadingtext: string = 'Loading';

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.spinner.show()
    this.loadingtext = 'Loading..';
    setTimeout(() => {
      this.todoSvc
        .getAll()
        .then((res) => {
          this.spinner.hide()
          return res;
        })
        .then(
          (res) => (this.todos = res.filter((todo) => todo.completed == false))
        );


    }, 2000);
  }

  save(myForm: NgForm) {
    let newTodo: Todo = {
      id: Math.floor(Math.random() * 500),
      title: myForm.value.title,
      completed: false,
    };
    this.spinner.show()
    this.loadingtext = 'Saving..';
    setTimeout(() => {
      this.todoSvc.addTodo(newTodo).then(() => {


        this.loadAll();
      });
    }, 2000);
  }
  delete(id: number) {
    if (!id) return;

    this.spinner.show()
    this.loadingtext = 'Deleting..';
    setTimeout(() => {
      this.todoSvc.delete(id).then((res) => {
        this.todos = this.todos.filter((t) => t.id != id);
      });

      this.loadAll();
    }, 2000);
  }

  complete(todo: Todo) {
    this.spinner.show()
    this.loadingtext = 'Done..';
    todo.completed = true;
    setTimeout(() => {
    this.todoSvc.update(todo);
    this.todoSvc
      .getAll()
      .then(
        (res) => (this.todos = res.filter((todo) => todo.completed == false))
    );

      this.loadAll();
  },2000);
}}
