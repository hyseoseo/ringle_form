import React from 'react';
import { Input } from 'antd';

interface IProps {
  handleQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const QuestionText: React.FC<IProps> = ({ value, handleQuestionChange }) => {
  return (
    <Input
      value={value}
      onChange={handleQuestionChange}
      className='question-text'
    />
  );
};

export default React.memo(QuestionText);
