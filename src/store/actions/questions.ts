import { SelectValue } from 'antd/lib/select';
import { Option } from 'config';

export const SET_QUESTION_TYPE = 'SET_QUESTION_TYPE' as const;
export const SET_QUESTION_OPTIONS = 'SET_QUESTION_OPTIONS' as const;
export const SET_QUESTION_TEXT = 'SET_QUESTION_TEXT' as const;
export const SET_DETAIL_TEXT = 'SET_DETAIL_TEXT' as const;
export const ADD_QUESTIONS = 'ADD_QUESTIONS' as const;
export const REMOVE_QUESTIONS = 'REMOVE_QUESTIONS' as const;

export type changeTypeInfo = {
  id: number;
  type: SelectValue;
};

export type changeOptionInfo = {
  id: number;
  option: Option[];
};

export type changeQuestionTextInfo = {
  id: number;
  questionText: string;
};

export type changeDetailTextInfo = {
  id: number;
  detailText: string;
};

export const setQuestionType = (info: changeTypeInfo) => ({
  type: SET_QUESTION_TYPE,
  payload: info,
});

export const setQuestionOptions = (info: changeOptionInfo) => ({
  type: SET_QUESTION_OPTIONS,
  payload: info,
});

export const setQuestionText = (info: changeQuestionTextInfo) => ({
  type: SET_QUESTION_TEXT,
  payload: info,
});

export const setQuestionDetail = (info: changeDetailTextInfo) => ({
  type: SET_DETAIL_TEXT,
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
  | ReturnType<typeof setQuestionType>
  | ReturnType<typeof setQuestionOptions>
  | ReturnType<typeof setQuestionText>
  | ReturnType<typeof setQuestionDetail>
  | ReturnType<typeof addQuestions>
  | ReturnType<typeof removeQuestions>;
