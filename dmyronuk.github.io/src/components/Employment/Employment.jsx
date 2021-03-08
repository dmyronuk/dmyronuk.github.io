import React from "react";
import { JOBS_STATIC } from "../../data/jobs.static";
import "./Employment.css";

const Employment = () => (
  <div className="employment-container">
    <div className="content-mid-container">
      <div id="employment" />
      <section>
        <h2>Employment</h2>
        {JOBS_STATIC.map((job, i) =>
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
);

export default Employment;