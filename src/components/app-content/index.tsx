import { SitesConfig } from '../../data/sites'
import { Avatar, Row, Card, Col, Tooltip, FloatButton } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
import './index.css'
import { IGroup, IItem } from '../../data/types'
import { IconFont } from '../../constants'
import React from 'react'
import { CollectCard } from './component/collect'
import { useLocalStorageState } from 'ahooks'

type AppCardPopup = {
  siteData: string
}

export const AppCard: React.FC<AppCardPopup> = ({ siteData }) => {
  const siteConfig = SitesConfig[siteData]
  const [localCollect, setLocalCollect] = useLocalStorageState<{
    [key: string]: IItem[]
  }>('collect', {
    defaultValue: {}
  })

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <CollectCard
          localCollect={localCollect}
          siteData={siteData}
          setLocalCollect={setLocalCollect}
        />
        {siteConfig.groups.map((group: IGroup) => {
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
              className="item-content"
              id={`map-${name.replace(/\s/g, '-').replace(/\+/g, 'plus')}`}
              key={name}
            >
              <Row className="card" gutter={[16, 16]}>
                {children.map((val) => {
                  const findData = localCollect?.[siteData]?.find((item) => {
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
                      key={val.site_url}
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
                              type="icon-a-shoucangyishoucang"
                              onClick={(e) => {
                                e.stopPropagation()
                                const newSiteData = localCollect?.[
                                  siteData
                                ]?.filter((item) => {
                                  return item.name !== val.name
                                })
                                setLocalCollect({
                                  ...localCollect,
                                  [siteData]: newSiteData ?? []
                                })
                              }}
                            />
                          ) : (
                            <IconFont
                              type="icon-a-shoucangweishoucang"
                              style={{
                                width: 32,
                                height: 32,
                                justifyContent: 'center'
                              }}
                              onClick={(e) => {
                                e.stopPropagation()
                                const newData = {
                                  ...localCollect,

                                  [siteData]: localCollect
                                    ? [...localCollect[siteData], val]
                                    : [val]
                                }
                                setLocalCollect(newData)
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </Col>
                  )
                })}
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
