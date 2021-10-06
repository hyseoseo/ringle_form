import React, { useState } from 'react';
import { Divider } from 'antd';
import { useSelector } from 'react-redux';

import { RootState } from 'store/configureStore';
import Title from 'components/Title';
import AddQuestionMenu from 'components/AddQuestionMenu';
import Question from 'components/Question';
import SubmitButton from 'components/SubmitButton';

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
  console.log(titleInfo);

  return (
    <div className='mainpage-container'>
      <Title titleInfo={titleInfo} handleTitleChange={handleTitleChange} />
      <Divider dashed />
      <AddQuestionMenu />
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <SubmitButton />
    </div>
  );
};

export default MainPage;
