import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  Hello and <span className="yellow"> welcome </span> to my website!
                </h1>
                <p className="home-about-body">
                  My name is <span className="yellow">P Mohit Sai Krishna </span>, and I'm a B.Tech Computer Science student at <span className="yellow">Vellore Institute of Technology, Vellore</span> with a CGPA of <span className="yellow">9.18</span>
                <br />
                <br />
                Currently, I'm involved in a <b className="yellow"> research project </b>focused on developing a deep learning model for leather defect detection
                <br />
                <br />
                  I want to become a
                  <b className="yellow"> Software </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />
                    I have experience with several programming languages, including <b className="yellow"> Python, Java, C++ and R.</b>
                    Additionally, I have expertise in web development technologies such as <b className="yellow"> JavaScript, JQuery, React JS, Node JS, MySQL and MongoDB.</b>
                    
                  <b className="yellow"> </b>
                  <br />
                  <br />
                  As a <b className="yellow">software developer </b>, I'm passionate about solving complex problems and building innovative solutions that improve people's lives. I enjoy collaborating with others and constantly learning new technologies and programming languages to expand my skill set. 
                  <br />
                  <br />
                  With this website, I hope to share my knowledge, experiences, and projects with you, as well as connect with like-minded individuals and organizations.
                  <br />
                  <br/>
                  Thank you for visiting my <b className="yellow">website </b>, and please feel free to reach out if you have any questions or if you're interested in collaborating on a project!
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/19BCE0431"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/MohitSaikrishna"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/mohit-sai-krishna-peddakotla-55137b1b3/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/peddakotla_mohhith95/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
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

export default About
