import {
  QuestionsAction,
  SET_QUESTIONS,
  ADD_QUESTIONS,
} from 'store/actions/questions';
import { QuestionSet } from 'config';

const initialState: QuestionSet[] = [
  {
    id: 1,
    question: 'Question Text',
    answer: 'Answer Text',
    type: 'text',
  },
];

export const defaultQuestion = {
  question: 'Question Text',
  answer: 'Answer Text',
  type: 'text',
};

const questionReducer = (state = initialState, action: QuestionsAction) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return [...state, { ...defaultQuestion, id: state.length + 1 }];
    case SET_QUESTIONS:
      const typeChanged = state.map((question) => {
        if (question.id === action.payload.id) {
          return { ...question, type: action.payload.type };
        } else {
          return question;
        }
      });
      return typeChanged;
    default:
      return state;
  }
};

export default questionReducer;
