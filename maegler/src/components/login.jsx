import React from "react";
import { Link } from "react-router-dom";
import "../scss/login.scss";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page">
      <header className="login-header">
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

        <nav className="login-nav">
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

        <section className="login-hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-label">Account Login</p>
            <h1>Log ind på din konto</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>|</span>
              <span>Login</span>
            </div>
          </div>
        </section>
      </header>

      <main className="login-main">
        <section className="login-card">
          <h2>Log ind på din konto</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input type="email" placeholder="Email" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="Password" required />
            </label>
            <button type="submit" className="login-button">
              Log ind
            </button>
          </form>

          <div className="login-divider">Log ind med</div>

          <div className="social-buttons">
            <button type="button" className="social-btn social-btn--google">
              Google
            </button>
            <button type="button" className="social-btn social-btn--facebook">
              Facebook
            </button>
            <button type="button" className="social-btn social-btn--twitter">
              Twitter
            </button>
          </div>

          <p className="login-footer-text">
            Har du ikke en konto? <Link to="/register">Opret bruger</Link>
          </p>
        </section>

        <section className="login-info">
          <div className="info-card info-card--contact">
            <div className="info-icon">
              <img src="/images/call2.svg" alt="Kontakt" />
            </div>
            <h3>Kontakt os</h3>
            <p>
              Der er mange variationer af passager af Lorem Ipsum tilgængelig, men
              hovedparten er blevet ændret i en eller anden form.
            </p>
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
                <Link to="/register">Log ind / bliv bruger</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
