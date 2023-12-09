import { useEffect, useMemo, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import type { IGroup } from '../../data/types'
import { SitesConfig } from '../../data/sites'
import './index.css'
import { Space, Tag } from 'antd'
import classNames from 'classnames'
import logoIcon from '../../assets/logo_icon.png'
import {
  AppstoreOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  CheckOutlined
} from '@ant-design/icons'

type AppSilderPopup = {
  collapsed: boolean
  siteData: string
  setSiteData: (value: string) => void
}

export const AppSider: React.FC<AppSilderPopup> = ({
  collapsed,
  siteData,
  setSiteData
}) => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined)
  const [activeIcon, setActiveIcon] = useState(false)
  const [activeSite, setActiveSite] = useState(false)
  const siteConfig = SitesConfig[siteData]
  const divRef = useRef<any>(null)
  const collapsedTag = useRef<any>(null)

  const tagClick = (item: IGroup) => {
    const element = document.querySelector(`#map-${item.name}`)
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      setSelectedTag(item.name)
    }
  }
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setActiveSite(false)
      }
      if (
        collapsedTag.current &&
        !collapsedTag.current.contains(event.target)
      ) {
        setActiveIcon(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  const content = useMemo(() => {
    return activeSite ? (
      <div className="site-content">
        {Object.keys(SitesConfig).map((key: string) => {
          return (
            <div
              key={key}
              className={key === siteData ? 'active-site-item' : 'site-item'}
              onClick={(e) => {
                e.stopPropagation()
                setSiteData(key)
                const currentUrl = new URL(window.location.href)
                const searchParams = new URLSearchParams(currentUrl.search)
                searchParams.set('site', key)
                currentUrl.search = searchParams.toString()
                window.history.pushState({}, '', currentUrl)
              }}
            >
              <div>{SitesConfig[key].name}</div>
              {key === siteData && <CheckOutlined />}
            </div>
          )
        })}
      </div>
    ) : null
  }, [siteData, activeSite])
  return (
    <div>
      <div className="logo">
        <img
          width={40}
          style={{
            maxWidth: 40,
            minWidth: 40,
            display: collapsed ? 'block' : 'none'
          }}
          src={logoIcon}
          alt=""
        />
        <img
          width={150}
          style={{
            maxWidth: 150,
            minWidth: 150,
            display: !collapsed ? 'block' : 'none'
          }}
          src={logo}
          alt=""
        />
        {!collapsed && (
          <div className="site">
            <div
              ref={divRef}
              onClick={(e) => {
                e.stopPropagation()
                setActiveSite(!activeSite)
              }}
              className="silder-select"
            >
              <div className={activeSite ? 'active-site-text' : 'site-text'}>
                {siteConfig.name}
              </div>
              <div className={activeSite ? 'active-site-icon' : 'site-icon'}>
                <CaretUpOutlined />
                <CaretDownOutlined />
              </div>
            </div>

            {content}
          </div>
        )}
      </div>
      {collapsed ? (
        <div className="collapsed_block" ref={collapsedTag}>
          <AppstoreOutlined
            className={activeIcon ? 'active_collapsed_icon' : 'collapsed_icon'}
            onClick={() => {
              setActiveIcon(!activeIcon)
            }}
          />
          {activeIcon && (
            <div className="collapsed_tag">
              {siteConfig.groups.map((group: IGroup) => {
                return (
                  <Space key={group.name}>
                    <Tag
                      className={classNames([
                        'tag-item',
                        selectedTag === group.name ? 'selected-tag' : 'tag'
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
        </div>
      ) : (
        <div className="all-tag">
          {siteConfig.groups.map((group: IGroup) => {
            return (
              <Space key={group.name}>
                <Tag
                  className={classNames([
                    'tag-item',
                    selectedTag === group.name ? 'selected-tag' : 'tag'
                  ])}
                  onClick={() => {
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
    </div>
  )
}
