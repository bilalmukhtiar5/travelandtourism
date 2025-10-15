import React from 'react';
import '../components/Navbar.module.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm py-2">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="/" className="fw-bold fs-4 text-primary">
          Royal Adventure
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="mx-2">Home</Nav.Link>
            <NavDropdown title="Dubai" id="dubaiDropdown" className="mx-2">
              <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/dubai-desert-safari">Dubai Desert Safari</NavDropdown.Item>
              <NavDropdown.Item href="#">City Tour</NavDropdown.Item>
              <NavDropdown.Item href="#">Luxury Packages</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact-us" className="mx-2">Contact</Nav.Link>
          </Nav>

          {/* Right side button */}
          <Button variant="primary" className="ms-lg-3 px-4">
            Enquire Now!
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
