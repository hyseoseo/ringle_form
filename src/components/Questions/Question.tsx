import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Modal } from 'antd';
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
import QuestionText from './QustionText';
import DetailText from './DetailText';
import TypeSelect from './TypeSelect';
import DeleteQuestionButton from '../buttons/DeleteQuestionButton';

interface IProps {
  question: QuestionSet;
}

const Question: React.FC<IProps> = ({ question }) => {
  const dispatch = useDispatch();
  const id = question.id;
  const type = question.type;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = useCallback(
    (value: SelectValue) => {
      dispatch(setQuestionType({ id: id, type: value }));
    },
    [id, dispatch],
  );

  const renderQuestionType = () => {
    if (type === 'text') {
      return <TextQuestion question={question} />;
    } else return <ChoiceQuestion question={question} />;
  };

  const handleClick = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleOK = () => {
    dispatch(removeQuestions(id));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleQuestionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setQuestionText({ id: id, questionText: e.target.value }));
    },
    [id, dispatch],
  );

  const handleDetailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setQuestionDetail({ id: id, detailText: e.target.value }));
    },
    [id, dispatch],
  );

  return (
    <Card className='question-card'>
      <QuestionText
        value={question.questionText}
        handleQuestionChange={handleQuestionChange}
      />
      <DetailText
        value={question.detailText}
        handleDetailChange={handleDetailChange}
      />
      {renderQuestionType()}
      <div className='card-typeselect-delete'>
        <TypeSelect handleChange={handleChange} />
        <DeleteQuestionButton handleClick={handleClick} />
      </div>
      <Modal visible={isModalVisible} onOk={handleOK} onCancel={handleCancel}>
        Are you sure to delete this question?
      </Modal>
    </Card>
  );
};

export default React.memo(Question);
