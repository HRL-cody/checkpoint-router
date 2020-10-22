import React from 'react'
import MovieCard from "../MovieCards/MovieCards.js"
export default function MovieList({ movies,search,rate }) {
    let filteredMovies = movies;

    const filter = () => {
        if(rate && search !== ''){
            filteredMovies = movies.filter(movies => movies.Rating === rate).filter(movie => (movie.Title.toLowerCase()).includes(search.toLowerCase()))
        }
        else if(rate){
            filteredMovies = movies.filter(movies => movies.Rating === rate)
        }
        else if(search !== ''){
            filteredMovies = movies.filter(movie => (movie.Title.toLowerCase()).includes(search.toLowerCase()))
        }
        else{
            filteredMovies = movies
        }
        return filteredMovies.map(movie => <MovieCard movie={movie} />)
    }
    return (
        <div>
            {filter()}
        </div>
    )
}
