import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>
          Sankar <span>S</span>
        </h3>

        <p>
          Full Stack Web Developer passionate about building
          modern and responsive web applications.
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/sankar734/Portfolio.git/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sankar-s-707792291"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:sankarsri023@gmail.com">
            Email
          </a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © {new Date().getFullYear()} Sankar S.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;