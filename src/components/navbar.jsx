import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
  return (
    <>
      <Navbar collapseOnSelect className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Sankar S</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

