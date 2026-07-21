import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarComponents() {
  return (
    <Navbar expand="lg" className="school-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="school-brand">
          Student Register
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto school-nav-links">
            <Nav.Link as={NavLink} to="/" end>
              Students
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add">
              Add Student
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponents;
