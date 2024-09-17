import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Timeline from "../../Timeline";
import "../../Timeline.css";
import "../../Timeline.css";
import SkillsSection from "./SkillsSection";
import Carousel from "../../Carousel";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Product Manager who loves to talk to customers
            </h1>
            <p className="home-about-body">
            I’m a results-driven product management professional with over 15 years of experience in the <b className="purple">Payments industry</b>. 
              <br />
              <br />
              Currently, I’m a Product Manager at <b className="purple">Mastercard</b>, focusing on enhancing integration experiences for Payment Gateway's API offerings. 
              <br />
              <br />
              I love getting into the nitty-gritty details of design and work with a world-class team to solve real problems. 
              <br />
              My expertise spans Product Development, API integration, business analysis, and project leadership, with a strong emphasis on transforming user experiences.
              <br />
              
              <br />I am keen on converting strategies into digital solutions that will benefit as many users as possible.
              
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Products </b> in areas related to{" "}
                <b className="purple">
                  Generative Artificial Intelligence.
                </b>
              </i>
              <br />
              <br />
              
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

      </Container>
            <Container>
      <SkillsSection/>
     </Container>
       <Container>
         <Timeline></Timeline>
     </Container>
      <Container>
        <h1 className="title" style={{ fontSize: "2.6em" }}>GOOD TIMES!!</h1>
        <Carousel />
        </Container>
    </Container>

    
  );
}
export default Home2;
