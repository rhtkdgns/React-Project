/* eslint-disable */
import MNavbar from './common/MNavbar';
import Movies from './component/Movies';
import {useState} from 'react';
import MovieForm from './component/MovieForm';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    console.log(id);
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
    <div className="App">
      <MNavbar/>
      <h1>Movies List</h1>
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
    </div>
  );
}

export default App;