import React, {Component} from "react";

class Employment extends Component{
  constructor(props){
    super(props)
    this.state = {
      jobs: [
        {
          startDate: "Mar 2019",
          endDate: "Current",
          employerName: "Insured Connect",
          employerURL: "https://www.ins-connect.com/",
          role: "Front End Developer",
          duties: [
            `Front end feature lead on hierarchy tool project, built to help insurance companies manage
            their organizational structures and facilitate app onboarding`,
            "Created visualizations of insurance policy data using chart.js/ng2-charts",
            "Implemented CMS platform built on REST services for insurance carrier promotional content",
            "Enhanced websocket-based chat/notifications codebase using NgRx/flux to centralize app state",
            "Tech Stack: Angular 7-9, Typescript, Elasticsearch, MariaDB, MongoDB, Sass",
            "Libraries: RxJS, NgRx, ngx-datatable, ng-bootstrap",
            "Tools: Kibana, AWS, Kubernetes, YouTrack, Bitbucket"
          ]
        },
        {
          startDate: "Sept 2018",
          endDate: "Feb 2019",
          employerName: "Perficient",
          employerURL: "https://www.perficient.com/",
          role: "Intern Consulting",
          duties: [
            "Front end web developer on agile team building enterprise ecommerce website",
            "Contributed to both the project's support stream, maintaining the existing codebase and the development stream, adding enhancements/features",
            "Tech Stack: WebSphere Commerce V8, Java, IBM DB2, Javascript, jQuery, Sass",
            "Tools: Rational Application Developer, Jira, Bitbucket"
          ]
        },
        {
          startDate: "Sept 2013",
          endDate: "June 2018",
          employerName: "Montcrest School",
          employerURL: "https://www.montcrest.on.ca/",
          role: "Piano Instructor",
          duties: [
            "Taught music lessons to students aged 5-13 focusing on pop and jazz",
            "Created lesson plans covering topics including performance, theory and ear training",
            "Coached students at annual recitals",
          ]
        },
        {
          startDate: "Feb 2012",
          endDate: "Aug 2019",
          employerName: "Soular Productions",
          employerURL: "http://www.soular.ca/",
          role: "Keyboardist",
          duties: [
            "Performed on piano, organ and synthesizer with 9-piece R&B band",
            "Transcribed recordings and created arrangements using Sibelius notation software",
            "Clients included the Toronto Blue Jays (Jays Care Foundation Curve Ball), PricewaterhouseCoopers, The Children's Aid Foundation of Canada and the Women's Executive Network",
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