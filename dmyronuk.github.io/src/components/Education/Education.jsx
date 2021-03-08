import React from "react";
import { EDUCATION_STATIC } from "../../data/education.static";
import LinkArrow from "../../icons/grey_link_arrow.png";
import "./Education.css";

const Education = () => (
  <div className="flex-row justify-content-center education-container">
    <div className="content-mid-container">
      <div id="education" />
      <section>
        <h2>Education</h2>
        {EDUCATION_STATIC.map((school, i) =>
          <div key={i} className="employment-education-item">
            <header>
              <div>
                <a href={school.url}>
                  <h3>{school.name}</h3>
                </a>
                <div className="employment-education-role">
                  {school.program}
                </div>
              </div>
              <div className="employment-education-date">
                {school.endDate ? school.startDate + "-" + school.endDate : school.startDate}
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
        <a href="/#projects">
          <img alt="Awards Link" src={LinkArrow} />
        </a>
      </div>
    </div>
  </div>
);

export default Education;