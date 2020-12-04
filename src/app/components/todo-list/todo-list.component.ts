import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ITodo, IAppState } from '../../models';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../actions/actions';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @select() todos;

  model = new FormGroup({
    id: new FormControl(0),
    description: new FormControl(''),
    responsible: new FormControl(''),
    priority: new FormControl('low'),
    isCompleted: new FormControl(false),
  });


constructor(
  private ngRedux: NgRedux<IAppState>
  ) { }

  onSubmit(): void {
    this.ngRedux.dispatch({ type: ADD_TODO, todo: this.model });
  }

  toggleTodo(todo): void {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo): void {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
