import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { SiSony } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import { MdModeOfTravel } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Piyush Karki </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am a Final Year Student pursuing Bachelors of Computer
            Application (BCA) at CHRIST (Deemed to be University).
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Professional Video Editing <SiSony />
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books <FaBook />
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling <MdModeOfTravel />
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"HUSTLE" </p>
          <footer className="blockquote-footer">Piyush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
