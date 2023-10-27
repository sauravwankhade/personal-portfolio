import React from "react";
import IMG1 from "../../assets/bitcoin.png";
import IMG2 from "../../assets/eshop.png";
import IMG3 from "../../assets/weaher.png";
import IMG4 from "../../assets/cart.png";
import IMG5 from "../../assets/techystar.png";
import IMG6 from "../../assets/videohub.png";
import IMG7 from "../../assets/Snake.png";
import IMG8 from "../../assets/Screenshot (110).png";
import IMG9 from "../../assets/tictactoe.png";


import "./portfolio.css";

const projectsData = [
  {
    id: 1,
    image: IMG1,
    title: "XCrypto",
    github: "https://github.com/sauravwankhade/Xcrypto-App",
    demo: "https://react-crypto-app-snowy.vercel.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Eshop Well",
    github: "https://github.com/sauravwankhade/Eshop-Well",
    demo: "https://eshopwell-105ynbkdf-saurav-wankhades-projects.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Weather Updates",
    github: "https://github.com/sauravwankhade/WeatherUpdates",
    demo: "https://weather-c8x36sjmy-saurav-wankhades-projects.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "REACT CART",
    github: "https://github.com/sauravwankhade/react-cart",
    demo: "https://react-cart-av1ckqenv-saurav-wankhades-projects.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "TECHY STAR",
    github: "https://github.com/sauravwankhade/TechyStar.git",
    demo: "https://react-techystar-kappa.vercel.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "VIDEO HUB",
    github: "https://github.com/sauravwankhade/VIDEO-HUB",
    demo: "https://reactvideos-mtrl3gu3z-saurav-wankhades-projects.vercel.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Snake Game",
    github: "https://github.com/sauravwankhade/snake-game",
    demo: "https://snake-game-qkzvb1r6c-saurav-wankhades-projects.vercel.app",
  },
  {
    id: 8,
    image: IMG8,
    title: "React Personal Portfolio",
    github: "https://github.com/abhi8779/",
    demo: "https://sauravwankhadeportfolio-b100zvchm-saurav-wankhades-projects.vercel.app",
  },
  {
    id: 9,
    image: IMG9,
    title: "Tic-Tac-Toe",
    github: "https://github.com/sauravwankhade/TicTacToe",
    demo: "https://tic-tac-g4d13wmow-saurav-wankhades-projects.vercel.app/",
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectsData.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title}></img>
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item-CTA">
                <a
                  href={project.github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  github
                </a>
                <a
                  href={project.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
