import "../components/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-grid">
      <div className="hero-section">
        <div className="video-div">
          <video autoPlay muted loop>
            <source src="../src/assets/News-Vid123.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="vid-cover"></div>
      </div>

      <div className="hero-content">
        <h1 className="heading">Authentic Media Wire: Your News Source</h1>
        <p className="para">
          Stay informed with our interactive and visually stunning news
          platform. <br />
          Join the conversation today!
        </p>
        <a className="amw-btn join-link" href="#contact">
          Join
        </a>
        <p className="para2">
          <span className="star-icons">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </span>
          <br />
          <span className="slogan">TRUSTED BY MILLIONS WORLDWIDE</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
