import React, { useState } from 'react';
import { Card, Input } from 'antd';

import { QuestionSet } from 'config';

interface IProps {
  question: QuestionSet;
}

const TextQuestion: React.FC<IProps> = ({ question }) => {
  const [answer, setAnswer] = useState('answer');

  console.log(`text question`);
  return (
    <div className='answer-card'>
      <Input value={answer} />
    </div>
  );
};

export default React.memo(TextQuestion);
