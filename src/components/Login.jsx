import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //hook propio de navigate
  const navigate = useNavigate();

  // e es el evento que se dispara cuando se envia el formulario es un obj de tipo evento y
  // el prevent defoult previene que el formulario se envie de manera tradicional (recargando la página)
  const handleSubmit = async (e) => {
  e.preventDefault();

  // async delante de la función indica que esa función va a manejar operaciones asíncronas y que puedes usar await dentro.
  // Operaciones asíncronas son aquellas que no se resuelven inmediatamente, como llamadas a un servidor o lectura de archivos.

  try {
    //El fetch al link que corresponda
    const response = await fetch("http://localhost:91/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

    //^^^^^^ el primer parametro es a donde le pego, el segundo es el cuerpo de la peticion
    /**
     * en el cuerpo de la peticion tenemos varias cosas
     * metgod: "GET/POST"
     * headers: en este caso la peticion esta en formato json
     * body: propiamente el cuerpo de la peticion con el email y la password
     */

    /**si lass credenciales no coinciden */
      if (!response.ok) {
        alert("Error en las credenciales");
        return;
      }

      /**
       * convierte la respuesta a json y almacentamos en data lo que se supone que viene del fetch
       */
      const data = await response.json();
      localStorage.setItem("token", data.token);

      // Si el backend también manda role, lo podés guardar aquí 
      // if (data.role) {
      //   localStorage.setItem("role", data.role);
      // }

      navigate("/home");
    } catch (error) {
      console.error("Error en login:", error);
      alert("No se pudo conectar al servidor");
    }
};

return (
<div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form" onSubmit={handleSubmit}>
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button type="submit" className="form-btn">Log in</button>
      </form>
      <p className="sign-up-label">
        Don't have an account?<span className="sign-up-link">Sign up</span>
      </p>
    </div>
  );
}

export default Login;
