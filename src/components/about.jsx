import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import image from './assets/Images/img7.jpeg';

function About(){
    const skills = ["HTML", "CSS", "Bootstrap","JavaScript", "React", "Node.js", "Express", "MongoDB"];
    return(
        <div id="about" style={{ backgroundColor: "#06090d", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Container className="py-5" id="about">
            <h1 className="display-3 fw-bold text-center m-5" style={{color:"#2a11ee"}}>About Me</h1>
            <Row className="align-items-center">
              <Col md={5} className="text-center mb-4">
                  <Image src="{image}" style={{width:"60%", height:"60%"}} roundedCircle />
                  
              </Col>
              <Col md={7}>
                    <h2 className="mb-3" style={{color: "#1fa7e2"}}>Hi, I'm Sankar S</h2>
                    <p className="fs-5">I am a passionate Web Developer who enjoys creating dynamic and responsive websites. I have a strong foundation in front-end technologies and a keen interest in back-end development.</p>
                    <p className="fs-5">I have experience with HTML, CSS, JavaScript, and various frameworks like React and Bootstrap.</p>    
                    <h3 className="fs-5">Skills</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <Badge key={index} bg="primary" className="p-2 fs-6">{skill}</Badge>
                        ))}
                    </div>
              </Col>
            </Row>
        </Container>
        </div>
    )
}
export default About;
