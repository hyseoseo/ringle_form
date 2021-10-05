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
  console.log(questions);

  return (
    <div>
      <Title />
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
