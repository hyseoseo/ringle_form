import React from 'react';
import { Card } from 'antd';

import { QuestionSet } from 'config';
import TextQuestion from './TextQuestion';

interface IProps {
  question: QuestionSet;
}

const Question: React.FC<IProps> = ({ question }) => {
  return (
    <Card>
      <TextQuestion />
    </Card>
  );
};

export default Question;
