import { siteConfig } from "../../data/config";
import { Avatar, Card, Tooltip } from "antd";
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
          >
            <div className="card">
              {siteConfig[item].children.map((val) => {
                return (
                  <div
                    className="card-item"
                    onClick={() => {
                      window.open(val.site_url);
                    }}
                  >
                    <div>
                      <Avatar
                        shape="square"
                        size={64}
                        src={val.logo ? val.logo : undefined}
                      >
                        {val.logo ? null : val.name.charAt(0)}
                      </Avatar>
                    </div>
                    <div className="link-content">
                      <span className="card-name">{val.name}</span>
                      <Tooltip title={val.description}>
                        <p className="card-description">{val.description}</p>
                      </Tooltip>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
