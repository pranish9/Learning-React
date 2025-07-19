import { NavLink } from "react-router";
const Sidebar = () => {
  return (
    <>
      <div class="col sidebar">
        <ul>
          <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/admin/dashboard/blog">Blog</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;