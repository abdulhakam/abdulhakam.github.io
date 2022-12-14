import "./App.css";
import { Col, ConfigProvider, Layout, Row } from "antd";
import customTheme from "./theme/customTheme";
import Navbar from "./components/global/Navbar";
import { HashRouter} from "react-router-dom";
import AnimatedRoutes from "./components/global/AnimatedRoutes";



function App() {

  return (
    <HashRouter>
      <ConfigProvider theme={customTheme()}>
        <Layout>
          <Row style={{height:'100vh'}}>
            <Col span={2} style={{height:'100vh',display:"flex",alignItems:'center'}}><Navbar/></Col>
            <Col span={22}>
              <AnimatedRoutes/>
            </Col>
          </Row>
        </Layout>
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
