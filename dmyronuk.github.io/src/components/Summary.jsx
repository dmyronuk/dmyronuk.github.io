import React, {Component} from "react";
import GithubIcon from "../icons/github.svg";
import MailIcon from "../icons/mail_b.png";
import PhoneIcon from "../icons/phone_a.png";
import LinkArrow from "../icons/link_arrow.png";

import JavascriptIcon from "../icons/Javascript.png";
import CSSIcon from "../icons/CSS.png";
import HTMLIcon from "../icons/HTML.png";
import ExpressIcon from "../icons/Express.png";
import jQueryIcon from "../icons/jQuery.png";
import MochaIcon from "../icons/Mocha.svg";
import NodeIcon from "../icons/Node.png";
import JavaIcon from "../icons/Java.png";
import ReactIcon from "../icons/React.png";
import SassIcon from "../icons/Sass.svg";
import PSQLIcon from "../icons/PSQL.png";
import KnexIcon from "../icons/Knex.png";

class Summary extends Component{
  constructor(props){
    super(props)
    this.state = {
      skills: [
        {name: "Javascript", imgSrc: JavascriptIcon},
        {name: "NodeJS", imgSrc: NodeIcon},
        {name: "ExpressJS", imgSrc: ExpressIcon},
        {name: "ReactJS", imgSrc: ReactIcon},
        {name: "Mocha", imgSrc: MochaIcon},
        {name: "jQuery", imgSrc: jQueryIcon},
        {name: "HTML5", imgSrc: HTMLIcon},
        {name: "CSS3", imgSrc: CSSIcon},
        {name: "Sass", imgSrc: SassIcon},
        {name: "Java", imgSrc: JavaIcon},
        {name: "Postgres", imgSrc: PSQLIcon},
        {name: "Knex", imgSrc: KnexIcon},
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
                <img alt="Email" src={MailIcon} />
                <div>darcy.myronuk@gmail.com</div>
              </a>
              <a href="tel:1-647-745-4894">
                <img alt="Phone" src={PhoneIcon} />
                <div>647-745-4894</div>
              </a>
              <a href="https://github.com/dmyronuk">
                <img alt="Github" src={GithubIcon} />
                <div>dmyronuk</div>
              </a>
            </div>
          </div>
          <section className="summary-body">
            <h2>
              Summary
            </h2>
            <div>
              Junior full stack web developer with a background in music and education.
              Driven by curiosity and the desire to take on new challenges.  Interested in creating
              seamless user experiences and finding new ways of applying technology to creative domains.
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
            <a href="/#projects" >
              <img alt="Awards Link" src={LinkArrow} />
            </a>
          </div>
        </div>

      </div>
    )
  }
}
export default Summary;