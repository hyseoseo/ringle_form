import React, { useState } from 'react';
import { Card, Input } from 'antd';

const TextQuestion: React.FC = () => {
  const [question, setQuestion] = useState('Question Text');
  const [answer, setAnswer] = useState('answer');

  return (
    <Card>
      <Input value={question} />
      <Input value={answer} />
    </Card>
  );
};

export default TextQuestion;
