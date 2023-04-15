import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/homemain.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              A SMALL <span className="purple"> INTRODUCTION </span> ABOUT ME
            </h1>
            <p className="home-about-body">
            I am a graduate student at <b className="purple">University of California, Davis</b>. I am working on Machine Learning implementations for the past three years, during which I developed a strong foundation in the various <b className="purple"><i>Machine Learning Algorithms and techniques</i></b> and their implementation in real-world applications. This helped me to create efficient prediction models using <b className="purple"><i>Python</i></b> and also gave me a good exposure to Relational Databases (<b className="purple"><i>MySQL</i></b> and <b className="purple"><i>PostgreSQL</i></b>), <b className="purple"><i>AWS</i></b> and the data visualization software, <b className="purple"><i>Tableau</i></b>.
            I am fluent in languages like
              <i>
                <b className="purple"> Javascript, Python and SQL. </b>
              </i> 
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br/>
<br/>My work experience gave me the opportunity to bolster my knowledge in <b className="purple"><i>Artificial Intelligence</i></b> and <b className="purple"><i>data mining</i></b> techniques. I have worked on projects involving prediction of click-through rates based on a user's profile and past behavior, and on developing recommendation systems, leading to an increase in the overall revenue for the businesses.
              <br />
              {/* <br />I am fluent in languages like
              <i>
                <b className="purple"> Javascript, Python and SQL. </b>
              </i>
              
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning</b> and <b className="purple">Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Anuraag287"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Anuraag287"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anuraagvelamati287/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anuraag287/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
