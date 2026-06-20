import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ResturantImage from "../assets/Images/Resturant.jpeg";
import ConferenceImage from "../assets/Images/Conference.jpeg";
import EcommerceImage from "../assets/Images/E-Commerce.jpeg";

function Project() {
  return (
    <div id="project" style={{ backgroundColor: "#06090d", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <Container className="py-5" id="project">
        <h1 className="display-3 fw-bold text-center m-5" style={{color:"#2a11ee"}}>My Project</h1>
        <Row className="align-items-center">
            <Col xs={12} md={4} className="text-center mb-4"> 
                {/* <img src="./src/assets/Images/img3.p
                ng" style={{width:"350px", height:"200px"}} rounded />
                <h6 className="fw-bold">Restuarant Event Billing System</h6>
                <p className="fs-5">This project is a web-based application that allows users to manage restaurant events and billing. It provides features such as event creation, menu management, and bill generation.</p> */}
                <Card style={{ width: '25rem',objectFit: 'cover' }}>
                    <Card.Img variant="top" src={ResturantImage} className="p-4 rounded-5" />
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
                {/* <img src="./src/assets/Images/img4.png" style={{width:"350px", height:"200px"}} rounded />
                <h6 className="fw-bold">College Event Management System</h6>
                <p className="fs-5">This project is a web-based application that allows users to manage college events. It provides features such as event creation, registration management, and event scheduling.</p> */}
                <Card style={{ width: '25rem',objectFit: 'cover' }}>
                    <Card.Img variant="top" src={ConferenceImage} className="p-4 rounded-5" />
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
                {/* <img src="./src/assets/Images/img4.png" style={{width:"350px", height:"200px"}} rounded />
                <h6 className="fw-bold">College Event Management System</h6>
                <p className="fs-5">This project is a web-based application that allows users to manage college events. It provides features such as event creation, registration management, and event scheduling.</p> */}
                <Card style={{ width: '25rem',objectFit: 'cover' }} >
                    <Card.Img variant="top" src={EcommerceImage} className="p-4 rounded-5" />
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