import React from 'react';
import { Input } from 'antd';

interface IProps {
  handleDetailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const DetailText: React.FC<IProps> = ({ value, handleDetailChange }) => {
  return (
    <Input
      value={value}
      onChange={handleDetailChange}
      className='detail-text'
    />
  );
};

export default React.memo(DetailText);
