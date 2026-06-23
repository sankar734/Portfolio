// function Hero(){
//     return(
//         <div id="home" style={{ backgroundColor: "#06090d", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//             <p className="h1 text-center m-5" style={{ fontSize: '100px',background: "linear-gradient(100deg, #2a11ee 10%, #1fa7e2 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Hello, I'm Sankar S</p>
//             <p className="h2 text-center " style={{ fontSize: '50px' }}>Web Developer</p>
//             <p className="h3 text-center " style={{ fontSize: '30px' }}>I create responsive and user-friendly websites</p>
//             <div className="mx-auto mt-5 " style={{ width: '250px' }}>
//                 <button className="btn btn-info ms-3" type="button">Hire Me</button>
//                 <button  className="btn btn-outline-info ms-3" type="button">Download CV</button>
//             </div>
//         </div>
//     )
// }
// export default Hero;


import "./hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        <p className="hero-greeting">
          👋 Hello, I'm
        </p>

        <h1 className="hero-title">
          Sankar <span>S</span>
        </h1>

        <h2 className="hero-role">
          Full Stack Web Developer
        </h2>

        <p className="hero-description">
          Passionate about building modern, responsive and
          user-friendly web applications using React, JavaScript,
          Node.js and emerging technologies.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary-custom">
            Hire Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn-secondary-custom"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;