import React, {Component} from "react";
import MontcrestLogo from "../icons/montcrest_logo.png";
import SoularLogo from "../icons/soular_logo.png";
import PerficientLogo from "../icons/perficient.png";

class Employment extends Component{
  constructor(props){
    super(props)
    this.state = {
      jobs: [
        {
          startDate: "Sept 2018",
          endDate: "Current",
          employerName: "Perficient",
          employerLogo: PerficientLogo,
          employerURL: "https://www.perficient.com/",
          role: "Intern Consulting",
          duties: [
            "Worked as front-end web developer on agile team building enterprise ecommerce website",
            "Contributed to both the project's support stream, maintaining the existing codebase and the development stream, adding enhancements/features",
            "Tech Stack: WebSphere Commerce V8, Java, IBM DB2, Javascript, jQuery, Sass",
            "Tools: Rational Application Developer, Jira, Bitbucket"
          ]
        },
        {
          startDate: "Feb 2012",
          endDate: "Current",
          employerName: "Soular Productions",
          employerLogo: SoularLogo,
          employerURL: "http://www.soular.ca/",
          role: "Keyboardist",
          duties: [
            "Performed on piano, organ and synthesizer with 9-piece R&B band",
            "Transcribed recordings and created arrangements using Sibelius notation software",
            "Clients included the Toronto Blue Jays (Jays Care Foundation Curve Ball), PricewaterhouseCoopers, The Children's Aid Foundation of Canada and theWomen's Executive Network",
          ]
        },
        {
          startDate: "Sept 2013",
          endDate: "June 2018",
          employerName: "Montcrest School",
          employerLogo: MontcrestLogo,
          employerURL: "https://www.montcrest.on.ca/",
          role: "Piano Instructor",
          duties: [
            "Taught music lessons to students aged 5-13 focusing on pop and jazz styles",
            "Developed curriculum covering topics including performance, theory and ear training",
            "Coached students at annual recitals",
          ]
        }
      ]
    }
  }

  render(){
    return(
      <div className="employment-container">
        <div className="content-mid-container">
          <div id="employment" />
          <section>
            <h2>
              Employment
            </h2>
            {this.state.jobs.map((job, i) =>
              <div key={i} className="employment-education-item">
                <header>
                  <div>
                    <a href={job.employerURL}>
                      <h3>{job.employerName}</h3>
                    </a>
                    <div className="employment-education-role">{job.role}</div>
                  </div>
                  <div className="employment-education-date">{job.startDate} - {job.endDate}</div>
                </header>
                <div className="bullets-container">
                  <ul>
                    {job.duties.map((duty, i) =>
                      <li key={i}>{duty}</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    )
  }
}

export default Employment;