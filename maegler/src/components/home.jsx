import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../scss/home.scss";

const Home = () => {
  const [homes, setHomes] = useState([]);
  const [totalHomes, setTotalHomes] = useState(0);
  const [soldHomes, setSoldHomes] = useState(0);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const resHomes = await fetch(
          "https://dinmaegler.onrender.com/homes?_limit=4"
        );
        const dataHomes = await resHomes.json();

        const homesWithImages = dataHomes.map((home) => ({
          ...home,
          image:
            home.image ||
            (home.images && home.images[0]) ||
            (home.media && home.media[0]?.url) ||
            "",
        }));

        setHomes(homesWithImages);

        const resCount = await fetch(
          "https://dinmaegler.onrender.com/homes/count"
        );
        const dataCount = await resCount.json();

        if (dataCount.total) setTotalHomes(dataCount.total);
        if (dataCount.sold) setSoldHomes(dataCount.sold);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHomes();
  }, []);

  return (
    <div className="home">
      <header>
        <div className="topbar">
          <div className="left">
            <img src="./public/images/paper-plane.svg" alt="" className="mail" />
            <span className="mail"> 4000@dinmaegler.com</span>
            <img src="./public/images/call.svg" alt="logo" />
            <span className="phone"> +45 7070 4000</span>
          </div>
          <div className="right">
            <img src="/images/user.svg" alt="logo" />
            <Link to="/login" className="login-link">
              Log ind
            </Link>
          </div>
        </div>

        <div className="navbar">
          <div className="logo">
            <img src="./public/images/din.svg" alt="logo" />
          </div>
          <nav>
            <a href="#">Boliger til salg</a>
            <a href="#">Mæglere</a>
            <a href="#">Mine favoritter</a>
            <a href="/contact">Kontakt os</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="overlay">
          <h1>Søg efter din drømmebolig</h1>
          <div className="searchBox">
            <p>Søg blandt {totalHomes || homes.length} boliger til salg</p>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Søg på fx. gaskomfur, bryggers, kælder eller lignende"
              />
              <button>Søg</button>
            </div>
          </div>
        </div>
      </section>

      <section className="info">
        <div className="container">
          <div className="imageBox">
            <img src="./public/images/fam.svg" alt="family" />
          </div>
          <div className="textBox">
            <h2>Vi har fulgt danskerne hjem <br /> i snart 4 årtier</h2>
            <h4>Det synes vi siger noget om os!</h4>
            <p>
              It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.
              The point of <br /> using Lorem Ipsum is that it has normal distribution.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.
            </p>
<div className="stats">
  <div className="stat-card">
    <div className="icon-box">
      <img src="./public/images/house.svg" alt="house" />
    </div>
    <div className="text">
      <h3>{soldHomes || 4829}</h3>
      <p>boliger solgt</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="icon-box">
      <img src="./public/images/home.svg" alt="home1" />
    </div>
    <div className="text">
      <h3>{totalHomes || homes.length}</h3>
      <p>boliger til salg</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src="./public/images/1.svg" alt="feature 1" />
          <h4>Bestil et salgstjek</h4>
          <p>
            Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.
          </p>
        </div>
        <div className="feature">
          <img src="./public/images/2.svg" alt="feature 2" />
          <h4>74 butikker</h4>
          <p>
            Hos Din Mægler er din bolig til salg i alle vores butikker fordelt rundt i Danmark.
          </p>
        </div>
        <div className="feature">
          <img src="./public/images/3.svg" alt="feature 3" />
          <h4>Tilmeld køberkartotek</h4>
          <p>
            Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.
          </p>
        </div>
      </section>

      <section className="bolig">
        <h1 className="am">Udvalgte boliger</h1>
          <p className="am">
            Der er mange variationer af Lorem Ipsum men størstedelen har lidt ændringer
          </p>

      <div className="billeder">
        {homes.map((home) => (
          <div key={home.id} className="bolig-card">
            <div className="image-wrapper">
              {home.image ? (
                <img src={home.image} alt={home.address} />
              ) : (
            <div className="no-image">Ingen billede</div>
          )}
        </div>

        <div className="card-content">
          <h3>{home.address}</h3>
          <p className="city">{home.zipcode} {home.city}</p>

          <p className="type">
            {home.type} · Ejerudgift: {home.cost || "4.567 kr."}
          </p>

          <div className="info-row">
            <span className="badge">A</span>
            <span>{home.rooms} værelser</span>
            <span>{home.size} m²</span>

            <span className="price">
              {home.price?.toLocaleString()} kr.
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="center">
    <button className="see-more">Se alle boliger</button>
  </div>
</section>

<section className="newsletter">
  <div className="newsletter-content">
    <h3>
      Tilmeld dig vores nyhedsbrev og <br />
      hold dig opdateret på boligmarkedet
    </h3>

    <div className="input-box">
      <input type="text" placeholder="Indtast din email adresse" />
      <img src="./public/images/Arrow.svg" alt="arrow" />
    </div>
  </div>
</section>

<section className="agents">
  <div className="agents-container">
    <h2>Mød vores engagerede medarbejdere</h2>
    <p>
      Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
      Kontakt en af vores medarbejdere.
    </p>

    <div className="agents-grid">
      {[1, 2, 3].map((item) => (
        <div key={item} className="agent-card">
          <img src="/images/person.jpg" alt="agent" />

          <div className="agent-info">
            <h4>Grant Marshall</h4>
            <p>Ejendomsmægler, MDM5</p>

            <div className="icons">
              <img src="./public/images/vector.svg" alt="mail" />
              <img src="./public/images/in.svg" alt="linkedin" />
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="center">
      <button>Se alle mæglere</button>
    </div>
  </div>
</section>

<footer className="footer">
  <div className="footer-top">
    <div className="footer-cta">
      <div className="cta-text">
        <h2>Hold dig opdateret<br />på salgsprocessen</h2>
        <p>
          Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
          ansvarlige mægler eller butik med vores app. Her kan du også se statistik
          på interessen for din bolig i alle vores salgskanaler.
        </p>

        <div className="cta-buttons">
          <button className="google">
            <img src="./public/images/play.svg" alt="" />
            Google Play
          </button>
          <button className="apple">
            <img src="./public/images/apple.svg" alt="" />
            Apple Store
          </button>
        </div>
      </div>

      <div className="cta-image">
      </div>
    </div>
  </div>

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

export default Home;