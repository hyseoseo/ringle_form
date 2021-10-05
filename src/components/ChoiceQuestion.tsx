import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { SelectValue } from 'antd/lib/select';
import RadioOption from './RadioOption';
import CheckboxOption from './CheckboxOption';

export type Option = {
  id: number;
  value: string;
};

const initialOptions: Option[] = [{ id: 1, value: 'Write your choice here' }];

interface IProps {
  type: SelectValue;
}

const ChoiceQuestion: React.FC<IProps> = ({ type }) => {
  const [options, setOptions] = useState(initialOptions);
  const [question, setQuestion] = useState('Question Text');

  const handleAddOption = () => {
    if (options.length) {
      setOptions([
        ...options,
        {
          id: options[options.length - 1].id + 1,
          value: 'Write your choice here',
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

  const decideType = () => {
    if (type === 'radio') {
      return (
        <RadioOption
          options={options}
          handleChange={handleChange}
          handleDeleteOption={handleDeleteOption}
        />
      );
    }
    if (type === 'checkbox') {
      return (
        <CheckboxOption
          options={options}
          handleChange={handleChange}
          handleDeleteOption={handleDeleteOption}
        />
      );
    }
  };

  return (
    <Card>
      {decideType()}
      <Button onClick={handleAddOption}>Add</Button>
    </Card>
  );
};

export default ChoiceQuestion;
