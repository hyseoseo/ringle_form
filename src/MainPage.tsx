import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { TitleInfo } from 'config';
import { RootState } from 'store/configureStore';
import Title from 'components/Title';
import AddQuestionButton from 'components/AddQuestionButton';
import Question from 'components/Questions/Question';
import DivideLine from 'components/DivideLine';
import SubmitButton from 'components/SubmitButton';

const MainPage: React.FC = () => {
  const questions = useSelector((state: RootState) => state.question);
  const [titleInfo, setTitleInfo] = useState<TitleInfo>({
    title: 'Default Title',
    desc: 'Default Detail',
  });

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitleInfo({ ...titleInfo, [e.target.name]: e.target.value });
    },
    [titleInfo],
  );

  const handleSubmit = useCallback(() => {
    console.log('Title');
    console.log(titleInfo);
    console.log('Question List');
    console.log(questions);
  }, [titleInfo, questions]);

  return (
    <div className='mainpage-container'>
      <Title titleInfo={titleInfo} handleTitleChange={handleTitleChange} />
      <DivideLine />
      <AddQuestionButton />
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default MainPage;
