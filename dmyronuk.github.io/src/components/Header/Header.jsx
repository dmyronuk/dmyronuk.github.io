import React from "react";
import "./Header.css";

const Header = () => (
  <header className="flex-row justify-content-center header-top">
    <div>
      <a href="/#summary">Summary</a>
    </div>
    <div>
      <a href="/#employment">Employment</a>
    </div>
    <div>
      <a href="/#education">Education</a>
    </div>
    <div>
      <a href="/#projects">Projects</a>
    </div>
  </header>
);

export default Header;