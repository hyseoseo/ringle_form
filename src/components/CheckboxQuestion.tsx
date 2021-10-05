import React, { useState } from 'react';
import { Button, Card, Checkbox, Space, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const initialOptions = [
  { id: 1, value: 'Write your choice here', checked: false },
];

const CheckboxQuestion: React.FC = () => {
  const [options, setOptions] = useState(initialOptions);
  const [question, setQuestion] = useState('Question Text');
  const [answer, setAnswer] = useState([]);

  const handleAddOption = () => {
    if (options.length) {
      setOptions([
        ...options,
        {
          id: options[options.length - 1].id + 1,
          value: 'Write your choice here',
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
            <Button onClick={() => handleDeleteOption(option.id)}>
              delete
            </Button>
          </div>
        ))}
      </Space>
      <Button onClick={handleAddOption}>Add</Button>
    </Card>
  );
};

export default CheckboxQuestion;
