/* eslint-disable */
import MNavbar from './common/MNavbar';
import Movies from './component/Movies';
import {useState} from 'react';
import MovieForm from './component/MovieForm';
import './App.css';

function App() {

  const [movies, setMovies] = useState([
    {title: 'kosanghun', year:1992},
    {title: 'hansangmin', year:1990},
    {title: 'yujinho', year:1894},
  ]);
  const renderMovies = movies.map((movie,i) => {
    return(
      <Movies movie={movie} key={i}/>
      );
  });

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