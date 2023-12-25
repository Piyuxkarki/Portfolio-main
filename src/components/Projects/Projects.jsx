import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "./Images/leaf.png";
import tasktracker from "./Images/tasktracker.png";
import startup_page from "./Images/chrome_startup_page.png";
import sentireader from "./Images/sentireader.jpg";
import portfolio from "./Images/portfolio.png";
import chatgptandroid from "./Images/chatgptandroid.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={startup_page}
              isBlog={false}
              title="Chrome Startup Page"
              description="This was made to change how the normal chrome startup page looked into something that can be better looking and effective as well. You can search normally as you could do on the startup page, macros for commonly used websites such as github, youtube and more are present there, redirects if the website is not in a macro"
              ghLink="https://github.com/Piyuxkarki/chrome-startup-page.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Piyuxkarki/PlantAi.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasktracker}
              isBlog={false}
              title="TaskTracker"
              description="The project is a web application called TaskTracker, designed to streamline and enhance various aspects of users' lives. TaskTracker aims to assist users in managing tasks, improving their mental health, boosting productivity, and overall well-being."
              ghLink="https://github.com/Piyuxkarki/tasktracker.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentireader}
              isBlog={false}
              title="Senti-Reader"
              description="Senti Reader is a cutting-edge online journaling platform empowered by a custom-built AI model. Users can register, write personal journals, and gain insight into their emotional well-being through our emotion detection chart. Enhance self-awareness and emotional intelligence while documenting your thoughts and feelings with Senti Reader."
              ghLink="https://github.com/Piyuxkarki/sentireader.git"
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatgptandroid}
              isBlog={false}
              title="ChatGPT Android"
              description="Introducing ChatGPT Android, your personal conversational assistant powered by OpenAI's GPT-3. Engage in natural, dynamic conversations, ask questions, seek information, or simply chat for fun. ChatGPT brings the power of state-of-the-art language models to your fingertips, providing a seamless and interactive experience for users. Enjoy the convenience of intelligent conversations wherever you go!"
              ghLink="https://github.com/Piyuxkarki/chatgptandroid.git"
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Discover my digital portfolio repository. Explore a captivating array of projects, from responsive websites to innovative UI/UX designs. A platform that offers inspiration and insight into a visionary digital artist shaping the virtual landscape."
              ghLink="https://github.com/Piyuxkarki/Portfolio-main.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
