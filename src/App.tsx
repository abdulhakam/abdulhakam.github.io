import HomePage from "./pages/Home";
import "./App.css";
import { Col, ConfigProvider, Layout, Row } from "antd";
import customTheme from "./theme/customTheme";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/global/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ConfigProvider theme={customTheme()}>
        <Layout>
          <Row style={{height:'100vh'}}>
            <Col span={2} style={{height:'100vh',display:"flex",alignItems:'center'}}><Navbar/></Col>
            <Col span={22}>
                <Routes>
                  <Route path='/' element={<HomePage key='home'/>}/>
                  <Route path='/home' element={<HomePage/>} />
                  <Route path='/skills' element={<Skills />}/>
                  <Route path='/projects' element={<Projects />}/>
                  <Route path='/about' element={<About/>}/>
                </Routes>
            </Col>
          </Row>
        </Layout>
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
