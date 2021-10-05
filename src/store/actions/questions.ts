import { QuestionSet } from 'config';

export const SET_QUESTIONS = 'SET_QUESTIONS' as const;

export const setQuestions = (info: QuestionSet) => ({
  type: SET_QUESTIONS,
  payload: info,
});

export type SetQuestionsAction = ReturnType<typeof setQuestions>;
