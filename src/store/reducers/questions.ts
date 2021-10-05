import { SetQuestionsAction, SET_QUESTIONS } from 'store/actions/questions';
import { QuestionSet } from 'config';

const initialState: QuestionSet[] = [
  {
    question: 'Question Text',
    answer: 'Answer Text',
    type: 'text',
  },
];

const questionReducer = (state = initialState, action: SetQuestionsAction) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default questionReducer;
