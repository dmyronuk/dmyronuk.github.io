import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Employment from "./components/Employment";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Footer from "./components/Footer";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="main-flex-container">
          <Header />
          <Summary />
          <Employment />
          <Education />
          <Projects />
          <Awards />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
