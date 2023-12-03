import { Component } from '@angular/core';
import { promises } from 'dns';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss',
})
export class CompletatiComponent {
  public todos: Todo[] = [];
  constructor(private todoSvc: TodoService, private router: Router,private spinner:NgxSpinnerService) {}
  public loading: boolean = true;
  public loadingtext: string = 'Loading';
  ngOnInit(): void {
    this.spinner.show()
    this.loadingtext = 'Completed..';
    setTimeout(() => {
      this.todoSvc
        .getAll()
        .then((res) => {
          this.spinner.hide()
          return res;
        })
        .then(
          (res) => (this.todos = res.filter((todo) => todo.completed == true))
        );

      this.loading = false;
    }, 2000);
  }


}
