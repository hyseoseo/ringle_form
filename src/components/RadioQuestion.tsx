import React, { useState } from 'react';
import { Button, Card, Radio, Space, Input, RadioChangeEvent } from 'antd';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';

const initialOptions = [{ id: 1, value: '' }];

const RadioQuestion: React.FC = () => {
  const [options, setOptions] = useState(initialOptions);
  const [answer, setAnswer] = useState('');

  const handleAddOption = () => {
    if (options.length) {
      setOptions([
        ...options,
        {
          id: options[options.length - 1].id + 1,
          value: '',
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

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const changed = options.map((option) => {
      if (option.id === id) {
        return { ...option, value: e.target.value };
      } else {
        return option;
      }
    });
    setOptions(changed);
  };

  const handleSelectedOption = (e: RadioChangeEvent) => {
    setAnswer(e.target.value);
    console.log(answer);
  };

  return (
    <Card>
      <Radio.Group onChange={handleSelectedOption} value={answer}>
        <Space direction='vertical'>
          {options.map((option) => (
            <div key={option.id}>
              <Radio value={option.value}>
                <Input
                  value={option.value}
                  onChange={(e) => handleOptionChange(e, option.id)}
                />
              </Radio>
              <button onClick={() => handleDeleteOption(option.id)}>
                <AiFillCloseCircle />
              </button>
            </div>
          ))}
        </Space>
      </Radio.Group>
      <Button onClick={handleAddOption}>Add</Button>
    </Card>
  );
};

export default RadioQuestion;
