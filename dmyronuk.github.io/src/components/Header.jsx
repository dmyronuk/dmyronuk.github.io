import React from "react";

const Header = () => {
  return(
    <header className="header-top">
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
      <div>
        <a href="/#awards">Awards</a>
      </div>
      <div>
        <a href="https://raw.githubusercontent.com/dmyronuk/dmyronuk.github.io/master/docs/darcy_myronuk_resume.pdf" download>Download</a>
      </div>
    </header>
  )
}

export default Header;