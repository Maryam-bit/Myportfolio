import React from "react";
import logo from "../../img/logo6.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
export default function Navbar() {
  // scrollToTop = () => {
    // scroll.scrollToTop();
  // };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
        <img src={logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
            <Link className="anchor" activeClass="active" to="home" delay={100} spy={true} smooth={true} offset={0} duration={500}> Home </Link>
            </li>
            <li className="nav-item">
            <Link className="anchor" activeClass="active" to="about" delay={100} spy={true} smooth={true} offset={0} duration={500} > About </Link>
            </li>
            <li className="nav-item">
            <Link className="anchor" activeClass="active" to="services" delay={100} spy={true} smooth={true} offset={0} duration={500} > Services</Link>
            </li>
            <li className="nav-item">
            <Link className="anchor" activeClass="active" to="skills" delay={100} spy={true} smooth={true} offset={0} duration={500}> Skills</Link>
            </li>
            <li className="nav-item">
            <Link className="anchor" activeClass="active" to="portfolio" delay={100} spy={true} smooth={true} offset={0} duration={500}  > Portfolio </Link>
            </li>
            <li className="nav-item">
            <Link className="anchor" activeClass="active" to="achievements" delay={100} spy={true} smooth={true} offset={0} duration={500}  > Achievements</Link>
            </li>
            <li className="nav-item">
            <Link className="anchor" activeClass="active" to="contact"  delay={100} spy={true} smooth={true}  offset={0} duration={500} >  Contact</Link>
            </li>
          

          </ul>
        </div>
      </nav>
    </>
  );
}
