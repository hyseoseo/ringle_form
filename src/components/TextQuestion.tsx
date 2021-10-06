import React, { useState } from 'react';
import { Card, Input } from 'antd';

import { QuestionSet } from 'config';

interface IProps {
  question: QuestionSet;
}

const TextQuestion: React.FC<IProps> = ({ question }) => {
  const [answer, setAnswer] = useState('answer');

  return (
    <Card className='answer-card'>
      <Input value={answer} />
    </Card>
  );
};

export default TextQuestion;
