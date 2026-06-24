// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar collapseOnSelect className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">Sankar S</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
//             <Nav.Link href="#project">Project</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//           </Navbar.Collapse>  
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;



import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

function CustomNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className="logo">
          Sankar <span>S</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggle"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;