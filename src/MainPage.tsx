import React from 'react';
import { Divider } from 'antd';
import { useSelector } from 'react-redux';

import { RootState } from 'store/configureStore';
import Title from 'components/Title';
import AddQuestionMenu from 'components/AddQuestionMenu';
import Question from 'components/Question';
import SubmitButton from 'components/SubmitButton';

const MainPage: React.FC = () => {
  const questions = useSelector((state: RootState) => state.question);

  return (
    <div>
      <Title />
      <Divider dashed />
      <AddQuestionMenu />
      {questions.map((question) => (
        <Question question={question} />
      ))}
      <SubmitButton />
    </div>
  );
};

export default MainPage;
