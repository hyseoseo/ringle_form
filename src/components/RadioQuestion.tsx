import React, { useState } from 'react';
import { Button, Card, Radio, Space, Input } from 'antd';

const initialOptions = [{ id: 1, value: 'Write your choice here' }];

const RadioQuestion: React.FC = () => {
  const [options, setOptions] = useState(initialOptions);
  const [question, setQuestion] = useState('Question Text');

  const handleAddOption = () => {
    setOptions([
      ...options,
      {
        id: options[options.length - 1].id + 1,
        value: 'Write your choice here',
      },
    ]);
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

  return (
    <Card>
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
      <Button onClick={handleAddOption}>Add</Button>
    </Card>
  );
};

export default RadioQuestion;
