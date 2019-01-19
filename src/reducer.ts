import * as action from 'actions/input';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface State {
  text: string;
  oreoArray: string[];
}

export const initialState: State = { text: '', oreoArray: [] };

const appReducer = reducerWithInitialState(initialState).case(
  action.changeText,
  (state, payload) => ({
    ...state,
    text: payload.text,
    oreoArray: payload.oreoArray,
  }),
);

export default appReducer;
