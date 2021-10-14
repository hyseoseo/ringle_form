import { Button } from 'antd';
import React from 'react';

interface IProps {
  handleClick: () => void;
}

const DeleteQuestionButton: React.FC<IProps> = ({ handleClick }) => {
  return (
    <Button danger type='default' onClick={handleClick}>
      Delete
    </Button>
  );
};

export default React.memo(DeleteQuestionButton);
