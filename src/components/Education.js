import React, { Component } from "react";

class Education extends Component {
    render() {
        if (this.props.resumeEducation && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.education;
            var education = this.props.resumeEducation.map(function (edu, i) {
                return (
                    <div className="col-md-10 mx-auto" key={i}>
                        <div className="education-card">
                            <div className="education-logo-container">
                                {edu.logo ? (
                                    <img src={edu.logo} alt={edu.school} onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/2602/2602414.png" }} />
                                ) : (
                                    <div className="no-logo">
                                        <i className="fas fa-university"></i>
                                    </div>
                                )}
                            </div>
                            <div className="education-details">
                                <div className="degree">{edu.degree}</div>
                                <div className="school">{edu.school}</div>
                                <div className="info">
                                    <strong>University/Board:</strong> {edu.board}
                                </div>
                                {edu.subject && (
                                    <div className="info">
                                        <strong>Subject/Branch:</strong> {edu.subject}
                                    </div>
                                )}
                                <div className="info">
                                    <strong>Duration:</strong> {edu.years}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }

        return (
            <section id="education" className="pb-5" style={{ background: "#f8f9fa" }}>
                <div className="col-md-12 mx-auto">
                    <div className="col-md-12">
                        <h1 className="section-title" style={{ color: "black", paddingBottom: "2%" }}>
                            <span>{sectionName}</span>
                        </h1>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <div className="row">
                        {education}
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;
