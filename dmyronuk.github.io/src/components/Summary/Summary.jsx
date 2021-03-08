import React from "react";
import Skills from "../Skills/Skills";
import githubIcon from "../../icons/github.svg";
import mailIcon from "../../icons/mail_b.png";
import linkArrow from "../../icons/link_arrow.png";
import "./Summary.css";

const Summary = () => {
  const bio = `Intermediate front-end web developer with experience in e-commerce and data-driven enterprise
    application development. Motivated by curiosity and the desire to take on new challenges. Focused on
    creating seamless user experiences and delivering clean, performant code.`;

  return (
    <div id="summary" className="flex-row justify-content-center summary-container">
      <div className="flex-col summary-flex-column">
        <div className="title-container">
          <h1>D'Arcy Myronuk</h1>
          <div className="flex-row justify-content-center align-items-center contact-container">
            <a href="mailto:darcy.myronuk@gmail.com">
              <img alt="Email" src={mailIcon} />
              <div>darcy.myronuk@gmail.com</div>
            </a>
            <a href="https://github.com/dmyronuk">
              <img alt="Github" src={githubIcon} />
              <div>dmyronuk</div>
            </a>
          </div>
        </div>
        <section className="summary-body">
          <h2>Summary</h2>
          <div>{bio}</div>
        </section>
        <section className="flex-row flex-1">
          <Skills/>
        </section>
        <div className="link-arrow-container inverted flex-end">
          <a href="/#employment" >
            <img alt="Awards Link" src={linkArrow} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Summary;