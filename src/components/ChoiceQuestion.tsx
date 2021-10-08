import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Checkbox, Space, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';
import { Option, QuestionSet } from 'config';
import { setQuestionOptions } from 'store/actions/questions';
import { SelectValue } from 'antd/lib/select';
import RadioOptions from './RadioOptions';
import CheckboxOptions from './CheckboxOptions';

const initialOptions: Option[] = [{ id: 1, value: '', checked: false }];

interface IProps {
  question: QuestionSet;
}

const ChoiceQuestion: React.FC<IProps> = ({ question }) => {
  const dispatch = useDispatch();
  const options = question.options;
  const type = question.type;
  const [answer, setAnswer] = useState<Option[]>([]);

  console.log('choice question');
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

  const handleRadio = (id: number) => {
    const changed = options.map((option) => {
      if (option.id === id) {
        return { ...option, checked: true };
      } else {
        return { ...option, checked: false };
      }
    });
    dispatch(setQuestionOptions({ id: question.id, option: changed }));
    const selected = options.filter((option) => option.checked);
    setAnswer(selected);
  };

  const SetType = (option: Option) => {
    if (type === 'radio')
      return (
        <RadioOptions
          option={option}
          handleRadio={handleRadio}
          handleChange={handleChange}
        />
      );
    if (type === 'checkbox')
      return (
        <CheckboxOptions
          option={option}
          handleCheckbox={handleCheckbox}
          handleChange={handleChange}
        />
      );
  };

  return (
    <div className='answer-card'>
      {options.map((option) => (
        <div key={option.id} className='option-content'>
          {SetType(option)}
          <button onClick={() => handleDeleteOption(option.id)}>
            <AiFillCloseCircle />
          </button>
        </div>
      ))}
      <div className='option-add-section'>
        <Button onClick={handleAddOption}>Add Option</Button>
      </div>
    </div>
  );
};

export default ChoiceQuestion;
