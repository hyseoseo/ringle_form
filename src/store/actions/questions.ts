import { SelectValue } from 'antd/lib/select';

export const SET_QUESTIONS = 'SET_QUESTIONS' as const;
export const ADD_QUESTIONS = 'ADD_QUESTIONS' as const;
export const REMOVE_QUESTIONS = 'REMOVE_QUESTIONS' as const;

export type changeTypeInfo = {
  id: number;
  type: SelectValue;
};

export const setQuestions = (info: changeTypeInfo) => ({
  type: SET_QUESTIONS,
  payload: info,
});

export const addQuestions = () => ({
  type: ADD_QUESTIONS,
});

export const removeQuestions = (id: number) => ({
  type: REMOVE_QUESTIONS,
  payload: id,
});

export type QuestionsAction =
  | ReturnType<typeof setQuestions>
  | ReturnType<typeof addQuestions>
  | ReturnType<typeof removeQuestions>;