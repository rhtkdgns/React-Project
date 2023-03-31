import {NavLink} from 'react-router-dom';

const UserList = ({users}) => {
    const userMap = users.map((a,i) => {
        return (
            <tbody key={i}>
                <tr >
                <th scope="row" >{a.id}</th>
                <td>
                    <NavLink to={`/user/${a.id}`}>
                        {a.name}
                    </NavLink>
                </td>
                <td>
                    <NavLink to={`/user/${a.id}`}>
                        {a.username}
                    </NavLink>
                </td>
                <td>
                    <NavLink to={`/user/${a.id}`}>
                        {a.email}
                    </NavLink>
                </td>
                </tr>
            </tbody>
        );
    })
    return(
        <>
            <div>userList</div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">username</th>
                    <th scope="col">email</th>
                    </tr>
                </thead>
                {userMap}
            </table>
            
        </>
    )
}
export default UserList;