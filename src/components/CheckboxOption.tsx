import React from 'react';
import { Checkbox, Input, Space, Button } from 'antd';

import { Option } from './ChoiceQuestion';

interface IProps {
  options: Option[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  handleDeleteOption: (id: number) => void;
}

const CheckboxOption: React.FC<IProps> = ({
  options,
  handleChange,
  handleDeleteOption,
}) => {
  return (
    <Checkbox.Group>
      <Space direction='vertical'>
        {options.map((option) => (
          <div key={option.id}>
            <Checkbox value={option.value}>
              <Input
                value={option.value}
                onChange={(e) => handleChange(e, option.id)}
              />
            </Checkbox>
            <Button onClick={() => handleDeleteOption(option.id)}>
              delete
            </Button>
          </div>
        ))}
      </Space>
    </Checkbox.Group>
  );
};

export default CheckboxOption;
