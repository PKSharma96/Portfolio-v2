import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = {
      checked: false,
      activeSection: 'home',
      menuOpen: false
    };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  handleScroll = () => {
    const sections = ['home', 'about', 'portfolio', 'skills', 'education', 'resume'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.setState({ activeSection: section });
          break;
        }
      }
    }
  };

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    const { activeSection, menuOpen } = this.state;

    return (
      <header id="home">
        <nav id="nav-wrap" className={menuOpen ? "nav-open" : ""}>
          <div className="mobile-btn" onClick={this.toggleMenu}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul id="nav" className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li className="mx-3">
              <a className={`nav-link-item ${activeSection === 'home' ? 'active' : ''}`} href="#home" onClick={this.closeMenu}>Home</a>
            </li>
            <li className="mx-3">
              <a className={`nav-link-item ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={this.closeMenu}>About</a>
            </li>
            <li className="mx-3">
              <a className={`nav-link-item ${activeSection === 'portfolio' ? 'active' : ''}`} href="#portfolio" onClick={this.closeMenu}>Projects</a>
            </li>
            <li className="mx-3">
              <a className={`nav-link-item ${activeSection === 'skills' ? 'active' : ''}`} href="#skills" onClick={this.closeMenu}>Skills</a>
            </li>
            <li className="mx-3">
              <a className={`nav-link-item ${activeSection === 'education' ? 'active' : ''}`} href="#education" onClick={this.closeMenu}>Education</a>
            </li>
            <li className="mx-3">
              <a className={`nav-link-item ${activeSection === 'resume' ? 'active' : ''}`} href="#resume" onClick={this.closeMenu}>Experience</a>
            </li>
            {this.props.resumeData && this.props.resumeData.resume && (
              <li className="mx-3">
                <a className="nav-link-item resume-btn" href={this.props.resumeData.resume} target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
            )}
          </ul>
        </nav>
        <div className="row aligner" style={{ height: '100vh' }}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header >
    );
  }
}

export default Header;
