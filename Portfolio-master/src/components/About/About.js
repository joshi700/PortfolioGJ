import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={4}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >

            <Aboutcard />
          </Col>
          <Col
            md={8}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              The space I operate in
            </h1>
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        
      </Container>
    </Container>
  );
}

export default About;
