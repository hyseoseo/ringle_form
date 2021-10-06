import {
  QuestionsAction,
  SET_QUESTION_TYPE,
  ADD_QUESTIONS,
  REMOVE_QUESTIONS,
  SET_QUESTION_OPTIONS,
  SET_QUESTION_TEXT,
  SET_DETAIL_TEXT,
} from 'store/actions/questions';
import { QuestionSet } from 'config';

const initialState: QuestionSet[] = [
  {
    id: 1,
    questionText: 'Question Text',
    detailText: 'Detail Text',
    answer: '',
    type: 'text',
    options: [{ id: 1, value: '', checked: false }],
  },
];

export const defaultQuestion = {
  questionText: 'Question Text',
  detailText: 'Detail Text',
  answer: '',
  type: 'text',
  options: [{ id: 1, value: '', checked: false }],
};

const questionReducer = (state = initialState, action: QuestionsAction) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      if (state.length === 0) {
        return [{ ...defaultQuestion, id: 1 }];
      } else {
        return [
          ...state,
          { ...defaultQuestion, id: state[state.length - 1].id + 1 },
        ];
      }
    case SET_QUESTION_TYPE:
      const typeChanged = state.map((question) => {
        if (question.id === action.payload.id) {
          return { ...question, type: action.payload.type };
        } else {
          return question;
        }
      });
      return typeChanged;
    case SET_QUESTION_OPTIONS:
      const optionChanged = state.map((question) => {
        if (question.id === action.payload.id) {
          return { ...question, options: action.payload.option };
        } else {
          return question;
        }
      });
      return optionChanged;
    case SET_QUESTION_TEXT:
      const questionTextChanged = state.map((question) => {
        if (question.id === action.payload.id) {
          return { ...question, questionText: action.payload.questionText };
        } else {
          return question;
        }
      });
      return questionTextChanged;
    case SET_DETAIL_TEXT:
      const detailTextChanged = state.map((question) => {
        if (question.id === action.payload.id) {
          return { ...question, detailText: action.payload.detailText };
        } else {
          return question;
        }
      });
      return detailTextChanged;
    case REMOVE_QUESTIONS:
      const removedQuestions = state.filter(
        (question) => question.id !== action.payload,
      );
      return removedQuestions;
    default:
      return state;
  }
};

export default questionReducer;
