import { Layout, Button } from "antd";
import "./App.css";
import { AppCard } from "./components/app-content";
import { AppSider } from "./components/app-sider";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import classNames from "classnames";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="App">
      <Sider
        className={classNames([
          "App-sider",
          collapsed ? "retractSiderWidth" : "siderWidth",
        ])}
      >
        <AppSider />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 0 : 270 }}>
        <Header className="App-header">
          <div onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Header>
        <Content className="App-content">
          <AppCard />
        </Content>
        <Footer className="App-footer">DipperMap</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
