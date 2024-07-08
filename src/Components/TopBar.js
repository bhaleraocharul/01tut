import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar
      className="border border-bottom-light"
      style={{ backgroundColor: "#333", color: "#fff" }}
    >
      <Container className="d-flex align-items-center justify-content-between m-0">
        <div
          className="d-flex align-items-center"
          style={{ backgroundColor: "#333", color: "#fff" }}
        >
          <Navbar.Brand href="#home" style={{ color: "#fff" }}>
            VISS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavDropdown
            title="Choose your plan"
            id="basic-nav-dropdown"
            className="border border-light rounded p-2 mx-5"
          >
            <NavDropdown.Item href="#action/3.1" style={{ color: "#fff" }}>
              Restorative
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2" style={{ color: "#fff" }}>
              Orthodontics
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3" style={{ color: "#fff" }}>
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
        </div>
        <div className="ml-auto">A.A</div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
