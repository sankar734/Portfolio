// import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Badge from 'react-bootstrap/Badge';
// import ProfileImage from "../assets/Images/Profile.jpeg";

// function About(){
//     const skills = ["HTML", "CSS", "Bootstrap","JavaScript", "React", "Node.js", "Express", "MongoDB"];
//     return(
//         <div id="about" style={{ backgroundColor: "#06090d", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//         <Container className="py-5" >
//             <h1 className="display-3 fw-bold text-center m-5" style={{fontSize: '80px',background: "linear-gradient(100deg, #2a11ee 10%, #1fa7e2 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>About Me</h1>
//             <Row className="align-items-center">
//               <Col md={5} className="text-center mb-4">
//                   <Image src={ProfileImage} style={{width:"60%", height:"60%"}} roundedCircle />
                  
//               </Col>
//               <Col md={7}>
//                     <h2 className="mb-3" style={{color: "#1fa7e2"}}>Hi, I'm Sankar S</h2>
//                     <p className="fs-5">I am a passionate Web Developer who enjoys creating dynamic and responsive websites. I have a strong foundation in front-end technologies and a keen interest in back-end development.</p>
//                     <p className="fs-5">I have experience with HTML, CSS, JavaScript, and various frameworks like React and Bootstrap.</p>    
//                     <h3 className="fs-5">Skills</h3>
//                     <div className="d-flex flex-wrap gap-2">
//                         {skills.map((skill, index) => (
//                             <Badge key={index} bg="primary" className="p-2 fs-6">{skill}</Badge>
//                         ))}
//                     </div>
//               </Col>
//             </Row>
//         </Container>
//         </div>
//     )
// }
// export default About;


import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProfileImage from "../assets/Images/Profile.jpeg";
import "./about.css";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <section id="about" className="about-section">
      <Container>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-card">
          <Row className="align-items-center">

            <Col lg={4} className="text-center">
              <div className="profile-wrapper">
                <Image
                  src={ProfileImage}
                  className="profile-image"
                  roundedCircle
                />
              </div>
            </Col>

            <Col lg={8}>
              <div className="about-content">

                <h3>
                  Hi, I'm <span>Sankar S</span>
                </h3>

                <p>
                  Passionate Full Stack Web Developer focused on
                  building modern, responsive and user-friendly
                  web applications.
                </p>

                <p>
                  I enjoy transforming ideas into real-world
                  digital experiences using React, JavaScript,
                  Node.js and modern web technologies.
                </p>

                <div className="skills-container">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      {skill}
                    </div>
                  ))}
                </div>

              </div>
            </Col>

          </Row>
        </div>

      </Container>
    </section>
  );
}

export default About;