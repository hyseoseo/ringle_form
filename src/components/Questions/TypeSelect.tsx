import { SelectValue } from 'antd/lib/select';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface IProps {
  handleChange: (value: SelectValue) => void;
}

const TypeSelect: React.FC<IProps> = ({ handleChange }) => {
  return (
    <Select
      defaultValue='text'
      onChange={handleChange}
      className='question-type-select'
    >
      <Option value='text'>Text</Option>
      <Option value='radio'>Radio</Option>
      <Option value='checkbox'>Checkbox</Option>
    </Select>
  );
};

export default React.memo(TypeSelect);
