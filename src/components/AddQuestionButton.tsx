import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { addQuestions } from 'store/actions/questions';

const AddQuestionButton: React.FC = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addQuestions());
  };
  return (
    <div>
      <Button
        type='primary'
        onClick={handleClick}
        className='add-question-button'
      >
        Add Question
      </Button>
    </div>
  );
};

export default AddQuestionButton;
