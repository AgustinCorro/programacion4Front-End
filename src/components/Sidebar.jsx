import { useNavigate } from "react-router-dom";
import "../Styles/Sidebar.css";
function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="title">Mi Dashboard</h2>
      <button onClick={() => navigate("/home")}>
        Home
      </button>
      <button  onClick={() => navigate("/users")}>
        Usuarios
      </button>
      <button style={{ backgroundColor: "#e74c3c" }} onClick={() => {
        localStorage.removeItem("token");
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
