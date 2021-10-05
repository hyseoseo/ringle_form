import { SelectValue } from 'antd/lib/select';

export type QuestionSet = {
  id: number;
  question: string;
  answer: string;
  type: SelectValue;
  options?: string[];
};

export const defaultQuestion = {
  question: 'Question Text',
  answer: 'Answer Text',
  type: 'text',
};
