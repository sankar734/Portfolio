import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project() {
  return (
    <div id="project" style={{ backgroundColor: "#06090d", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <Container className="py-5">
        <h1 className="display-3 fw-bold text-center m-5" style={{color:"#2a11ee"}}>My Project</h1>
        <Row className="align-items-center">
            <Col xs={12} md={4} className="text-center mb-4"> 
                <Card style={{ width: '100%', maxWidth: '25rem',objectFit: 'cover' }}>
                    <Card.Img variant="top" src="../assets/Images/Resturant.png" className="p-4 rounded-5"  style={{height: "220px",objectFit: "cover"}}/>
                    <Card.Body>
                        <Card.Title>Restuarant Event Billing System</Card.Title>
                        <Card.Text>
                            This project is a web-based application that allows users to manage restaurant events and billing. 
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className="text-center mb-4 ">
                <Card style={{ width: '100%', maxWidth: '25rem',objectFit: 'cover' }}>
                    <Card.Img variant="top" src="../assets/Images/Conference.png" className="p-4 rounded-5"  style={{height: "220px",objectFit: "cover"}}/>
                    <Card.Body>
                        <Card.Title>College Event Management System</Card.Title>
                        <Card.Text>
                            This project is a web-based application that allows users to manage college events. 
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className="text-center mb-4 ">
                <Card style={{ width: '100%', maxWidth: '25rem',objectFit: 'cover' }} >
                    <Card.Img variant="top" src="../assets/Images/Ecommerce.png" className="p-4 rounded-5"  style={{height: "220px",objectFit: "cover"}}/>
                    <Card.Body>
                        <Card.Title>Zentric AI E-Commerce Platform</Card.Title>
                        <Card.Text>
                            This project is an AI-powered e-commerce platform that provides personalized shopping experiences for users. 
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Project;