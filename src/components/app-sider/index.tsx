import logo from "../../assets/logo.png";
import { IGroup,} from "../../data/types";
import { SitesConfig } from '../../data/sites'
import "./index.css";
import { Space, Tag } from "antd";

export const AppSider = () => {
  const siteConfig = SitesConfig['main'];
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
        {siteConfig.groups.map((group: IGroup) => {
          return (
            <Space>
              <Tag
                className="tag-item"
                onClick={() => tagClick(group)}
              >
                {group.name}
              </Tag>
            </Space>
          );
        })}
      </div>
    </div>
  );
};
