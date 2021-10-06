import React, { useState } from 'react';
import { Button, Card, Checkbox, Space, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';

type CheckOption = {
  id: number;
  value: string;
  checked: boolean;
};

const initialOptions: CheckOption[] = [{ id: 1, value: '', checked: false }];

const CheckboxQuestion: React.FC = () => {
  const [options, setOptions] = useState(initialOptions);
  const [answer, setAnswer] = useState<CheckOption[]>([]);

  const handleAddOption = () => {
    if (options.length) {
      setOptions([
        ...options,
        {
          id: options[options.length - 1].id + 1,
          value: '',
          checked: false,
        },
      ]);
    } else {
      setOptions(initialOptions);
    }
  };

  const handleDeleteOption = (id: number) => {
    const removedOptions = options.filter((option) => option.id !== id);
    setOptions(removedOptions);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const changed = options.map((option) => {
      if (option.id === id) {
        return { ...option, value: e.target.value };
      } else {
        return option;
      }
    });
    setOptions(changed);
  };

  const handleCheckbox = (e: CheckboxChangeEvent, id: number) => {
    const changed = options.map((option) => {
      if (option.id === id) {
        return { ...option, checked: e.target.checked };
      } else {
        return option;
      }
    });
    setOptions(changed);
    console.log(options);
    const selected = options.filter((option) => option.checked);
    setAnswer(selected);
  };

  return (
    <Card>
      <Space direction='vertical'>
        {options.map((option) => (
          <div key={option.id}>
            <Checkbox onChange={(e) => handleCheckbox(e, option.id)}>
              <Input
                value={option.value}
                onChange={(e) => handleChange(e, option.id)}
              />
            </Checkbox>
            <button onClick={() => handleDeleteOption(option.id)}>
              <AiFillCloseCircle />
            </button>
          </div>
        ))}
      </Space>
      <Button onClick={handleAddOption}>Add</Button>
    </Card>
  );
};

export default CheckboxQuestion;
