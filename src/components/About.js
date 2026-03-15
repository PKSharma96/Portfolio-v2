import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import nodeIcon from "@iconify/icons-logos/nodejs";
import laravelIcon from "@iconify/icons-logos/laravel";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = process.env.PUBLIC_URL + "/images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="container">
          <h1 className="section-title" style={{ color: "black", marginBottom: "50px" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row about-row">
            <div className="col-md-4 center-mobile about-col">
              <div className="polaroid">
                <img
                  src={profilepic}
                  alt="Pushpendra Kumar (PK)"
                  className="profile-img"
                />
                <div className="tech-icons">
                  <Icon icon={nodeIcon} className="about-tech-icon" />
                  <Icon icon={reactIcon} className="about-tech-icon" />
                  <Icon icon={laravelIcon} className="about-tech-icon" />
                </div>
              </div>
            </div>

            <div className="col-md-8 about-col">
              <div className="about-card">
                <div className="about-card-header">
                  <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span> &nbsp;
                  <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span> &nbsp;
                  <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                </div>
                <div className="about-card-body font-trebuchet">
                  <h2 className="hello-text">{hello} :)</h2>
                  <p className="about-description">{about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
