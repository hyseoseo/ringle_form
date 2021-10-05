import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Select, Input } from 'antd';

import { QuestionSet } from 'config';
import TextQuestion from './TextQuestion';
import RadioQuestion from './RadioQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import { SelectValue } from 'antd/lib/select';
import { removeQuestions, setQuestions } from 'store/actions/questions';

interface IProps {
  question: QuestionSet;
}

const { Option } = Select;

const Question: React.FC<IProps> = ({ question }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(question.type);
  const [questionText, setQuestionText] = useState('Question Text');
  const id = question.id;

  const handleChange = (value: SelectValue) => {
    setType(value);
    console.log(value);
    dispatch(setQuestions({ id: id, type: type }));
  };

  const returnQuestionType = () => {
    if (type === 'text') return <TextQuestion />;
    if (type === 'radio') return <RadioQuestion />;
    if (type === 'checkbox') return <CheckboxQuestion />;
  };

  const handleClick = () => {
    dispatch(removeQuestions(id));
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionText(e.target.value);
  };

  return (
    <Card>
      <Input
        value={questionText}
        onChange={handleQuestionChange}
        className='question-text'
      />
      {returnQuestionType()}
      <Select defaultValue='text' onChange={handleChange}>
        <Option value='text'>Text</Option>
        <Option value='radio'>Radio</Option>
        <Option value='checkbox'>Checkbox</Option>
      </Select>
      <Button onClick={handleClick} type='default'>
        Delete
      </Button>
    </Card>
  );
};

export default Question;
