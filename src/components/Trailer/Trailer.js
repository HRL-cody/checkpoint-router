import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieData } from "../Data/movieData";

const Trailer = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log(
      "test",
      MovieData.find((movie) => movie.id === +match.params.id)
    );
    setMovie(MovieData.find((movie) => movie.id === +match.params.id));
  }, [match]);

  return (
    <div className="Trailer">
      <h1>Movie Trailer</h1>
      <iframe
        src={movie.Trailer}
        title="myMovie"
        width="853"
        height="480"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={{padding:'50px 10px'}}>
      <p>{movie.Description}</p>
      </div>
      
      <hr />
      <Link to="/src/MovieApp.js">
        <Button variant="dark">Go Back</Button>
      </Link>
    </div>
  );
};

export default Trailer;
