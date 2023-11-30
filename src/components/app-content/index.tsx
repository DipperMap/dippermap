import { siteConfig } from "../../data/config";
import { Avatar, Row, Card, Col, Tooltip } from "antd";
import "./index.css";

export const AppCard = () => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {Object.keys(siteConfig).map((item) => {
        return (
          <Card
            title={siteConfig[item].name}
            className="item-content"
            id={siteConfig[item].name}
            key={siteConfig[item].name}
          >
            <Row className="card" gutter={[16, 16]}>
              {siteConfig[item].children.map((val) => {
                return (
                  <Col
                    md={18}
                    lg={12}
                    xl={12}
                    xxl={4}
                    className="card-col"
                    onClick={() => {
                      window.open(val.site_url);
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
                          <p className="card-description">{val.description}</p>
                        </Tooltip>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Card>
        );
      })}
    </div>
  );
};
