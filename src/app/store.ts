import { ITodo } from './models/todo';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null,
};

export function rootReducer(state, action) {
  return state;
}
