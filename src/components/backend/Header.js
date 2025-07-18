import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('USER_EMAIL');
    navigate('/admin/login');
  };
  return (
    <div className="header">
      <span>Header</span>
      <button onClick={handleBtnClick}>
        Logout
      </button>
    </div>
  );
}

export default Header;