import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../styles/Users.css"

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Traer usuarios al cargar la página
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:91/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Error al cargar usuarios");
        const result = await res.json();
        setUsers(result.data);
      } catch (err) {
        console.error(err);
        alert("No se pudo cargar la lista de usuarios");
      }
    };


    fetchUsers();
  }, []);

const handleAddUser = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:91/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      alert("Error al crear usuario");
      return;
    }

    // Si no hay JSON en la respuesta, evitamos parsearlo
    let newUser = null;
    try {
      newUser = await res.json();
    } catch {
      // si no hay body, usamos los datos que ya tenemos
      newUser = { name, email, password };
    }

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setPassword("");
  } catch (err) {
    console.error(err);
    alert("Error al crear usuario");
  }
};


  return (
   <div>
        <Sidebar />
        <div className="container-users">
   <div className="form-container">

  <p className="title">Agregar Usuario</p>
  <form className="form" onSubmit={handleAddUser}>
    <input
      type="text"
      className="input"
      placeholder="Nombre"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
    <input
      type="email"
      className="input"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      className="input"
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit" className="form-btn">Agregar Usuario</button>
  </form>

  <h3>Lista de usuarios</h3>
  <ul>
    {users.map((u) => (
      <li key={u.id}>{u.name} - {u.email}</li>
    ))}
  </ul>
</div>
</div>
</div>
  );
}

export default Users;