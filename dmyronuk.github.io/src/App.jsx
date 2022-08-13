import React from "react";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Projects from "./components/Projects/Projects";
import Employment from "./components/Employment/Employment";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";


const App = () => (
  <div className="main-flex-container">
    <Header />
    <Summary />
    <Employment />
    <Education />
    <Projects />
    <Footer />
  </div>
);

export default App;
