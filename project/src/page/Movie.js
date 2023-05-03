import Movies from '../component/Movies';
import {useState} from 'react';
import MovieForm from '../component/MovieForm';

const Movie = () => {
    
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }))
  }
  
  const renderMovies = movies.length ? movies.map((movie) => {  
    return(
      <Movies 
        movie={movie}
        key={movie.id}
        removeMovie={removeMovie}/>
      );
  }) : '추가된 영화가 없습니다.';

  const addMovie = (movie) => {
    setMovies([
      ...movies,
       movie
    ]);
  }
    return (
        <>
            <h1>Movies List</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
        </>
    )
}
export default Movie;