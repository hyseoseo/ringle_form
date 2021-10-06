import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Checkbox, Space, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';
import { Option, QuestionSet } from 'config';
import { setQuestionOptions } from 'store/actions/questions';

const initialOptions: Option[] = [{ id: 1, value: '', checked: false }];

interface IProps {
  question: QuestionSet;
}

const CheckboxQuestion: React.FC<IProps> = ({ question }) => {
  const dispatch = useDispatch();
  const options = question.options;
  const [answer, setAnswer] = useState<Option[]>([]);

  const handleAddOption = () => {
    if (options.length) {
      dispatch(
        setQuestionOptions({
          id: question.id,
          option: [
            ...options,
            {
              id: options[options.length - 1].id + 1,
              value: '',
              checked: false,
            },
          ],
        }),
      );
    } else {
      dispatch(setQuestionOptions({ id: question.id, option: initialOptions }));
    }
  };

  const handleDeleteOption = (id: number) => {
    const removedOptions = options.filter((option) => option.id !== id);
    dispatch(setQuestionOptions({ id: question.id, option: removedOptions }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const changed = options.map((option) => {
      if (option.id === id) {
        return { ...option, value: e.target.value };
      } else {
        return option;
      }
    });
    dispatch(setQuestionOptions({ id: question.id, option: changed }));
  };

  const handleCheckbox = (e: CheckboxChangeEvent, id: number) => {
    const changed = options.map((option) => {
      if (option.id === id) {
        return { ...option, checked: e.target.checked };
      } else {
        return option;
      }
    });
    dispatch(setQuestionOptions({ id: question.id, option: changed }));
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
