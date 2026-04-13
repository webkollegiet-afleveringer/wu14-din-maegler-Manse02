import React from "react";
import { Link } from "react-router-dom";
import "../scss/contact.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
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
            <Link to="/login" className="login-link">
              Log ind
            </Link>
          </div>
        </div>

        {/* NAVBAR */}
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/images/Din.svg" alt="Din Mægler" />
            </Link>
          </div>

          <nav>
            <Link to="/propertylist">Boliger til salg</Link>
            <Link to="/agents">Mæglere</Link>
            <Link to="/favorites">Mine favoritter</Link>
            <Link to="/contact">Kontakt os</Link>
          </nav>
        </div>

        {/* HERO */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Kontakt os</h1>
          </div>
        </div>
      </header>

      <main className="contact-main">
        {/* INTRO */}
        <section className="intro-section">
          <div className="intro-text">
            <h2>Vi sidder klar til at besvare dine spørgsmål</h2>
            <p>
              Der kan opstå tvivl om mange ting når man gerne vil, eller er i
              gang med at sælge sin bolig. Vores medarbejdere sidder klar alle
              ugens dage til at svare på dine spørgsmål.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="contact-grid">
          {/* FORM */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Navn</label>
                  <input type="text" placeholder="Indtast dit navn" required />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Indtast din email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Emne</label>
                <input type="text" placeholder="Indtast emne" required />
              </div>

              <div className="form-group">
                <label>Besked</label>
                <textarea
                  placeholder="Indtast din besked..."
                  required
                ></textarea>
              </div>

              <div className="checkbox-group">
                <label>
                  <input type="checkbox" />
                  Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Send besked
              </button>
            </form>
          </div>

          {/* INFO CARDS */}
          <div className="contact-cards">
            <div className="info-card">
              <div className="card-icon">
                <img src="/public/images/call2.svg" alt="Ring til os" />
              </div>
              <h3>Ring til os</h3>
              <p>+45 7070 4000</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <img src="/images/paper-plane.svg" alt="Send en mail" />
              </div>
              <h3>Send en mail</h3>
              <p>4000@dinmaegler.dk</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <img src="/images/home.svg" alt="Besøg butikken" />
              </div>
              <h3>Besøg butikken</h3>
              <p>Stændertorvet 78, 4000 Roskilde</p>
            </div>
          </div>
        </section>
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

export default Contact;