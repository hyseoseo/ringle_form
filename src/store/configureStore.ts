import { combineReducers, createStore } from 'redux';
import questionReducer from './reducers/questions';

export const rootReducer = combineReducers({
  question: questionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
