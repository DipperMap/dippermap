import { Layout, FloatButton } from 'antd'
import './App.css'
import { AppCard } from './components/app-content'
import { AppSider } from './components/app-sider'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { AppHeader } from './components/app-header'
import { AppSearch } from './components/app-search'
import { useLocalStorageState } from 'ahooks'
import { isMobileDevice } from './utils'
import { MobileSider } from './components/mobile-sider'
const { Header, Footer, Sider, Content } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(isMobileDevice())
  const [siteData, setSiteData] = useLocalStorageState<string>('siteData', {
    defaultValue: 'main'
  })

  useEffect(() => {
    const currentUrl = new URL(window.location.href)
    const searchParams = new URLSearchParams(currentUrl.search)
    const siteFromParams = searchParams.get('site')
    if (siteFromParams) {
      setSiteData(siteFromParams)
    } else {
      searchParams.append('site', siteData || '')
      currentUrl.search = searchParams.toString()
      window.history.pushState({}, '', currentUrl)
    }
  }, [siteData])

  return (
    <Layout className="App">
      {!isMobileDevice() ? (
        <Sider
          className={classNames([
            'App-sider',
            collapsed ? 'retractSiderWidth' : 'siderWidth'
          ])}
        >
          <AppSider
            collapsed={collapsed}
            siteData={siteData || ''}
            setSiteData={setSiteData}
          />
        </Sider>
      ) : (
        <MobileSider siteData={siteData || ''} setSiteData={setSiteData} />
      )}
      <Layout
        style={{
          marginLeft: !isMobileDevice() ? (collapsed ? 80 : 280) : 0,
          marginTop: !isMobileDevice() ? 0 : 64
        }}
        className="contentLayout"
      >
        {!isMobileDevice() && (
          <Header className="App-header">
            <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          </Header>
        )}

        <Content className="App-content">
          <AppSearch />
          <AppCard siteData={siteData || ''} />
        </Content>
        <Footer className="App-footer">DipperMap 星辰地图站点导航</Footer>
        <FloatButton.BackTop style={{ insetBlockEnd: '96px' }} />
      </Layout>
    </Layout>
  )
}

export default App
