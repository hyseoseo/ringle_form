import React, { useState } from 'react';
import { Input } from 'antd';

const TextQuestion: React.FC = () => {
  const [question, setQuestion] = useState('Question Text');
  const [answer, setAnswer] = useState('answer');

  return (
    <>
      <Input value={question} />
      <Input value={answer} />
    </>
  );
};

export default TextQuestion;
