import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar className="bg-dark-subtle">
      <Container className="m-0">
        <Navbar.Brand href="#home">VISS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavDropdown
          title="Choose your plan"
          id="basic-nav-dropdown"
          className="border border-dark rounded p-2 mx-5"
        >
          <NavDropdown.Item href="#action/3.1">Restorative</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Orthodontics</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">
            Ortho + Restorative
          </NavDropdown.Item>
        </NavDropdown>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5">
            <Nav.Link href="#">Original Scan &rarr;</Nav.Link>
            <Nav.Link href="#">Orthodontics &rarr;</Nav.Link>
            <Nav.Link href="#">Restorative</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="d-flex justify-content-end">A.A</div>
    </Navbar>
  );
}

export default BasicExample;
