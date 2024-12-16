import React from "react";
import "./Home.css";
import Navbar from "../../components/Navigation/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img
          src={heroBanner}
          alt="Netflix Background Image"
          className="banner-img"
        />
        <div className="hero-caption">
          <img src={heroTitle} alt="Title Image" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playIcon} alt="Play Icon" />
              Play Now
            </button>
            <button className="btn dark-btn">
              <img src={infoIcon} alt="Info Icon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only On Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Topics For You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
