import React from "react";
import { AWARDS_STATIC } from "../../data/awards.static";
import "./Awards.css";

const Awards = () => (
  <div className="flex-row justify-content-center awards-container">
    <div className="content-mid-container">
    <div id="awards" />
      <section>
        <h2>Awards</h2>
        {AWARDS_STATIC.map((group, i) =>
          <div key={"group-" + i} className="flex-row awards-item">
            <a href={group.url}>
              <div className="award-img-container">
                <img alt={group.album} src={group.albumImg} />
              </div>
            </a>
            <div className="award-content-container">
              <header>
                <h3>{group.name}</h3>
                <div>{group.role}</div>
              </header>
              {group.awards.map((award, i) =>
                <a key={"award-" + i} href={award.url}>
                  <div className="award-item faded-blue">
                    <div className="flex-row">
                      <div className="awarder">{award.awarder}</div>
                      <div className="award-date">{award.date}</div>
                    </div>
                    <div>
                      {award.description}
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  </div>
);

export default Awards;