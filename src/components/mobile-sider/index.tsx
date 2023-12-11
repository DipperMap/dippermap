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
import { UrlSetSite } from '../../utils'

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
  const divRef = useRef<HTMLDivElement>(null)

  const tagClick = (item: IGroup) => {
    const element = document.querySelector(
      `#map-${item.name.replace(/\s/g, '-').replace(/\+/g, 'plus')}`
    )
    if (element) {
      // element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - 68
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setSelectedTag(item.name)
    }
  }
  useEffect(() => {
    const handleTouchStart: EventListener = (event) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setActiveIcon(false)
        setActiveSite(false)
        setCollapsed(false)
      }
    }
    document.addEventListener('touchstart', handleTouchStart)
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
            <img
              width={40}
              src={logoIcon}
              alt=""
              onClick={() => {
                setSiteData('main')
                UrlSetSite('main')
                setSelectedTag(undefined)
                setActiveIcon(false)
                setActiveSite(false)
                setCollapsed(false)
              }}
            />
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
              className="mobile-sider-select"
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
                      UrlSetSite(key)
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
