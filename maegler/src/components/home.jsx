import React, { useEffect, useState } from "react";
import "../scss/home.scss";

const Home = () => {
  const [homes, setHomes] = useState([]);
  const [totalHomes, setTotalHomes] = useState(0);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const res = await fetch(
          "https://dinmaegler.onrender.com/homes?_limit=4"
        );

        const total = res.headers.get("x-total-count");
        setTotalHomes(total);

        const data = await res.json();
        setHomes(data);
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
            <span> 4000@dinmaegler.com</span>
            <img src="./public/images/call.svg" alt="logo" />
            <span> +45 7070 4000</span>
          </div>
          <div className="right">
            <img src="./public/images/user.svg" alt="logo" />
            <span> Log ind</span>
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
            <a href="#">Kontakt os</a>
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
            <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
            <h4>Det synes vi siger noget om os!</h4>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="stats">
              <div>
                <h3>4829</h3>
                <p>boliger solgt</p>
              </div>
              <div>
                <h3>{totalHomes || homes.length}</h3>
                <p>boliger til salg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h4>Bestil et salgstjek</h4>
          <p>
            Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.
          </p>
        </div>

        <div className="feature">
          <h4>74 butikker</h4>
          <p>
            Hos Din Mægler er din bolig til salg i alle vores butikker fordelt rundt i Danmark.
          </p>
        </div>

        <div className="feature">
          <h4>Tilmeld køberkartotek</h4>
          <p>
            Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.
          </p>
        </div>
      </section>
    </div>

    
  );
};

export default Home;