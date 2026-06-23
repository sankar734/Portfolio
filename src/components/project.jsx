// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import ResturantImage from "../assets/Images/Resturant.png";
// import ConferenceImage from "../assets/Images/Conference.png";
// import EcommerceImage from "../assets/Images/E-commerce.png";

// function Project() {
//   return (
//     <div id="project" style={{ backgroundColor: "#06090d", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//     <Container className="py-5">
//         <h1 className="display-3 fw-bold text-center m-5" style={{fontSize: '80px',background: "linear-gradient(100deg, #2a11ee 10%, #1fa7e2 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>My Project</h1>
//         <Row className="align-items-center ">
//             <Col xs={12} md={4} className="text-center mb-4"> 
//                 <Card style={{ width: '100%', maxWidth: '25rem',objectFit: 'cover' }}>
//                     <Card.Img variant="top" src={ResturantImage} className="p-4 rounded-5"  style={{height: "220px",objectFit: "cover"}}/>
//                     <Card.Body>
//                         <Card.Title>Restuarant Event Billing System</Card.Title>
//                         <Card.Text>
//                             This project is a web-based application that allows users to manage restaurant events and billing. 
//                         </Card.Text>
//                         <Button variant="primary">View Details</Button>
//                     </Card.Body>
//                 </Card>
//             </Col>
//             <Col xs={12} md={4} className="text-center mb-4 ">
//                 <Card style={{ width: '100%', maxWidth: '25rem',objectFit: 'cover' }}>
//                     <Card.Img variant="top" src={ConferenceImage} className="p-4 rounded-5"  style={{height: "220px",objectFit: "cover"}}/>
//                     <Card.Body>
//                         <Card.Title>College Event Management System</Card.Title>
//                         <Card.Text>
//                             This project is a web-based application that allows users to manage college events. 
//                         </Card.Text>
//                         <Button variant="primary">View Details</Button>
//                     </Card.Body>
//                 </Card>
//             </Col>
//             <Col xs={12} md={4} className="text-center mb-4 ">
//                 <Card style={{ width: '100%', maxWidth: '25rem',objectFit: 'cover' }} >
//                     <Card.Img variant="top" src={EcommerceImage} className="p-4 rounded-5"  style={{height: "220px",objectFit: "cover"}}/>
//                     <Card.Body>
//                         <Card.Title>Zentric AI E-Commerce Platform</Card.Title>
//                         <Card.Text>
//                             This project is an AI-powered e-commerce platform that provides personalized shopping experiences for users. 
//                         </Card.Text>
//                         <Button variant="primary">View Details</Button>
//                     </Card.Body>
//                 </Card>
//             </Col>
//         </Row>
//     </Container>
//     </div>
//   );
// }

// export default Project;



import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./project.css";
import Button from "react-bootstrap/Button";

import ResturantImage from "../assets/Images/Resturant.png";
import ConferenceImage from "../assets/Images/Conference.png";
import EcommerceImage from "../assets/Images/E-commerce.png";

import "./project.css";

function Project() {
    const projects = [
        {
            title: "Restaurant Event Billing System",
            image: ResturantImage,
            description:
            "A web-based billing and event management platform for restaurants with invoice generation and event tracking.",
            // tech: ["React", "Bootstrap", "Node.js"],
            // github: "#",
            demo: "#",
        },
        {
            title: "College Event Management System",
            image: ConferenceImage,
            description:
            "A complete event management solution for colleges with registration, scheduling and participant management.",
            // tech: ["React", "Express", "MongoDB"],
            // github: "#",
            demo: "#",
        },
        {
            title: "Zentric AI E-Commerce",
            image: EcommerceImage,
            description:
            "AI-powered e-commerce platform providing smart recommendations and personalized shopping experiences.",
            // tech: ["React", "Node.js", "MongoDB"],
            // github: "#",
            demo: "#",
        },
    ];

    return ( 
        <section id="project" className="project-section"> 
            <Container> <h2 className="project-title">
                    My <span>Projects</span> </h2>
                <Row>
                {projects.map((project, index) => (
                    <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                    <div className="project-card">

                        <div className="project-image-wrapper">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image p-4 rounded-5"
                        />
                        </div>

                        <div className="project-content">

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        {/* <div className="tech-stack">
                            {project.tech.map((tech, i) => (
                            <span key={i} className="tech-badge">
                                {tech}
                            </span>
                            ))}
                        </div> */}

                        <div className="project-buttons">
                            {/* <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="github-btn"
                            >
                            GitHub
                            </a> */}

                            <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="demo-btn align-self-center"
                            >
                            Live Demo
                            </a>
                        </div>

                        </div>
                    </div>
                    </Col>
                ))}
                </Row>
            </Container>
        </section>

    );
}

export default Project;
