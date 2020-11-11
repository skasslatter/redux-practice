import { ITodo } from './models/todo';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

export function rootReducer(state, action): any {
  switch (action.type) {
    case ADD_TODO:
      action.todo.id = state.todos.length + 1;
      return Object.assign({}, state, {
        todos: state.todos.concat(Object.assign({}, action.todo)),
        lastUpdate: new Date()
      });

    case TOGGLE_TODO:
      const todo: ITodo = state.todos.find((t) => {
        return t.id === action.id;
      });
      const todoIndex = state.todos.indexOf(todo);

      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, todoIndex),
          Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
          ...state.todos.slice(todoIndex + 1)
        ],
        lastUpdate: new Date()
      });


    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter((t) => {
          return t.id !== action.id;
        }),
        lastUpdate: new Date()
      });

    case REMOVE_ALL_TODOS:
      return Object.assign({}, state, {
        todos: [],
        lastUpdate: new Date()
      });

  }
  return state;

}
