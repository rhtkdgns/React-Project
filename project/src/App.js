/* eslint-disable */
import MNavbar from './common/MNavbar';
import Movies from './component/Movies';
import {useState} from 'react';
import MovieForm from './component/MovieForm';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
    <Router>
      <div className="App">
          <MNavbar/>
          <Route path="/movies">
            <h1>Movies List</h1>
            <MovieForm addMovie={addMovie}/>
            {renderMovies}
          </Route>
          <Route path="/user">
            <h2>USERS</h2>
          </Route>
          <Route path="/">
            <h1>HOME</h1>
          </Route>
      </div>
    </Router>  
  );
}

export default App;