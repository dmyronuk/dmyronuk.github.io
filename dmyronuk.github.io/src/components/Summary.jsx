import React, {Component} from "react";
import Skills from "./Skills";
import githubIcon from "../icons/github.svg";
import mailIcon from "../icons/mail_b.png";
import linkArrow from "../icons/link_arrow.png";

class Summary extends Component{
  constructor(props){
    super(props)
    this.state = {
      bio: `Intermediate front-end web developer with experience in e-commerce and data-driven enterprise
        application development. Motivated by curiosity and the desire to take on new challenges. Focused on
        creating seamless user experiences and delivering clean, performant code.`
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
    )
  }
}
export default Summary;