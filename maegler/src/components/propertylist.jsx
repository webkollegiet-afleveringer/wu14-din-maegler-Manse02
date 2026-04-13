import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../scss/propertylist.scss";

const PropertyList = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const res = await fetch("https://dinmaegler.onrender.com/homes?_limit=8");
        const data = await res.json();

        const homesWithImages = data.map((home) => ({
          ...home,
          image:
            home.image ||
            home.images?.[0]?.url ||
            home.media?.[0]?.url ||
            "",
        }));

        setHomes(homesWithImages);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHomes();
  }, []);

  return (
    <div className="propertylist">
      {/* HEADER */}
      <header>
        <div className="topbar">
          <div className="topbar-left">
            <div className="topbar-item">
              <img src="/images/paper-plane.svg" alt="email" />
              <span>4000@dinmaegler.com</span>
            </div>
            <div className="topbar-item">
              <img src="/images/call.svg" alt="phone" />
              <span>+45 7070 4000</span>
            </div>
          </div>

          <div className="topbar-right">
            <img src="/images/user.svg" alt="user" />
            <Link to="/login">Log ind</Link>
          </div>
        </div>

        <div className="navbar">
          <div className="logo">
           <Link to="/"><img src="/images/Din.svg" alt="Din Mægler" /></Link>
          </div>

          <nav>
            <Link to="/">Boliger til salg</Link>
            <Link to="/agents">Mæglere</Link>
            <a href="#">Mine favoritter</a>
            <Link to="/contact">Kontakt os</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="propertylist-hero">
        <div className="hero-overlay">
          <h1>Boliger til salg</h1>
        </div>
      </section>

      {/* SEARCH */}
      <section className="search-section">
        <div className="search-panel">
          <h3>Søg efter dit drømmehus</h3>

          <div className="search-row">
            <label>
              Ejendomstype
              <select>
                <option>Ejendomstype</option>
                <option>Villa</option>
                <option>Rækkehus</option>
                <option>Lejlighed</option>
              </select>
            </label>

            <label>
              Pris-interval
              <div className="range">
                <input
                  type="range"
                  min="0"
                  max="12000000"
                  defaultValue="5000000"
                />
                <div className="range-values">
                  <span>0 kr.</span>
                  <span>12.000.000 kr.</span>
                </div>
              </div>
            </label>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="property-grid">
        {homes.map((home) => (
          <article key={home.id} className="property-card">
            <div className="property-image">
              {home.image ? (
                <img src={home.image} alt={home.address} />
              ) : (
                <div className="no-image">Ingen billede</div>
              )}
            </div>

            <div className="property-details">
              <div className="property-top">
                <div>
                  <h3>{home.address}</h3>
                  <p>{home.zipcode} {home.city}</p>
                </div>
                <span className="badge">A</span>
              </div>

              <div className="property-meta">
                <p>{home.type} · Ejerudgift: {home.cost || "4.567 kr."}</p>
                <p>{home.rooms} værelser · {home.size} m²</p>
              </div>

              <div className="property-price">
                <strong>
                  {home.price?.toLocaleString() || "4.567.890"} kr.
                </strong>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-container">

            <div className="footer-left">
              <a href="/"> <img src="./public/images/din.svg" alt="logo" /></a>

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

export default PropertyList;