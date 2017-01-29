import { combineReducers, createStore } from 'redux';

export default () => {
  const rootReducer = combineReducers({
    empty: (state = []) => {
      return state;
    }
  });

  return createStore(rootReducer);
}
