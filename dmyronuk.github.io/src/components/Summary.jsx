import React, {Component} from "react";
import githubIcon from "../icons/github.svg";
import mailIcon from "../icons/mail_b.png";
import linkArrow from "../icons/link_arrow.png";

import jsIcon from "../icons/Javascript.png";
import cssIcon from "../icons/CSS.png";
import htmlIcon from "../icons/HTML.png";
import jQueryIcon from "../icons/jQuery.png";
import reactIcon from "../icons/React.png";
import nodeIcon from "../icons/Node.png";
import javaIcon from "../icons/Java.png";
import angularIcon from "../icons/angular.png";
import ngrxIcon from '../icons/ngrx.svg';
import sassIcon from "../icons/Sass.svg";
import mariaIcon from "../icons/maria.png";
import mongoIcon from "../icons/mongo.png";

class Summary extends Component{
  constructor(props){
    super(props)
    this.state = {
      bio: `Intermediate front-end web developer with experience in e-commerce and data-driven enterprise
        application development. Motivated by curiosity and the desire to take on new challenges. Focused on
        creating seamless user experiences and delivering clean, performant code.`,
      skills: [
        {name: "Javascript", imgSrc: jsIcon},
        {name: "NodeJS", imgSrc: nodeIcon},
        {name: "Angular", imgSrc: angularIcon},
        {name: "NgRx", imgSrc: ngrxIcon},
        {name: "React", imgSrc: reactIcon},
        {name: "jQuery", imgSrc: jQueryIcon},
        {name: "HTML5", imgSrc: htmlIcon},
        {name: "CSS3", imgSrc: cssIcon},
        {name: "Sass", imgSrc: sassIcon},
        {name: "Java", imgSrc: javaIcon},
        {name: "MariaDB", imgSrc: mariaIcon},
        {name: "MongoDB", imgSrc: mongoIcon},
      ]
    }
  }

  render(){
    return(
      <div id="summary" className="summary-container">
        <div className="content-mid-container summary-flex-column">
          <div className="title-container">
            <h1>D'Arcy Myronuk</h1>
            <div className="contact-container">
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
            <h2>
              Summary
            </h2>
            <div>
              {this.state.bio}
            </div>
          </section>

          <section className="summary-skills">
            <h2>
              Skills
            </h2>
            <div className="skills-container">
              {this.state.skills.map((skill, i) =>
                <div key={i}>
                  <img alt={skill.name} src={skill.imgSrc} />
                  {skill.name}
                </div>
              )}
            </div>
          </section>

          <div className="link-arrow-container inverted flex-end">
            <a href="/#employment" >
              <img alt="Awards Link" src={linkArrow} />
            </a>
          </div>
        </div>

      </div>
    )
  }
}
export default Summary;