import {useState} from 'react';
const MovieForm = ({addMovie}) => {
    const [moviesTitle, setMovieTitle] = useState("");
    const [moviesYear, setMovieYear] = useState("");

    const reset = () => {
        setMovieTitle('');
        setMovieYear('');
    }

    const submit = (e) => {
        e.preventDefault(); // page 리로딩 방지
        addMovie({
            title:moviesTitle,
            year:moviesYear,
        });
        reset();
      }
    return (
        <form onSubmit={submit}>
            <input
            type="text"
            value={moviesTitle}
            placeholder='영화제목'
            onChange={e => setMovieTitle(e.target.value)}/>
            <br/>
            <input
            type='text'
            value={moviesYear}
            placeholder='영화년도'
            onChange={e=> setMovieYear(e.target.value)}
            />
            <button type='submit'>추가</button>
            <br/>
        </form>
    )
}
export default MovieForm;