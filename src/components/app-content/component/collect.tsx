import { Avatar, Card, Col, Empty, Row, Tooltip } from 'antd'
import { IconFont } from '../../../constants'
import { IItem } from '../../../data/types'

type collectPopup = {
  localCollect: { [key: string]: IItem[] } | undefined
  siteData: string
  setLocalCollect: (val: { [key: string]: IItem[] }) => void
}

export const CollectCard: React.FC<collectPopup> = ({
  localCollect,
  siteData,
  setLocalCollect
}) => {
  return (
    <Card
      bodyStyle={{ paddingBottom: 8 }}
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="titleIcon">
            <IconFont type={'icon-favorites'} />
          </div>

          <div style={{ color: '#1D2B3A' }}>收藏</div>
        </div>
      }
      className="item-content"
      id={`map-collect`}
    >
      <Row className="card" gutter={[16, 16]}>
        {localCollect?.[siteData] && localCollect?.[siteData].length ? (
          localCollect?.[siteData].map((val, index) => {
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
                key={`collect_${val.site_url}_${index}`}
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
                      <p className="card-description">{val.description}</p>
                    </Tooltip>
                  </div>
                  <div className="collect">
                    <IconFont
                      type="icon-a-xingxing1"
                      style={{
                        display: 'block'
                      }}
                      className="collect_icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        const newSiteData = localCollect?.[siteData]?.filter(
                          (item) => {
                            return (
                              item.name !== val.name &&
                              item.site_url !== val.site_url
                            )
                          }
                        )
                        setLocalCollect({
                          ...localCollect,
                          [siteData]: newSiteData ?? []
                        })
                      }}
                    />
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
}
