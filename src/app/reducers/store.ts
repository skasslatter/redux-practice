import { ITodo, IAppState } from '../models';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from '../actions/actions';

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null,
  nextId: 1,
};

export function rootReducer(state, action): any {
  switch (action.type) {

    case ADD_TODO:
      action.todo.id = state.nextId;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.todo
          }
        ],
        lastUpdate: new Date(),
        nextId: state.nextId + 1,
      };
    // return Object.assign({}, state, {
    //   todos: state.todos.concat(Object.assign({}, action.todo)),
    //   lastUpdate: new Date()
    // });

    case TOGGLE_TODO:
      const todo: ITodo = state.todos.find((t) => {
        return t.id === action.id;
      });
      const todoIndex = state.todos.indexOf(todo);
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIndex),
          {
            ...todo,
            isCompleted: !todo.isCompleted
          },
          ...state.todos.slice(todoIndex + 1)
        ],
        lastUpdate: new Date()
      };
    // return Object.assign({}, state, {
    //   todos: [
    //     ...state.todos.slice(0, todoIndex),
    //     {
    //       ...todo,
    //       isCompleted: !todo.isCompleted
    //     },
    //     ...state.todos.slice(todoIndex + 1)
    //   ],
    //   lastUpdate: new Date()
    // });

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => {
          return t.id !== action.id;
        }),
        lastUpdate: new Date()
      };

    case REMOVE_ALL_TODOS:
      return {
        ...state,
        todos: [],
        lastUpdate: new Date()
      };
    // return Object.assign({}, state, {
    //   todos: [],
    //   lastUpdate: new Date()
    // });

  }
  return state;

}
