// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// function Contact(){
//     return(
//         <div id="contact" style={{ backgroundColor: "#06090d", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//         <Container className="py-5">
//             <h1 className="display-3 fw-bold text-center m-5" style={{fontSize: '80px',background: "linear-gradient(100deg, #2a11ee 10%, #1fa7e2 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Contact Me</h1>
//             <Row className="align-items-center justify-content-center">
//                 <Col md={5}>
//                     <Card style={{ width: '25rem',objectFit: 'cover', height:'450px' }} >
//                         <Card.Body>
//                             <h2>Get In Touch</h2>
//                             <strong>Email:</strong>
//                             <p>sankarsri023@gmail.com</p>
//                             <strong>Phone:</strong>
//                             <p>+91 9360227685</p>
//                             <strong>Location:</strong>
//                             <p>Dindigul, Tamil Nadu</p>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4}>
//                     <Card style={{ width: '25rem',objectFit: 'cover', height:'450px' }} >
//                         <Card.Body>
//                             <form>
//                                 <div className="mb-3">
//                                     <label htmlFor="name" className="form-label">Name</label>   
//                                     <input type="text" className="form-control" id="name" placeholder="Enter your name" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="email" className="form-label">Email</label> 
//                                     <input type="email" className="form-control" id="email" placeholder="Enter your email" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="message" className="form-label">Message</label>
//                                     <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">Submit</button>
//                             </form>
//                         </Card.Body>
//                      </Card>
//                 </Col>
//             </Row>
//         </Container>
//         </div>


//     )
// }
// export default Contact;


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./contact.css";

function Contact() {
    return ( 
    <section id="contact" className="contact-section"> 
        <Container>

            <h2 className="contact-title">
            Contact <span>Me</span>
            </h2>

                <Row className="justify-content-center g-4">

                    <Col lg={5}>
                        <div className="contact-card">

                        <h3>Get In Touch</h3>

                        <p>
                            I'm currently open to internship opportunities,
                            freelance projects and full-time roles.
                        </p>

                        <div className="contact-info">
                            <div className="info-item">
                            <h5>Email</h5>
                            <span>sankarsri023@gmail.com</span>
                            </div>

                            <div className="info-item">
                            <h5>Phone</h5>
                            <span>+91 9360227685</span>
                            </div>

                            <div className="info-item">
                            <h5>Location</h5>
                            <span>Dindigul, Tamil Nadu</span>
                            </div>
                        </div>

                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="contact-card">

                        <form>

                            <div className="form-group">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="custom-input"
                            />
                            </div>

                            <div className="form-group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="custom-input"
                            />
                            </div>

                            <div className="form-group">
                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="custom-input"
                            ></textarea>
                            </div>

                            <button
                            type="submit"
                            className="send-btn"
                            >
                            Send Message
                            </button>

                        </form>

                        </div>
                    </Col>

                </Row>

            </Container>
        </section>

    );
}

export default Contact;
