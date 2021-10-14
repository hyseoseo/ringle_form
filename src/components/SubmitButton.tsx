import { Button } from 'antd';
import React from 'react';

interface IProps {
  handleSubmit: () => void;
}

const SubmitButton: React.FC<IProps> = ({ handleSubmit }) => {
  return (
    <Button type='primary' onClick={handleSubmit} className='submit-button'>
      Submit
    </Button>
  );
};

export default React.memo(SubmitButton);
