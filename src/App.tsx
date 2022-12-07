import HomePage from "./pages/Home";
import "./App.css";
import { ConfigProvider, Layout } from "antd";
import customTheme from "./theme/customTheme";
import Skills from "./pages/Skills";

function App() {
  return (
    <ConfigProvider theme={customTheme()}>
      <Layout>
        <HomePage />
        <Skills />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
