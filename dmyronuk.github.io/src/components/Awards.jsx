import React, {Component} from "react";
import BreakthroughImg from "../images/breakthrough.png";
import BridgesImg from "../images/bridges.jpg";

class Awards extends Component{
  constructor(props){
    super(props)
    this.state = {
      groups: [
        {
          name: "Eli Bennet Quartet",
          album: "Breakthrough",
          role: "Keyboardist/Composer",
          url: "http://elibennett.com/album/breakthrough/",
          albumImg: BreakthroughImg,
          awards: [
            {
              date: "Jan 2016",
              awarder: "JAZZ.FM91",
              description: "Ranked #4 on JazzFM's list of top Canadian releases of 2015",
              url: "http://www.jazzfm91.com/index.php/news-a-events-mainmenu/13230-top-canadian-releases-for-2015",
            },
            {
              date: "Sept 2015",
              awarder: "Western Canadian Music Awards",
              description: "Nominated Jazz Album Of The Year",
              url: "http://exclaim.ca/music/article/2015_western_canadian_music_award_winners_revealed",
            },
            {
              date: "July 2015",
              awarder: "Montreal Jazz Festival",
              description: "Nominated Grand Prix De Jazz",
            },

          ]
        },
        {
          name: "Alex Goodman Quintet",
          album: "Bridges",
          role: "Keyboardist",
          url: "http://www.alexgoodmanmusic.com/",
          albumImg: BridgesImg,
          awards: [
            {
              date: "Apr 2013",
              awarder: "Juno Awards",
              description: "Nominated Contemporary Jazz Album Of The Year",
              url: "https://junoawards.ca/nomination-category/contemporary-jazz-album-of-the-year/",
            },
            {
              date: "July 2011",
              awarder: "Montreal Jazz Festival",
              description: "Nominated Grand Prix De Jazz"
            },

          ]
        },
      ]
    }
  }

  render(){
    return(
      <div className="awards-container">
        <div className="content-mid-container">
        <div id="awards" />
          <section>
            <h2>
              Awards
            </h2>
            {this.state.groups.map((group, i) =>
              <div key={"group-" + i} className="awards-item">
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
                        <div className="award-topline">
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
    )
  }
}

export default Awards;