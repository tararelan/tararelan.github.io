import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my-avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey into programming began in middle school, where I discovered a passion for coding. This passion led me to teach girls how to code and explore a degree in Electronic Engineering, with a minor in Big Data Technology. My academic pursuits have allowed me to delve into exciting fields such as signal processing and machine learning.
              <br />
              <br />
              I am proficient in several programming languages, including
              <i>
                <b className="purple"> Python, C++, and MATLAB. </b>
              </i>
              <br />
              <br />
              My interests lie in
              <i>
                <b className="purple"> Recommender Systems, Computer Vision, and Web Development </b>
              </i>
              , particularly in the contexts of e-commerce, medical imaging, and STEM education.
              <br />
              <br />
              I am continuously seeking to expand my knowledge, particularly in
              <i>
                <b className="purple"> Amazon Web Services </b>
              </i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tararelan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tararelan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:tara@asgard.world"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;