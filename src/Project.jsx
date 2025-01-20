import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function Project() {
  return (
    <>
      <h2 align="center">Projects</h2>
      <hr />

      <div className="projects">
        <Card className="project">
          <Card.Img
            className="pimg"
            variant="top"
            src="images/pestisideweb.png"
          />
          <Card.Body>
            <Card.Title>
              <strong className="ptitle">Pesticides and Fertilizer</strong>
            </Card.Title>
            <Card.Text>
              The Pesticide And Fertilizer website Purpose: The website
              showcases different types of Pesticides and Fertilizers, provides
              product details, and educates users about their usage, benefits,
              and safety. it is user friendly. built using HTML, CSS,
              JavaScript.
            </Card.Text>
            <Button variant="primary">
              <a
                className="anchor"
                target="_blank"
                href="https://github.com/krushna7222/Pesticides-Web.git"
              >
                Explore Now...
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="project">
          <Card.Img className="pimg" variant="top" src="images/portfolio.png" />
          <Card.Body>
            <Card.Title>
              <strong className="ptitle">Portfolio Website</strong>
            </Card.Title>
            <Card.Text>
              A personal portfolio website showcase of my skills, projects. It
              typically includes an introduction, a list of skills, examples of
              your work, a downloadable resume, and contact information. using
              HTML, CSS, JavaScript. and this is fully responsive for all
              devices.
            </Card.Text>
            <Button variant="primary">
              <a
                className="anchor"
                target="_blank"
                href="https://krushnasportfolio.netlify.app/"
              >
                Explore Now...
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="project">
          <Card.Img className="pimg" variant="top" src="images/tms.png" />
          <Card.Body>
            <Card.Title>
              <strong className="ptitle">Transport Managment System</strong>
            </Card.Title>
            <Card.Text>
              In A Transport Management System (TMS) website, built using HTML,
              CSS, JavaScript, and PHP, allows users to efficiently manage and
              monitor transportation operations. Key features typically include:
              Dashboard, Vehicle and Driver Management, Booking & Scheduling.
            </Card.Text>
            <Button variant="primary">
              <a className="anchor" target="_blank" href="">
                Explore Now...
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="project">
          <Card.Img className="pimg" variant="top" src="images/ajioclone.png" />
          <Card.Body>
            <Card.Title>
              <strong className="ptitle">Ajio Clone</strong>
            </Card.Title>
            <Card.Text>
              In this Ajio Clone website, trying to create similar home page of
              Ajio shopping website with icon and similar colors and font style
              also box shaddow and section, Proper work on Navigation bar,
              Product detail, Footer and Responsive design. built using HTML,
              CSS.
            </Card.Text>
            <Button variant="primary">
              <a className="anchor" target="_blank" href="">
                Explore Now...
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Project;
