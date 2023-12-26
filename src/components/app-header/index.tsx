import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  WechatOutlined,
  GithubOutlined,
  FlagOutlined
} from '@ant-design/icons'
import './index.css'
import { Button, Divider, Tooltip, Tour, TourProps } from 'antd'
import weChat from '../../assets/weixin.jpeg'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocalStorageState } from 'ahooks'

type AppHeaderProps = {
  collapsed: boolean
  setCollapsed: (val: boolean) => void
}

type TourSteps = {
  title: string
  description: string
  target: () => HTMLElement | null
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  setCollapsed,
  collapsed
}) => {
  const [open, setOpen] = useState(false)
  const [firstOpen, setFirstOpen] = useLocalStorageState<boolean>('firstOpen', {
    defaultValue: true
  })
  const [startTour, setStartTour] = useState<TourSteps[] | undefined>(undefined)

  useEffect(() => {
    if (firstOpen) {
      setOpen(true)
      setFirstOpen(false)
    }
  }, [])

  useLayoutEffect(() => {
    const steps = [
      {
        title: '快速站点切换',
        description:
          '通过点击“站点切换”，即可轻松浏览每个站点下的独特网站内容。',
        target: () => document.getElementById('app-site') as HTMLElement
      },
      {
        title: '站点内搜索',
        description: '在搜索框输入关键字，快速找到站点内相关的网站和信息。',
        target: () => document.getElementById('app-input') as HTMLElement
      },
      {
        title: '标签快速导航',
        description: '点击不同的快速导航标签，页面将立即滚动至对应的内容区域。',
        target: () => document.getElementById('app-tag') as HTMLElement
      },
      {
        title: '搜索引擎直达',
        description:
          '选中想要的搜索引擎，输入关键词并按回车，直接进入搜索结果页面。',
        target: () => document.getElementById('app-search') as HTMLElement
      },
      {
        title: '一键收藏功能',
        description: '对您感兴趣的站点进行一键收藏。',
        target: () => document.getElementById('map-collect') as HTMLElement
      },
      {
        title: '网站快速访问',
        description:
          '点选卡片中的网站链接，即可直接跳转访问。将鼠标悬停至卡片右上角，一键添加至收藏。',
        target: () => {
          const elements = document.getElementsByClassName('item-content')
          if (
            elements &&
            elements.length > 1 &&
            elements[1] instanceof HTMLElement
          ) {
            return elements[1] as HTMLElement
          }
          return null // 如果没有找到元素，返回 null
        }
      }
    ]
    setStartTour(steps)
  }, [])

  return (
    <div className="app-header">
      <div
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        <div className="header_icon">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
      <div className="header-right">
        <div style={{ marginRight: 20 }}>
          <Button
            type="text"
            onClick={() => {
              setOpen(true)
            }}
            icon={<FlagOutlined />}
          >
            引导
          </Button>
          <Divider type="vertical" />
        </div>

        <div className="weChat">
          <Tooltip
            color={'#fff'}
            placement="bottom"
            title={
              <div>
                <div className="weChatText">
                  <span>微信扫一扫关注</span>
                </div>
                <img
                  style={{ paddingTop: 6 }}
                  width={130}
                  src={weChat}
                  alt=""
                />
              </div>
            }
          >
            <WechatOutlined className="header_icon" />
          </Tooltip>
        </div>
        <div className="gitHub">
          <GithubOutlined
            className="header_icon"
            onClick={() => {
              window.open('https://github.com/DipperMap/dippermap')
            }}
          />
        </div>
      </div>

      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={startTour as TourProps['steps']}
      />
    </div>
  )
}
