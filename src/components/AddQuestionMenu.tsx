import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { addQuestions } from 'store/actions/questions';

const AddQuestionMenu: React.FC = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addQuestions());
  };
  return (
    <div>
      <Button type='primary' onClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

export default AddQuestionMenu;
