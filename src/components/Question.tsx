import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Select, Input, Modal } from 'antd';
import { SelectValue } from 'antd/lib/select';

import { QuestionSet } from 'config';
import {
  removeQuestions,
  setQuestionType,
  setQuestionText,
  setQuestionDetail,
} from 'store/actions/questions';
import ChoiceQuestion from './ChoiceQuestion';
import TextQuestion from './TextQuestion';

interface IProps {
  question: QuestionSet;
}

const { Option } = Select;

const Question: React.FC<IProps> = ({ question }) => {
  const dispatch = useDispatch();
  const id = question.id;
  const type = question.type;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (value: SelectValue) => {
    dispatch(setQuestionType({ id: id, type: value }));
  };

  const renderQuestionType = () => {
    if (type === 'text') return <TextQuestion question={question} />;
    else return <ChoiceQuestion question={question} />;
  };

  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleOK = () => {
    dispatch(removeQuestions(id));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      {renderQuestionType()}
      <div className='card-typeselect-delete'>
        <Select
          defaultValue='text'
          onChange={handleChange}
          className='question-type-select'
        >
          <Option value='text'>Text</Option>
          <Option value='radio'>Radio</Option>
          <Option value='checkbox'>Checkbox</Option>
        </Select>
        <Button danger onClick={handleClick} type='default'>
          Delete
        </Button>
      </div>
      <Modal visible={isModalVisible} onOk={handleOK} onCancel={handleCancel}>
        Are you sure to delete this question?
      </Modal>
    </Card>
  );
};

export default React.memo(Question);
