import "./App.css";
import { Col, ConfigProvider, Layout, Row } from "antd";
import {darkTheme,lightTheme} from "./theme";
import Navbar from "./components/global/Navbar";
import { HashRouter} from "react-router-dom";
import AnimatedRoutes from "./components/global/AnimatedRoutes";
import ThemeToggle from "./components/global/ThemeToggle";
import { useSelector } from "react-redux";

function App() {
   // get theme from store
   const theme = useSelector((state:any) => state.theme);

  return (
    <HashRouter>
      <ConfigProvider theme={theme.darkTheme? darkTheme() : lightTheme()}>
        <Layout>
          <Row style={{height:'100%'}}>
            <Col span={2} style={{height:'100vh',display:"flex",flexDirection:'column',justifyContent:'center'}}><ThemeToggle/><Navbar/></Col>
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
