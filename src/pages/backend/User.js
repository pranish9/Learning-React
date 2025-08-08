import { useNavigate } from "react-router";
import UserRow from "../../components/backend/UserRow";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/user";

const User = () => {
   const navigate = useNavigate();
   const [users, setUsers] = useState([]); 

   useEffect(() => {
    const data = getAllUsers();
    setUsers(data);
   }, []);

   const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
      console.log("User deleted:", id);
    }
    };
   
  return (
    <div>
      <div className="blog-header" >
        <h2>User Management</h2>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "18px" }}>
            <button type="button" onClick={() => navigate('/admin/user/create')}>Add User</button>
        </div>
        </div>
 
      <div className="blogtable">
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <UserRow userData={users} handleDelete={handleDelete} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default User;