import React, {Component} from "react";
import LinkArrow from "../icons/grey_link_arrow.png";
import LighthouseLogo from "../icons/lighthouse_logo.png";
import UtorontoLogo from "../icons/utoronto_logo.png";
import OracleLogo from "../icons/oracle.png";



class Education extends Component{
  constructor(props){
    super(props)
    this.state = {
      schools: [
        {
          name: "Oracle Certified Associate",
          url: "https://education.oracle.com/oracle-certified-professional-java-se-7-programmer/trackp_155",
          program: "Java SE 7 Programmer Certification OCA JP7",
          startDate: "Nov 2018",
          endDate: null,
          awards: null,
          logo: OracleLogo,
        },
        {
          name: "Lighthouse Labs",
          url: "https://www.lighthouselabs.ca/",
          program: "Web Development Bootcamp",
          startDate: "June 2018",
          endDate: "Aug 2018",
          awards: null,
          logo: LighthouseLogo,
        },
        {
          name: "University Of Toronto",
          url: "https://music.utoronto.ca/",
          program: "Bachelor Of Music",
          startDate: "Sept 2003",
          endDate: "May 2007",
          awards: [
            "Duke Ellington Scholarship",
            "Monica Ryckman Scholarship",
            "Graduate Award",
          ],
          logo: UtorontoLogo,
        },
      ]
    }
  }

  render(){
    return(
      <div className="education-container">
        <div className="content-mid-container">
          <div id="education" />
          <section>
            <h2>
              Education
            </h2>
            {this.state.schools.map((school, i) =>
              <div key={i} className="employment-education-item">
                <header>
                  <div>
                    <a href={school.url}>
                      <h3>{school.name}</h3>
                    </a>
                    <div className="employment-education-role">{school.program}</div>
                  </div>
                  <div className="employment-education-date">
                    {school.endDate ?
                      school.startDate + "-" + school.endDate : school.startDate
                    }
                  </div>
                </header>
                <div className="education-item-right">
                  <ul>

                    {school.awards && school.awards.map((award, i) =>
                      <li key={i}>{award}</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </section>

          <div className="link-arrow-container">
            <a href="/#projects" >
              <img alt="Awards Link" src={LinkArrow} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Education;