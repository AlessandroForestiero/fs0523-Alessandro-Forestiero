import { Component } from '@angular/core';
import { promises } from 'dns';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss',
})
export class CompletatiComponent {
  public todos: Todo[] = [];
  constructor(private todoSvc: TodoService, private router: Router) {}
  public loading: boolean = true;
  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.todoSvc
        .getAll()
        .then(
          (res) => (this.todos = res.filter((todo) => todo.completed == true))
        );

      this.loading = false;
    }, 2000);
  }

  delete(id: number | undefined) {
    if (!id) return;

    this.todoSvc.delete(id).then((res) => {
      this.todos = this.todos.filter((t) => t.id != id);

      alert(`todo con id ${id} eliminata`);
    });
  }
}
