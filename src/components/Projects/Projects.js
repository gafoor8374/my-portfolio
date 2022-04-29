import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Onbike from "../../Assets/Projects/Onbike.png";
import BackEnd from "../../Assets/Projects/BackEnd.png";
import BobbiBrown from "../../Assets/Projects/BobbiBrown.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "Black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BackEnd}
              title="ONNBIKE Complete Site"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/Ritesh6997/ONN-BIke-Complete-Project"
              link1="https://sharp-brahmagupta-a8b2e3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BobbiBrown}
              title="BobbiBrown"
              description="We did this project within 6 days in our unit-3 construct week. We worked on Frontend part of website with whole userflow. We have also added some cool functionality in our product page where you can filter and sort the products according to your choice and user can add products to his cart."
              link="https://github.com/Tushar504/Fw15-Bobbi-Brown--Project"
              link1="https://grand-sunflower-c54efa.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Onbike}
              isBlog={false}
              title="ONN-BIKES"
              description="Today in this world, A website is a part of initial building block of every business. not having a website for your business is not recommended at all.

Whenever I go to a new city where I don’t know anyone or never been before it gets me little scared than, I really felt like I need my own bike to explore the city and go wherever I need, that’s exactly where our website will help you. it provides you every kind of bike whatever you’re looking for."
              link="https://github.com/Arora-Shivam/ONN-BIKES-CW"
              link1="https://onnbikes.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
