import React, { useState } from 'react';
import { Button, Divider } from 'antd';
import { useSelector } from 'react-redux';

import { RootState } from 'store/configureStore';
import Title from 'components/Title';
import AddQuestionButton from 'components/AddQuestionButton';
import Question from 'components/Question';

export type TitleInfo = {
  title: string;
  desc: string;
};

const MainPage: React.FC = () => {
  const questions = useSelector((state: RootState) => state.question);
  const [titleInfo, setTitleInfo] = useState<TitleInfo>({
    title: 'Default Title',
    desc: 'Default Detail',
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInfo({ ...titleInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(titleInfo);
    console.log(questions);
  };

  return (
    <div className='mainpage-container'>
      <Title titleInfo={titleInfo} handleTitleChange={handleTitleChange} />
      <Divider />
      <AddQuestionButton />
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <Button type='primary' onClick={handleSubmit} className='submit-button'>
        Submit
      </Button>
    </div>
  );
};

export default MainPage;
