import logo from  "../assets/logo.svg";
import {Link, NavLink} from "react-router-dom";

function Footer() {
  return (
      <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                  <NavLink to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                      <img src={logo} alt="logo" width="30" height="24"/>
                  </NavLink>
                  <span className="text-muted">© 2024 I Love Maadi Team</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                  <li className="ms-3"><Link className="text-muted" to="https://www.x.com">
                      <i className="bi bi-twitter"></i>
                  </Link></li>
                  <li className="ms-3"><Link className="text-muted" to="https://www.instagram.com">
                      <i className="bi bi-instagram"></i>
                  </Link></li>
                  <li className="ms-3"><Link className="text-muted" to="https://www.facebook.com">
                      <i className="bi bi-facebook"></i>
                  </Link></li>
                  <li className="ms-3"><Link className="text-muted" to="https://www.linkedin.com">
                      <i className="bi bi-linkedin"></i>
                  </Link></li>
                  <li className="ms-3"><Link className="text-muted" to="https://www.youtube.com/">
                      <i className="bi bi-youtube"></i>
                  </Link></li>
              </ul>
          </footer>
      </div>
  );
}

export default Footer;