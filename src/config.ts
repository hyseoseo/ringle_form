export type QUESTION_TYPES = 'text' | 'radio' | 'checkbox';

export type QuestionSet = {
  question: string;
  answer: string;
  type: QUESTION_TYPES;
  options?: string[];
};
