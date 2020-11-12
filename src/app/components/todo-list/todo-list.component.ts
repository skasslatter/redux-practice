import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../actions';
import { ITodo } from '../../models/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @select() todos;

  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };

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
