import HomePage from "./pages/Home";
import "./App.css";
import { ConfigProvider, Layout } from "antd";
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
        <Layout style={{background:'black'}}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage key='home'/>}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Layout>
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
