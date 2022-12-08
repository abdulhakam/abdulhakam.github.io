import HomePage from "./pages/Home";
import "./App.css";
import { ConfigProvider, Layout } from "antd";
import customTheme from "./theme/customTheme";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <ConfigProvider theme={customTheme()}>
      <Layout>
        <HomePage key='home'/>
        <Skills />
        <Projects />
        <About/>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
