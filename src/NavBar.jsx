import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";

function NavBar() {
  return (
    <>
      <Navbar className="Navbar" bg="dark" data-bs-theme="dark">
        <Container className="navContainer">
          <Nav className="me-auto" id="navbar">
            <Nav.Link className="navul" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navul" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="navul" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="navul" href="#projects">
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
