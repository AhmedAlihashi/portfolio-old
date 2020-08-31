import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <Scrollbars style={{ width: "100vw", height: "100vh" }}>
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </Scrollbars>
    );
  }
}

export default App;
