import actionCreatorFactory from 'typescript-fsa';

export interface InputTextActionPayload {
  text: string;
  oreoArray: any;
}

const actionCreator = actionCreatorFactory();

export const handleChange = actionCreator<InputTextActionPayload>(
  'CHANGE_TEXT',
);
