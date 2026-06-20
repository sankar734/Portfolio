import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Contact(){
    return(
        <div id="contact" style={{ backgroundColor: "#06090d", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Container className="py-5">
            <h1 className="display-3 fw-bold text-center m-5" style={{fontSize: '80px',background: "linear-gradient(100deg, #2a11ee 10%, #1fa7e2 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Contact Me</h1>
            <Row className="align-items-center justify-content-center">
                <Col md={5}>
                    <Card style={{ width: '25rem',objectFit: 'cover', height:'450px' }} >
                        <Card.Body>
                            <h2>Get In Touch</h2>
                            <strong>Email:</strong>
                            <p>sankarsri023@gmail.com</p>
                            <strong>Phone:</strong>
                            <p>+91 9360227685</p>
                            <strong>Location:</strong>
                            <p>Dindigul, Tamil Nadu</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '25rem',objectFit: 'cover', height:'450px' }} >
                        <Card.Body>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>   
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label> 
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </Card.Body>
                     </Card>
                </Col>
            </Row>
        </Container>
        </div>


    )
}
export default Contact;