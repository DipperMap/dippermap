import { Layout } from "antd";
import "./App.css";
import { AppCard } from "./components/app-content";
import { AppSider } from "./components/app-sider";
import { AppSearch } from "./components/app-search";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Layout className="App">
      <Sider className="App-sider">
        <AppSider />
      </Sider>
      <Layout style={{ marginLeft: 270 }}>
        <Header className="App-header">DipperMap</Header>
        <Content className="App-content">
          <AppSearch />
          <AppCard />
        </Content>
        <Footer className="App-footer">DipperMap</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
