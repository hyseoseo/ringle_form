import React from 'react';
import { Radio, Input, Space, Button } from 'antd';

import { Option } from './ChoiceQuestion';

interface IProps {
  options: Option[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  handleDeleteOption: (id: number) => void;
}

const RadioOption: React.FC<IProps> = ({
  options,
  handleChange,
  handleDeleteOption,
}) => {
  return (
    <Radio.Group>
      <Space direction='vertical'>
        {options.map((option) => (
          <div key={option.id}>
            <Radio value={option.value}>
              <Input
                value={option.value}
                onChange={(e) => handleChange(e, option.id)}
              />
            </Radio>
            <Button onClick={() => handleDeleteOption(option.id)}>
              delete
            </Button>
          </div>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default RadioOption;
