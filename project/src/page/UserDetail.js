/* eslint-disable */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../component/Spinner';

const UserDetail = () => {
    const [load, setLoad] = useState(true);
    const [user, setUser] = useState([]);
    const {id} = useParams();
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users/'+ id)
        .then((res) => {
            setUser(res.data);
            setLoad(false);
        })
    },[]);

    
    return(
        <>
            {load ? <Spinner/> : <div>{user.website}</div>}
        </>   
    )
}
export default UserDetail;