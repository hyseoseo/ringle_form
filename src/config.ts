import { SelectValue } from 'antd/lib/select';

export type Option = {
  id: number;
  value: string;
  checked?: boolean;
};

export type QuestionSet = {
  id: number;
  questionText: string;
  detailText: string;
  answer: string | string[];
  type: SelectValue;
  options: Option[];
};

export type TitleInfo = {
  title: string;
  desc: string;
};

export const defaultQuestion = {
  question: 'Question Text',
  answer: 'Answer Text',
  type: 'text',
};
