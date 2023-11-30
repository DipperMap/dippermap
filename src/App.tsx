import { Layout, Button } from "antd";
import "./App.css";
import { AppCard } from "./components/app-content";
import { AppSider } from "./components/app-sider";
import { useState } from "react";
import classNames from "classnames";
import { AppHeader } from "./components/app-header";
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
          <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
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
