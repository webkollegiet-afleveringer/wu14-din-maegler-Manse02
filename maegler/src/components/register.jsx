import React from "react";
import { Link } from "react-router-dom";
import "../scss/login.scss";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page">
      <header className="login-header">
        {/* TOPBAR */}
        <div className="topbar">
          <div className="topbar-left">
            <div className="topbar-item">
              <img src="/images/paper-plane.svg" alt="Email" />
              <span>4000@dinmaegler.com</span>
            </div>
            <div className="topbar-item">
              <img src="/images/call2.svg" alt="Telefon" />
              <span>+45 7070 4000</span>
            </div>
          </div>

          <div className="topbar-right">
            <img src="/images/user.svg" alt="Log ind" />
            <Link to="/login">Log ind</Link>
          </div>
        </div>

        {/* NAVBAR */}
        <div className="navbar">
          <img src="/images/Din.svg" alt="logo" />

          <nav>
            <a href="/propertylist">Boliger til salg</a>
            <a href="/agents">Mæglere</a>
            <a href="/favorites">Mine favoritter</a>
            <a href="/contact">Kontakt os</a>
          </nav>
        </div>

        {/* HERO */}
        <div className="hero">
          <div className="hero-content">
            <h1>Account Register</h1>
            <span>Home | Register</span>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="login-main">
        <div className="login-box">
          <h2>Opret bruger hos Din Mægler</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Fulde navn" required />
            <input type="email" placeholder="Email adresse" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Bekræft password" required />

            <button type="submit">Opret bruger</button>
          </form>

          <p className="divider">Har du allerede en konto?</p>

          <div className="socials">
            <button className="google">Google</button>
            <button className="facebook">Facebook</button>
            <button className="twitter">Twitter</button>
          </div>

          <p className="register">
            Har du allerede en konto? <Link to="/login">Log ind</Link>
          </p>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-left">
              <a href="/">
                <img src="./public/images/din.svg" alt="logo" />
              </a>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humour, or randomised words.
              </p>

              <div className="contact-box">
                <div>
                  <img src="./public/images/call2.svg" alt="icon3" />
                  <span>+45 7070 4000</span>
                </div>
                <div>
                  <img src="./public/images/plane.svg" alt="icon3" />
                  <span>4000@dinmaegler.com</span>
                </div>
                <div>
                  <img src="./public/images/icon.svg" alt="icon3" />
                  <span>Stændertorvet 78, 4000 Roskilde</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#">Boliger til salg</a>
              <a href="#">Mæglere</a>
              <a href="#">Kontakt os</a>
              <a href="#">Log ind / bliv bruger</a>
            </div>

            <div className="footer-member">
              <p>Medlem af</p>
              <h1>DMS</h1>
              <span>Dansk Mægler Sammenslutning</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Layout By JL Bank 2020</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
