import React,{useState} from 'react';
import './App.css';
import Menu from './components/NavMenu/Menu';
import {MovieData} from "./components/Data/movieData";
import Search from "./components/Search/Search";
import MovieList from './components/MovieList/MovieList';
import RatingStars from "./components/RateStars/Rateing";
import AddMovie from "./components/AddMovie/AddMovie"

function App() {
  const [movies, setMovies] = useState(MovieData);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(null);
  return (
    <div className="App">
      
      <Menu  />
      <AddMovie  setMovies={setMovies}
    movies={movies}
    />
      <Search setSearch={setSearch} search={search}  />
      <RatingStars rate={rate} setRate={setRate} />
      <MovieList rate={rate} search={search} movies={movies} setMovies={setMovies} />
      
    </div>
  );
}

export default App;
