import { NavLink } from 'react-router';

const UserRow = (props) => {
    return (
        <>
            {props.userData.map((user, index) => (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.created}</td>
                    <td>
                        <NavLink to={`/admin/user/edit/${user.id}`}> 
                            <button type="button" style={{
                                background: "#fbbf24",
                                color: "#222",
                                border: "none",
                                borderRadius: "4px",
                                padding: "5px 12px",
                                cursor: "pointer"
                            }}>Edit 
                            </button>
                        </NavLink>
                        <button type="button"   style={{
                                background: "#ef4444",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                padding: "5px 12px",
                                marginRight: "8px",
                                cursor: "pointer"
                            }} 
                            onClick={() => props.handleDelete(user.id)}
                                >Delete</button>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default UserRow;