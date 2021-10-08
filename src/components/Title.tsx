import React from 'react';
import { Card, Input } from 'antd';
import { TitleInfo } from 'MainPage';

interface IProps {
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  titleInfo: TitleInfo;
}

const Title: React.FC<IProps> = ({ handleTitleChange, titleInfo }) => {
  return (
    <Card className='title-card'>
      <Input
        value={titleInfo.title}
        onChange={handleTitleChange}
        className='question-text'
        name='title'
      />
      <Input
        value={titleInfo.desc}
        onChange={handleTitleChange}
        className='detail-text'
        name='desc'
      />
    </Card>
  );
};

export default React.memo(
  Title,
  (prevProps, nextProps) => prevProps.titleInfo === nextProps.titleInfo,
);
