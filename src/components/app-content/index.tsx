import { SitesConfig } from '../../data/sites'
import { Avatar, Row, Card, Col, Tooltip, FloatButton, Empty } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
import './index.css'
import { IGroup, IItem } from '../../data/types'
import { IconFont } from '../../constants'
import React, { useEffect, useMemo, useState } from 'react'
import { CollectCard } from './component/collect'
import { useLocalStorageState } from 'ahooks'
import classNames from 'classnames'
import { isMobileDevice } from '../../utils'

type AppCardPopup = {
  siteData: string
  siteSearch: string
}

export const AppCard: React.FC<AppCardPopup> = ({ siteData, siteSearch }) => {
  const [localCollect, setLocalCollect] = useLocalStorageState<IItem[]>(
    'collects',
    {
      defaultValue: []
    }
  )
  const [searchData, setSearchData] = useState<IGroup[]>([])

  const siteConfig = useMemo(() => {
    for (const key in SitesConfig) {
      SitesConfig[key].groups.forEach((item) => {
        item['key'] = key
        item.children.forEach((v) => {
          v['key'] = key
        })
      })
    }
    return SitesConfig
  }, [siteData])

  useEffect(() => {
    const newListData: IGroup[] = []
    const newData = Object.entries(SitesConfig)
      .map(([key, value]) => {
        return value.groups.map((item) => {
          return { ...item, key: key }
        })
      })
      .flat()
    newData.forEach((item) => {
      const { children } = item
      let newChildren: IItem[] = []

      if (siteSearch) {
        // siteSearch不是空字符串，创建不区分大小写的正则表达式
        const regex = new RegExp(siteSearch, 'gi')

        newChildren = children.filter((v) => {
          const { name, description } = v
          return regex.test(name) || regex.test(description)
        })
      }
      if (newChildren.length) {
        newListData.push({ ...item, children: newChildren })
      }
    })
    setSearchData(siteSearch ? newListData : siteConfig[siteData].groups)
  }, [siteSearch, siteConfig, siteData])

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
        id="map-card"
      >
        <CollectCard
          localCollect={localCollect as IItem[]}
          setLocalCollect={setLocalCollect}
        />
        {searchData.map((group: IGroup, index) => {
          const { name, children, icon } = group
          return (
            <Card
              bodyStyle={{ paddingBottom: 8 }}
              title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {icon && (
                    <div className="titleIcon">
                      <IconFont type={icon} />
                    </div>
                  )}
                  <div style={{ color: '#1D2B3A' }}>{name}</div>
                </div>
              }
              className={classNames(['item-content'])}
              id={`map-${name.replace(/\s/g, '-').replace(/\+/g, 'plus')}`}
              key={`${group.key}_${name}_${index}`}
            >
              <Row className="card" gutter={[16, 16]}>
                {children.length ? (
                  children.map((val, index) => {
                    const findData = localCollect?.find((item) => {
                      return item.name === val.name
                    })
                    return (
                      <Col
                        md={16}
                        lg={8}
                        xl={6}
                        xxl={4}
                        className="card-col"
                        onClick={() => {
                          window.open(val.site_url)
                        }}
                        key={`${name}_${val.name}_${index}`}
                      >
                        <div className="card-item">
                          <div>
                            <Avatar
                              className="link-img"
                              shape="square"
                              size={45}
                              src={val.icon ? val.icon : undefined}
                            >
                              {val.icon ? null : val.name.charAt(0)}
                            </Avatar>
                          </div>
                          <div className="link-content">
                            <span className="card-name">{val.name}</span>
                            <Tooltip title={val.description}>
                              <p className="card-description">
                                {val.description}
                              </p>
                            </Tooltip>
                          </div>
                          <div className="collect">
                            {findData ? (
                              <IconFont
                                type="icon-a-xingxing1"
                                style={{
                                  display: 'block'
                                }}
                                className="collect_icon"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  const newSiteData = localCollect?.filter(
                                    (item) => {
                                      return (
                                        item.name !== val.name &&
                                        item.site_url !== val.site_url
                                      )
                                    }
                                  )
                                  if (localCollect && newSiteData) {
                                    setLocalCollect(newSiteData)
                                  }
                                }}
                              />
                            ) : (
                              <IconFont
                                type="icon-xingxing"
                                style={{
                                  display: isMobileDevice() ? 'block' : 'none'
                                }}
                                className="collect_icon"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  if (localCollect) {
                                    const newData = [...localCollect, val]
                                    setLocalCollect(newData)
                                  }
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </Col>
                    )
                  })
                ) : (
                  <div className="empty">
                    <Empty
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                      description={'暂未收藏网站'}
                    />
                  </div>
                )}
              </Row>
            </Card>
          )
        })}
      </div>
      <FloatButton
        tooltip={<div>新站点提报</div>}
        icon={<FileTextOutlined style={{ color: '#1677ff' }} />}
        onClick={() => {
          window.open(
            'https://www.yuque.com/forms/share/0df1d286-b6c9-4412-9605-504af8cfb21f'
          )
        }}
      />
    </>
  )
}
