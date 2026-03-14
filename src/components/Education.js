import React, { Component } from "react";

class Education extends Component {
    render() {
        if (this.props.resumeEducation && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.education;
            var education = this.props.resumeEducation.map(function (edu, i) {
                return (
                    <div className="col-md-12 mx-auto" key={i}>
                        <div className="card mb-3" style={{ textAlign: "left", borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                            <div className="card-body">
                                <h3 className="card-title" style={{ fontSize: "1.5rem", fontWeight: "700", color: "#333" }}>{edu.degree}</h3>
                                <h4 className="card-subtitle mb-2 text-muted" style={{ fontSize: "1.1rem" }}>{edu.school}</h4>
                                <div style={{ fontSize: "0.95rem", color: "#666" }}>
                                    <p className="mb-1"><strong>Board/University:</strong> {edu.board}</p>
                                    {edu.subject && <p className="mb-1"><strong>Subject/Branch:</strong> {edu.subject}</p>}
                                    <p className="mb-0"><strong>Year:</strong> {edu.years}</p>
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
