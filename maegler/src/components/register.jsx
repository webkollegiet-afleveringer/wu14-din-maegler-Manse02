import React from "react";
import { Link } from "react-router-dom";
import "../scss/register.scss";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-page">
      <header className="register-header">
        <div className="topbar">
          <div className="topbar-left">
            <div className="topbar-item">
              <img src="/images/paper-plane.svg" alt="Email" />
              <span>4000@dinmaegler.com</span>
            </div>
            <div className="topbar-item">
              <img src="/images/call.svg" alt="Telefon" />
              <span>+45 7070 4000</span>
            </div>
          </div>
          <div className="topbar-right">
            <img src="/images/user.svg" alt="Log ind" />
            <Link to="/login">Log ind</Link>
          </div>
        </div>

        <nav className="register-nav">
          <div className="logo-row">
            <img src="/images/Din.svg" alt="Din Mægler" className="logo-icon" />
            <span className="logo-text">DIN MÆGLER</span>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Boliger til salg</Link>
            </li>
            <li>
              <Link to="/agents">Mæglere</Link>
            </li>
            <li>
              <Link to="/favorites">Mine favoritter</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt os</Link>
            </li>
          </ul>
        </nav>

        <section className="register-hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-label">Account Register</p>
            <h1>Opret bruger hos Din Mægler</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Register</span>
            </div>
          </div>
        </section>
      </header>

      <main className="register-main">
        <section className="register-card">
          <h2>Opret bruger hos Din Mægler</h2>
          <p className="register-description">
            Opret en bruger og få nem adgang til dine favoritter, boliger og kontakt til vores team.
          </p>
          <form className="register-form" onSubmit={handleSubmit}>
            <label>
              Fulde navn
              <input type="text" placeholder="Fulde navn" required />
            </label>
            <label>
              Email adresse
              <input type="email" placeholder="Email adresse" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="Password" required />
            </label>
            <label>
              Bekræft password
              <input type="password" placeholder="Bekræft password" required />
            </label>
            <button type="submit" className="register-button">
              Opret bruger
            </button>
          </form>
        </section>

        <section className="register-info">
          <div className="info-card info-card--contact">
            <div className="info-icon">
              <img src="/images/call2.svg" alt="Kontakt" />
            </div>
            <h3>Kontakt os</h3>
            <p>Der er mange variationer af passager af Lorem Ipsum tilgængelig, men hovedparten er blevet ændret i en eller anden form.</p>
            <div className="contact-details">
              <div>
                <strong>Ring til os</strong>
                <p>+45 7070 4000</p>
              </div>
              <div>
                <strong>Send en mail</strong>
                <p>4000@dinmaegler.com</p>
              </div>
              <div>
                <strong>Besøg butik</strong>
                <p>Stændertorvet 78, 4000 Roskilde</p>
              </div>
            </div>
          </div>

          <div className="info-card info-card--links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Boliger til salg</Link>
              </li>
              <li>
                <Link to="/agents">Mæglere</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt os</Link>
              </li>
              <li>
                <Link to="/login">Log ind / bliv bruger</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
