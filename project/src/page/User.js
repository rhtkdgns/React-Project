/* eslint-disable */
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from '../component/UserList';
import Spinner from '../component/Spinner';

const User = () => {
    const [load, setLoad] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            setLoad(false);
        })
    },[]);

    return (
        <>
            <h1>USER</h1>
            {load ? <Spinner/> : <UserList users={users}/>}
        </>
    )
}
export default User;