import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [movieData, setMovieData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TMDB_AUTH,
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popluar On Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {movieData.map((card, idx) => (
          <Link to={`/player/${card.id}`} className="card" key={idx}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt="Movie Image"
            />
            <p>{card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
