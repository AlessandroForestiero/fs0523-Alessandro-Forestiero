import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  apiUrl: string = 'http://localhost:3000/todo';
  getAll(): Promise<Todo[]> {
    return fetch(this.apiUrl).then((res) => res.json());
  }
  addTodo(todo: Partial<Todo>): Promise<Todo> {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }
  delete(id: number): Promise<Todo> {
    return fetch(this.apiUrl + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }
  update(todo: Todo): Promise<Todo> {
    return fetch(this.apiUrl + `/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }
}
