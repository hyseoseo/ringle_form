import React from 'react';
import { Layout } from 'antd';

import './App.less';
import MainPage from './MainPage';

const App: React.FC = () => {
  const { Header, Content } = Layout;
  return (
    <div className='App'>
      <Layout>
        <Header>
          <h1 style={{ color: 'white' }}>Survey Form Creator</h1>
        </Header>
        <Content>
          <MainPage />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
