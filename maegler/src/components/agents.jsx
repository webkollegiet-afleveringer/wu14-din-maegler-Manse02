import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../scss/agents.scss";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await fetch("https://dinmaegler.onrender.com/agents?_limit=6");
        const data = await res.json();

        const agentsWithImages = data.map((agent) => ({
          ...agent,
          imageUrl: agent.image?.url || "",
        }));

        setAgents(agentsWithImages);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="agents-page">
      <header>
        <div className="topbar">
          <div className="topbar-content">
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
        </div>

        <div className="navbar">
          <div className="navbar-content">
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
        </div>
      </header>

      <section className="agents-list">
        <div className="agents-grid">
          {agents.map((agent) => (
            <article key={agent.id} className="agent-card">
              <div className="agent-image">
                {agent.imageUrl ? (
                  <img src={agent.imageUrl} alt={agent.name} />
                ) : (
                  <div className="agent-image-fallback">Ingen billede</div>
                )}
              </div>

              <div className="agent-body">
                <h3>{agent.name}</h3>
                <p>{agent.title}</p>
                <div className="agent-icons">
                  <a href={`mailto:${agent.email}`} aria-label="Send e-mail">
                    <img src="/images/Vector.svg" alt="mail" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <img src="/images/in.svg" alt="linkedin" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

        <footer>
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

export default Agents;
