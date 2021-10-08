import React from 'react';
import { Input, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { Option } from 'config';

interface IProps {
  option: Option;
  handleCheckbox: (e: CheckboxChangeEvent, id: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

const CheckboxOptions: React.FC<IProps> = ({
  option,
  handleCheckbox,
  handleChange,
}) => {
  console.log('checkbox option');
  return (
    <Checkbox
      onChange={(e) => handleCheckbox(e, option.id)}
      checked={option.checked}
      className='option-input-wrapper'
    >
      <Input
        value={option.value}
        onChange={(e) => handleChange(e, option.id)}
        className='option-input'
      />
    </Checkbox>
  );
};

export default CheckboxOptions;
