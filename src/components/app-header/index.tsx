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
        title: '切换站点',
        description: '点击切换站点，每个站点下网站皆为不同。',
        target: () => document.getElementById('app-site') as HTMLElement
      },
      {
        title: '全栈搜索',
        description: '输入搜索全栈的网站信息，根据名称和简介来进行搜索',
        target: () => document.getElementById('app-input') as HTMLElement
      },
      {
        title: '快速跳转',
        description: '点击不同标签，右侧内容部分就会快速滚动到相应标签的卡片',
        target: () => document.getElementById('app-tag') as HTMLElement
      },
      {
        title: '引擎搜索',
        description:
          '通过选择相关引擎，输入搜索内容，回车即可跳转到相关搜索界面',
        target: () => document.getElementById('app-search') as HTMLElement
      },
      {
        title: '收藏',
        description:
          '用户通过下方网站进行收藏，每个站点收藏内容都是独立的，互不干扰',
        target: () => document.getElementById('map-collect') as HTMLElement
      },
      {
        title: '网站',
        description:
          '每个卡片下会有多个网站，点击网站即可跳转，滑入点击右上角，即可收藏',
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
