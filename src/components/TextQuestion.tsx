import React, { useState } from 'react';
import { Card, Input } from 'antd';

const TextQuestion: React.FC = () => {
  const [answer, setAnswer] = useState('answer');

  return (
    <Card>
      <Input value={answer} />
    </Card>
  );
};

export default TextQuestion;
