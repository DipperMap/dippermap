import { useState } from 'react'
import logo from '../../assets/logo.png'
import type { IGroup } from '../../data/types'
import { SitesConfig } from '../../data/sites'
import './index.css'
import { Space, Tag } from 'antd'
import classNames from 'classnames'
import { AppstoreAddOutlined, CloseOutlined } from '@ant-design/icons'

type AppSilderPopup = {
  collapsed: boolean
  screenWidth: number
  setCollapsed: (value: boolean) => void
}

export const AppSider: React.FC<AppSilderPopup> = ({
  collapsed,
  screenWidth,
  setCollapsed
}) => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined)
  const siteConfig = SitesConfig['main']
  const tagClick = (item: IGroup) => {
    const element = document.querySelector(`#${item.name}`)
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      setSelectedTag(item.name)
    }
  }
  return (
    <div>
      <div className="logo">
        <img width={150} src={logo} alt="" />
        <div
          onClick={() => {
            setCollapsed(!collapsed)
          }}
        >
          {screenWidth <= 767 && (
            <div>{collapsed ? <CloseOutlined /> : <AppstoreAddOutlined />}</div>
          )}
        </div>
      </div>
      <div className="all-tag">
        {siteConfig.groups.map((group: IGroup) => {
          return (
            <Space key={group.name}>
              <Tag
                className={classNames([
                  'tag-item',
                  selectedTag === group.name ? 'selected-tag' : 'tag'
                ])}
                onClick={() => tagClick(group)}
              >
                {group.name}
              </Tag>
            </Space>
          )
        })}
      </div>
    </div>
  )
}
