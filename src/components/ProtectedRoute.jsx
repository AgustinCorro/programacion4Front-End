import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  //como localstorage es "global", posteriormente podemos tener roles
  const token = localStorage.getItem("token");

  if (!token) {
    // Si no hay token, redirige al login
    return <Navigate to="/" replace />;
    // Redirige al usuario a la ruta "/" (login).
    // El prop `replace` hace que esta navegación **reemplace la entrada actual en el historial del navegador**, 
    // evitando que el usuario pueda volver con el botón “atrás” a la página protegida.
  }

  // Si hay token, muestra el componente protegido
  return children;
}

export default ProtectedRoute;
