import { SitesConfig } from "../../data/sites";
import { Avatar, Row, Card, Col, Tooltip, FloatButton } from "antd";
import "./index.css";
import { IGroup } from "../../data/types";

export const AppCard = () => {
  const siteConfig = SitesConfig["main"];
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {siteConfig.groups.map((group: IGroup) => {
        const { name, children } = group;
        return (
          <Card title={name} className="item-content" id={name} key={name}>
            <Row className="card" gutter={[16, 16]}>
              {children.map((val) => {
                return (
                  <Col
                    md={16}
                    lg={8}
                    xl={6}
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
      <FloatButton
        tooltip={<div>新站点提报</div>}
        onClick={() => {
          window.open(
            "https://www.yuque.com/forms/share/0df1d286-b6c9-4412-9605-504af8cfb21f"
          );
        }}
      />
    </div>
  );
};
