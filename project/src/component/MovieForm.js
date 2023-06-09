/* eslint-disable */
import {useState} from 'react';
import InputField from './InputField';
const MovieForm = ({addMovie}) => {
    const [moviesTitle, setMovieTitle] = useState("");
    const [moviesYear, setMovieYear] = useState("");
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const reset = () => {
        setMovieTitle('');
        setMovieYear('');
    }
    
    const validateForm = () => {
        let validated = true;
        if(!moviesTitle){
            setTitleError('title이 비어있습니다.');
            validated = false;
        }else{
            setTitleError('');
        }
        
        if(!moviesYear){
            setYearError('year가 비어있습니다.');
            validated = false;
        }else{
            setYearError('');
        }

        return validated;
    }

    const submit = (e) => {
        e.preventDefault(); // page 리로딩 방지
        if(validateForm()){
            addMovie({
                id:Date.now(),
                title:moviesTitle,
                year:moviesYear,
            });
        }
        reset();
      }
    return (
        <form onSubmit={submit}>
            <InputField 
                type="text"
                value={moviesTitle}
                placeholder='영화제목'
                onChange={e => setMovieTitle(e.target.value)}
                errorMessage={titleError}
            />
            <InputField 
                type="number"
                value={moviesYear}
                placeholder='영화년도'
                onChange={e=> setMovieYear(e.target.value)}
                errorMessage={yearError}
            />
            <button type='submit'>추가</button>
            <br/>
        </form>
    )
}
export default MovieForm;