import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiMysql,
  DiGit,
} from "react-icons/di";
import {
  SiCplusplus
} from "react-icons/si";
import matlab from "../../Assets/matlab.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={matlab} alt="MATLAB Icon" style={{ width: "35%", height: "auto", filter: "invert(1)" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;