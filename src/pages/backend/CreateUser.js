import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getUserById } from "../../services/user";

const CreateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (id) {
      const data = getUserById(id);
      if (data) {
        setUser({
          name: data.name ,
          email: data.email ,
          role: data.role 
        });
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="admin-content">
      <div className="page-header">
        { id && <h1 className="page-title">Edit User</h1>}
        {!id && <h1 className="page-title">Create User</h1>}
        <button className="btn btn-primary" onClick={() => navigate("/admin/dashboard/user")}>
          Back to users
        </button>
      </div>
      <div className="card">
        <div>
          <div className="form-group">
            <label>Name</label>
            <input className="form-input" type="text" name="name" placeholder="Enter User name"  onChange={handleChange} value={user.name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-input" type="text" name="email" placeholder="Enter email" onChange={handleChange} value={user.email}/>
          </div>
          <div className="form-group">
              <label>Role</label>
              <select className="form-input" onChange={handleChange} name="role" value={user.role} required >
                  <option value="" disabled>Choose role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
              </select>
          </div>
          <div style={{display: 'flex', gap: '1rem'}}>
            <button className="btn btn-primary" onClick={() => {console.log(user)}}>Save User</button>
            <button className="btn btn-secondary"   onClick={() => navigate("/admin/dashboard/user")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;