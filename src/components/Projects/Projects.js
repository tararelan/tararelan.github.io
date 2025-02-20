import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cv from "../../Assets/Projects/cv.png";
import asl from "../../Assets/Projects/asl.jpg";
import stem from "../../Assets/Projects/stem.jpg";
import rbc from "../../Assets/Projects/rbc.jpg";
import amazon from "../../Assets/Projects/amazon.png";
import finance from "../../Assets/Projects/finance.jpg";
import cancer from "../../Assets/Projects/cancer.jpg";
import rats from "../../Assets/Projects/rats.jpg";
import whatsapp from "../../Assets/Projects/whatsapp.jpg";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Projects </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={cv}
                            isBlog={false}
                            title="Computer Vision Web Scraper for Extracting E-Commerce Product Data"
                            ghLink="https://github.com/tararelan/Computer-Vision-Web-Scraper"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={rbc}
                            isBlog={false}
                            title="Optofluidic Methods and Machine Learning Techniques for the Classification of Erythrocytes Based on Biomechanical Properties"
                            ghLink="https://github.com/tararelan/ELEC4900-Final-Year-Project-2023-24"
                            demoLink="https://www.linkedin.com/in/tararelan/overlay/1713806845967/single-media-viewer?type=DOCUMENT&profileId=ACoAACzFcl4Ba4jV69TwOt3xskZJuwnf7JoR3X0"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={asl}
                            isBlog={false}
                            title="Deep Learning and American Sign Language Interpretation"
                            ghLink="https://github.com/tararelan/COMP4471-Final-Project-2022"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={whatsapp}
                            isBlog={false}
                            title="WhatsApp Chat Analysis and Visualiser"
                            ghLink="https://github.com/tararelan/WhatsApp-Analysis"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={rats}
                            isBlog={false}
                            title="Neural Network to Classify a Rat's Lever-Press State Based on Neural Firing Information"
                            ghLink="https://github.com/tararelan/ELEC3810-Final-Project-2023"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={cancer}
                            isBlog={false}
                            title="Urinary Biomarkers for Pancreatic Cancer Detection"
                            ghLink="https://github.com/tararelan/Kaggle-Pancreatic-Cancer"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={finance}
                            isBlog={false}
                            title="Machine Learning Techniques to Assess whether the Movement of a Country's Currency can Predict the Movement of their Respect Stock Market Index"
                            description=""
                            ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={amazon}
                            isBlog={false}
                            title="Amazon Product Information Web Scraper"
                            description=""
                            ghLink="https://github.com/tararelan/Amazon-Price-Scraper"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={stem}
                            isBlog={false}
                            title="Credit Suisse INSPIRE Women in STEM Web Development Mentorship Program"
                            ghLink="https://github.com/tararelan/CS-Inspire-Women-In-STEM"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
