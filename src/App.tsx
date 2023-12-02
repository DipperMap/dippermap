import { Layout } from 'antd'
import './App.css'
import { AppCard } from './components/app-content'
import { AppSider } from './components/app-sider'
import React,{ useState, useEffect } from 'react'
import classNames from 'classnames'
import { AppHeader } from './components/app-header'
import { AppSearch } from './components/app-search'

const { Header, Footer, Sider, Content } = Layout
function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    if (window.innerWidth <= 767) {
      setCollapsed(true)
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <Layout className="App">
      <Sider
        className={classNames([
          'App-sider',
          collapsed
            ? window.innerWidth <= 767
              ? 'retractSiderHeight'
              : 'retractSiderWidth'
            : 'siderWidth'
        ])}
      >
        <AppSider
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          screenWidth={screenWidth}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 0 : screenWidth <= 767 ? 0 : 270,
          marginTop: screenWidth <= 767 ? 64 : 0
        }}
      >
        <Header className="App-header">
          <AppHeader
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            screenWidth={screenWidth}
          />
        </Header>
        <Content className="App-content">
          <AppSearch />
          <AppCard />
        </Content>
        <Footer className="App-footer">DipperMap</Footer>
      </Layout>
    </Layout>
  )
}

export default App
