import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{ color: "black", fontSize: 20 }}>
              Check Out Some of My Projects.
            </h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div
                        className="item-wrap"
                        style={{
                          alignItems: "center",
                          backgroundColor: "#a8a8a8",
                          boxShadow:
                            "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
                          borderRadius: "50px",
                          display: "flex",
                          padding: 5,
                          justifyContent: "center",
                          marginRight: "4rem",
                          height: "200px",
                          width: "200px",
                        }}
                      >
                        <a
                          href={item.repourl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt="portfolio item"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
