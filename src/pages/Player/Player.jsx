import React, { useEffect, useState } from "react";
import "./Player.css";
import backArrowIcon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTE4MjE5NTAwMzEwOTZjYWYwYzg0NTgxMzJlNzk3YyIsIm5iZiI6MTczNDIxMjM3Ny43NDMsInN1YiI6IjY3NWRmYjE5ZGU4ZjM0ZTBiMjU4NWY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SX04fnnsFXOdpyPVxSb1tuS1C4pXiD5zfStBXhCRsYs",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setVideoData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        onClick={() => {
          navigate(-2);
        }}
        src={backArrowIcon}
        alt="Back Arror Icon"
      />
      <iframe
        src={`https://youtube.com/embed/${videoData.key}`}
        width="90%"
        height="90%"
        frameborder="0"
        title="Trailor"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{videoData.published_at.slice(0, 10)}</p>
        <p>{videoData.name}</p>
        <p>{videoData.type}</p>
      </div>
    </div>
  );
};

export default Player;
