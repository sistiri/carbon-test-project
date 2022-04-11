import { Content, Theme } from "@carbon/react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import DemoHeader from "./components/DemoHeader";
import LandingPage from "./content/LandingPage/LandingPage";
import DemoPage from "./content/DemoPage";
import AboutPage from "./content/AboutPage";

function App() {
  return (
    <>
      <Theme theme="g100">
        <DemoHeader />
      </Theme>
      <Theme theme="white">
        <Content>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/demo" element={<DemoPage/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </Content>
      </Theme>
    </>
  );
}

export default App;
