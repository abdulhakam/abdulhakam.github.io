import HomePage from "./pages/Home";
import "./App.css";
import { ConfigProvider, Layout } from "antd";
import customTheme from "./theme/customTheme";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <ConfigProvider theme={customTheme()}>
      <Layout>
        <HomePage key='home'/>
        <Skills />
        <Projects />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
