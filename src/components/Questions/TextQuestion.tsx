import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

import { QuestionSet } from 'config';
import { setAnswer, setQuestionOptions } from 'store/actions/questions';

interface IProps {
  question: QuestionSet;
}

const TextQuestion: React.FC<IProps> = ({ question }) => {
  const dispatch = useDispatch();
  const answer = question.answer;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAnswer({ id: question.id, answer: e.target.value }));
    dispatch(setQuestionOptions({ id: question.id, option: [] }));
  };

  return (
    <div className='answer-container'>
      <Input value={answer} onChange={handleChange} />
    </div>
  );
};

export default React.memo(TextQuestion);
