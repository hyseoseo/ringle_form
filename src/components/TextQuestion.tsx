import React, { useState } from 'react';
import { Input } from 'antd';

import { QuestionSet } from 'config';

interface IProps {
  question: QuestionSet;
}

const TextQuestion: React.FC<IProps> = ({ question }) => {
  const [answer, setAnswer] = useState('answer');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <div className='answer-card'>
      <Input value={answer} onChange={handleChange} />
    </div>
  );
};

export default React.memo(TextQuestion);
