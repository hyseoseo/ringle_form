import React from 'react';
import { Radio, Input } from 'antd';
import { Option } from 'config';

interface IProps {
  option: Option;
  handleRadio: (id: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

const RadioOptions: React.FC<IProps> = ({
  option,
  handleRadio,
  handleChange,
}) => {
  return (
    <Radio onChange={() => handleRadio(option.id)} checked={option.checked}>
      <Input
        value={option.value}
        onChange={(e) => handleChange(e, option.id)}
      />
    </Radio>
  );
};

export default RadioOptions;
