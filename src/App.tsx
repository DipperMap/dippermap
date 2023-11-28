import React from 'react';
import { Layout } from 'antd';
import logo from './logo.png';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Sider className='App-sider'>DipperMap</Sider>
        <Layout>
          <Header className='App-header'>DipperMap</Header>
          <Content className='App-content'>DipperMap 星辰地图网站导航</Content>
          <Footer className='App-footer'>DipperMap</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
