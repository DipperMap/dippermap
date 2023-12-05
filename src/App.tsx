import { Layout, FloatButton } from 'antd'
import './App.css'
import { AppCard } from './components/app-content'
import { AppSider } from './components/app-sider'
import { useState, useMemo, useEffect } from 'react'
import classNames from 'classnames'
import { AppHeader } from './components/app-header'
import { AppSearch } from './components/app-search'
import { useLocalStorageState } from 'ahooks'
import { isMobileDevice } from './utils'
const { Header, Footer, Sider, Content } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(isMobileDevice())
  const [siteData, setSiteData] = useLocalStorageState<any>('siteData', {
    defaultValue: 'main'
  })

  useEffect(() => {
    // 获取当前页面的URL对象
    const currentUrl = new URL(window.location.href)

    // 获取URL的查询参数对象
    const searchParams = new URLSearchParams(currentUrl.search)
    if (searchParams.get('site')) {
      setSiteData(searchParams.get('site'))
    } else {
      searchParams.append('site', siteData) // 添加新的参数param3
      // 将更新后的查询参数设置到URL对象
      currentUrl.search = searchParams.toString()

      // 更新浏览器地址栏，但不会重新加载页面
      window.history.pushState({}, '', currentUrl)
    }
  }, [])
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
        className="contentLayout"
      >
        <Header className="App-header">
          <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Content className="App-content">
          <AppSearch />
          <AppCard siteData={siteData} />
        </Content>
        <Footer className="App-footer">DipperMap 星辰地图站点导航</Footer>
        <FloatButton.BackTop style={{ insetBlockEnd: '96px' }} />
      </Layout>
    </Layout>
  )
}

export default App
