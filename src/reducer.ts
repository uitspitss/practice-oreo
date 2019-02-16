import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from 'actions/input';

export interface State {
  app: {
    text: string;
    oreoArray: string[];
  };
}

export const initialState: State = { app: { text: '', oreoArray: [] } };

const appReducer = reducerWithInitialState(initialState).case(
  actions.handleChange,
  (state, payload) => ({
    ...state,
    text: payload.text,
    oreoArray: payload.oreoArray,
  }),
);

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer,
});

export default rootReducer;
