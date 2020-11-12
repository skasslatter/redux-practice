import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REMOVE_ALL_TODOS } from '../../actions';


@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent {
  @select() todos;
  // another possibility e.g.: @select('todos) todosArray;
  @select() lastUpdate;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  clearTodos(): void {
    this.ngRedux.dispatch({ type: REMOVE_ALL_TODOS });
  }
}

