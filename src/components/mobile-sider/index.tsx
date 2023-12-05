import Sider from 'antd/es/layout/Sider'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import logoIcon from '../../assets/logo_icon.png'
import { SitesConfig } from '../../data/sites'
import { IGroup } from '../../data/types'
import {
  AppstoreOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  CheckOutlined
} from '@ant-design/icons'
import { Space, Tag } from 'antd'

type MobileSiderPopup = {
  siteData: string
  setSiteData: (value: string) => void
}

export const MobileSider: React.FC<MobileSiderPopup> = ({
  siteData,
  setSiteData
}) => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined)
  const [collapsed, setCollapsed] = useState(false)
  const [activeIcon, setActiveIcon] = useState(false)
  const [activeSite, setActiveSite] = useState(false)
  const siteConfig = SitesConfig[siteData]
  const divRef = useRef<any>(null)

  const tagClick = (item: IGroup) => {
    const element = document.querySelector(`#map-${item.name}`)
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      setSelectedTag(item.name)
    }
  }
  useEffect(() => {
    const handleTouchStart = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        // 触摸开始于元素之外
        setActiveIcon(false)
        setActiveSite(false)
        setCollapsed(false)
      }
    }

    document.addEventListener('touchstart', handleTouchStart)

    // 清理函数，移除事件监听器
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])
  return (
    <Sider
      className={classNames(['mobile-sider'])}
      style={{ height: collapsed ? 230 : 64 }}
    >
      <div ref={divRef}>
        <div className="mobile-header">
          <div className="mobile-logo">
            <img width={40} src={logoIcon} alt="" />
            <div
              onClick={(e) => {
                e.stopPropagation()
                setActiveSite(!activeSite)
                if (!activeSite && activeIcon) {
                  setCollapsed(true)
                  setActiveIcon(false)
                } else if (!activeSite && !activeIcon) {
                  setCollapsed(true)
                } else {
                  setCollapsed(false)
                }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 20
              }}
            >
              <div className={activeSite ? 'active-site-text' : 'site-text'}>
                {siteConfig.name}
              </div>
              <div className={activeSite ? 'active-site-icon' : 'site-icon'}>
                <CaretUpOutlined />
                <CaretDownOutlined />
              </div>
            </div>
          </div>
          <div>
            <AppstoreOutlined
              className={
                activeIcon ? 'active_collapsed_icon' : 'collapsed_icon'
              }
              onClick={() => {
                setActiveIcon(!activeIcon)
                if (activeSite && !activeIcon) {
                  setCollapsed(true)
                  setActiveSite(false)
                } else if (!activeSite && !activeIcon) {
                  setCollapsed(true)
                } else {
                  setCollapsed(false)
                }
              }}
            />
          </div>
        </div>
        <div className="mobile-content">
          {activeIcon && (
            <div>
              {siteConfig.groups.map((group: IGroup) => {
                return (
                  <Space key={group.name}>
                    <Tag
                      className={classNames([
                        'mobile-tag-item',
                        selectedTag === group.name
                          ? 'mobile-selected-tag'
                          : 'mobile-tag'
                      ])}
                      onClick={(e) => {
                        e.stopPropagation()
                        tagClick(group)
                      }}
                    >
                      {group.name}
                    </Tag>
                  </Space>
                )
              })}
            </div>
          )}
          {activeSite && (
            <div className="mobile-site-content">
              {Object.keys(SitesConfig).map((key: string) => {
                return (
                  <div
                    key={key}
                    className={
                      key === siteData ? 'active-site-item' : 'site-item'
                    }
                    onClick={(e) => {
                      e.stopPropagation()
                      setSiteData(key)
                      const currentUrl = new URL(window.location.href)

                      // 获取URL的查询参数对象
                      const searchParams = new URLSearchParams(
                        currentUrl.search
                      )
                      searchParams.set('site', key) // 添加新的参数param3
                      // 将更新后的查询参数设置到URL对象
                      currentUrl.search = searchParams.toString()

                      // 更新浏览器地址栏，但不会重新加载页面
                      window.history.pushState({}, '', currentUrl)
                    }}
                  >
                    <div>{SitesConfig[key].name}</div>
                    {key === siteData && <CheckOutlined />}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </Sider>
  )
}
