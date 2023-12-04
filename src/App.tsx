import { Layout } from 'antd'
import './App.css'
import { AppCard } from './components/app-content'
import { AppSider } from './components/app-sider'
import { useState, useMemo } from 'react'
import classNames from 'classnames'
import { AppHeader } from './components/app-header'
import { AppSearch } from './components/app-search'
import { useLocalStorageState } from 'ahooks'
const { Header, Footer, Sider, Content } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [siteData, setSiteData] = useLocalStorageState<any>('siteData', {
    defaultValue: 'main'
  })
  const isPc = useMemo(() => {
    return !/Mobi|Android|iPhone/i.test(navigator.userAgent)
  }, [])
  return (
    <Layout className="App">
      <Sider
        className={classNames([
          'App-sider',
          collapsed ? 'retractSiderWidth' : 'siderWidth'
        ])}
      >
        <AppSider
          collapsed={collapsed}
          siteData={siteData}
          setSiteData={setSiteData}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 270
        }}
        className='contentLayout'
      >
        <Header className="App-header">
          <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Content className="App-content">
          <AppSearch />
          <AppCard siteData={siteData} />
        </Content>
        <Footer className="App-footer">DipperMap 星辰地图站点导航</Footer>
      </Layout>
    </Layout>
  )
}

export default App
