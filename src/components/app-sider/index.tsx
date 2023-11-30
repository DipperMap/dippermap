import logo from "../../assets/logo.png";
import { IGroup, siteConfig } from "../../data/config";
import "./index.css";
import { Space, Tag } from "antd";

export const AppSider = () => {
  const tagClick = (item: IGroup) => {
    const element = document.querySelector(`#${item.name}`);
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="logo">
        <img width={150} src={logo} alt="" />
      </div>
      <div className="all-tag">
        {Object.keys(siteConfig).map((item) => {
          return (
            <Space>
              <Tag
                className="tag-item"
                onClick={() => tagClick(siteConfig[item])}
              >
                {siteConfig[item].name}
              </Tag>
            </Space>
          );
        })}
      </div>
    </div>
  );
};
