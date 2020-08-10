import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <h6>{item.jobTitle}</h6>

                      <p className="info">
                        <em className="date">
                          {item.MonthOfStarting} {item.YearOfStarting} -{" "}
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                        <br />
                        <span>&bull;</span> {item.specialization}
                        <br />
                        <span>&bull;</span> {item.specialization2}
                        <br />
                        <span>&bull;</span> {item.specialization3}
                        <br />
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div style={{ marginLeft: "1.2vw" }}>
            <div style={{ marginTop: 60 }}>
              <h5>Core</h5>
              <img
                alt="git"
                src="https://img.icons8.com/color/96/000000/git.png"
              />
              <img
                alt="github"
                src="https://img.icons8.com/fluent/96/000000/github.png"
              />
              <img
                alt="html5"
                src="https://img.icons8.com/color/96/000000/html-5.png"
              />
              <img
                alt="css3"
                src="https://img.icons8.com/color/96/000000/css3.png"
              />
              <img
                alt="javascript"
                src="https://img.icons8.com/color/96/000000/javascript.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Git, Github, Html, Css & JavaScript
              </p>
            </div>

            <div>
              <h5>Primary focuses</h5>
              <img
                alt="react"
                src="https://img.icons8.com/plasticine/100/000000/react.png"
              />
              <img
                alt="react native"
                src="https://img.icons8.com/cute-clipart/100/000000/react-native.png"
              />
              <img
                alt="electron"
                style={{ height: 80, margin: 10 }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"
              />
              <img
                alt="redux"
                src="https://img.icons8.com/color/96/000000/redux.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                React, React Native, Electron & redux
              </p>
            </div>

            <div style={{ marginTop: 10 }}>
              <h5>backend & database tech</h5>

              <img
                alt="node.js"
                src="https://img.icons8.com/color/96/000000/nodejs.png"
              />
              {/* <img
                alt="mongoDB"
                src="https://img.icons8.com/color/96/000000/mongodb.png"
              /> */}
              <img
                alt="firebase"
                src="https://img.icons8.com/color/96/000000/firebase.png"
              />
              {/* <img
                alt="express"
                style={{ height: 80, margin: 5 }}
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              /> */}
              <p style={{ font: "inherit", fontSize: 12 }}>
                NodeJs Google Firebase
              </p>
            </div>
            <div>
              <h5>Familiar workflow tech</h5>
              <img
                alt="jira"
                src="https://img.icons8.com/color/96/000000/jira.png"
              />
              <img
                alt="trello"
                src="https://img.icons8.com/color/96/000000/trello.png"
              />
              <img
                alt="source tree"
                src="https://img.icons8.com/windows/96/000000/sourcetree.png"
              />
              <img
                alt="slack"
                src="https://img.icons8.com/officel/80/000000/slack.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Jira, Trello, Sourcetree, Slack
              </p>
            </div>
            <div>
              <h5>Familiar design & prototyping software </h5>
              <img
                alt="adobe xd"
                src="https://img.icons8.com/color/96/000000/adobe-xd.png"
              />
              <img
                alt="adobe illustrator"
                src="https://img.icons8.com/color/96/000000/adobe-illustrator.png"
              />
              <img
                alt="invision"
                src="https://img.icons8.com/windows/96/000000/invision.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Adobe Xd, Illustrator, Invision
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
