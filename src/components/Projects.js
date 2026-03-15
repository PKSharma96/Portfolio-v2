import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (project) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4 mb-4"
            key={project.title}
          >
            <div className="project-card" onClick={() => detailsModalShow(project)}>
              <div className="project-image-container">
                <img
                  src={process.env.PUBLIC_URL + "/" + project.images[0]}
                  alt={project.title}
                />
              </div>
              <div className="project-content">
                <p className="project-title-settings">
                  {project.title}
                </p>
                <div className="project-description-bullets">
                  <ul>
                    {Array.isArray(project.description) ?
                      project.description.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      )) :
                      <li>{project.description}</li>
                    }
                  </ul>
                </div>
                <div className="project-footer">
                  <div className="project-icons-container">
                    {project.technologies && project.technologies.slice(0, 4).map((tech, i) => (
                      <i key={i} className={tech.class} title={tech.name}></i>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
