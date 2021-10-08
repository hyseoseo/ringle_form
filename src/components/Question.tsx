import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Select, Input } from 'antd';

import { QuestionSet } from 'config';
import TextQuestion from './TextQuestion';
import { SelectValue } from 'antd/lib/select';
import {
  removeQuestions,
  setQuestionType,
  setQuestionText,
  setQuestionDetail,
} from 'store/actions/questions';
import ChoiceQuestion from './ChoiceQuestion';

interface IProps {
  question: QuestionSet;
}

const { Option } = Select;

const Question: React.FC<IProps> = ({ question }) => {
  const dispatch = useDispatch();
  const id = question.id;
  const type = question.type;

  const handleChange = (value: SelectValue) => {
    dispatch(setQuestionType({ id: id, type: value }));
  };
  console.log('Question');
  const returnQuestionType = () => {
    if (type === 'text') return <TextQuestion question={question} />;
    else return <ChoiceQuestion question={question} />;
  };

  const handleClick = () => {
    dispatch(removeQuestions(id));
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuestionText({ id: id, questionText: e.target.value }));
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuestionDetail({ id: id, detailText: e.target.value }));
  };

  return (
    <Card className='question-card'>
      <Input
        value={question.questionText}
        onChange={handleQuestionChange}
        className='question-text'
      />
      <Input
        value={question.detailText}
        onChange={handleDetailChange}
        className='detail-text'
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

export default React.memo(Question);
