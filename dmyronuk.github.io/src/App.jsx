import React from "react";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Projects from "./components/Projects/Projects";
import Employment from "./components/Employment/Employment";
import Education from "./components/Education/Education";
import Awards from "./components/Awards/Awards";
import Footer from "./components/Footer/Footer";


const App = () => (
  <div className="main-flex-container">
    <Header />
    <Summary />
    <Employment />
    <Education />
    <Projects />
    <Awards />
    <Footer />
  </div>
);

export default App;
