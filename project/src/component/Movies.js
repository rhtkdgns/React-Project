const Movies = ({movie, removeMovie}) => {
    return(
    <div className="movie">
        <div className="movie-title">
            {movie.title}
            <span>
                <div className="movie-year">
                    ({movie.year})
                </div>
            </span>
            
        </div>
        <div>
            <button onClick={() => removeMovie(movie.id)}>삭제</button>
        </div>
    </div>
    );
}
export default Movies;