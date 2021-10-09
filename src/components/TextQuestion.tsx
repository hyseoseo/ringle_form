import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

import { QuestionSet } from 'config';
import { setAnswer } from 'store/actions/questions';

interface IProps {
  question: QuestionSet;
}

const TextQuestion: React.FC<IProps> = ({ question }) => {
  const dispatch = useDispatch();
  const answer = question.answer;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAnswer({ id: question.id, answer: e.target.value }));
  };

  return (
    <div className='answer-card'>
      <Input value={answer} onChange={handleChange} />
    </div>
  );
};

export default React.memo(TextQuestion);
