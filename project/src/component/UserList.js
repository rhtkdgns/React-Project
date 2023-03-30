const UserList = ({users}) => {
    const userMap = users.map((a,i) => {
        console.log(a);
        return (
          <>
            <tbody key = {i}>
                <tr>
                <th scope="row">{a.id}</th>
                <td>{a.name}</td>
                <td>{a.username}</td>
                <td>{a.email}</td>
                </tr>
            </tbody>
            
          </>
        );
    })
    return(
        <>
            <div>userList</div>
            <table class="table">
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