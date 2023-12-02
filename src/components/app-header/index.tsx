import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  WechatOutlined,
  GithubOutlined
} from '@ant-design/icons'
import './index.css'
import { Tooltip } from 'antd'
import weChat from '../../assets/weixin.jpeg'

type AppHeaderProps = {
  collapsed: boolean
  setCollapsed: (val: boolean) => void
  screenWidth: number
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  setCollapsed,
  collapsed,
  screenWidth
}) => {
  return (
    <div className="app-header">
      <div onClick={() => setCollapsed(!collapsed)}>
        {screenWidth > 767 && (
          <div>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>
        )}
      </div>
      <div className="header-right">
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
            <WechatOutlined />
          </Tooltip>
        </div>
        <div className="gitHub">
          <GithubOutlined
            onClick={() => {
              window.open('https://github.com/DipperMap/dippermap')
            }}
          />
        </div>
      </div>
    </div>
  )
}
