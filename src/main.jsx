import React from "react"; 
// Importa ReactDOM para renderizar los componentes de React en el DOM del navegador.
import ReactDOM from "react-dom/client"; 
// Importa componentes de React Router para manejar rutas en la aplicación web.
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// Importa el componente Login, que será la página de inicio de sesión.
import Login from "./components/Login"; 
// Importa el componente Home, que será la página principal protegida.
import Home from "./components/Home"; 
import Users from "./components/Users"; 
import NotFound from "./components/NotFound"; 
// Importa el componente ProtectedRoute, que protege rutas solo para usuarios autenticados.
import ProtectedRoute from "./components/ProtectedRoute"; 
import "./styles/index.css"; 

// Selecciona el elemento del DOM con id "root" y crea la raíz de la aplicación React para renderizar los componentes dentro.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* // Activa el modo estricto de React para ayudar a detectar problemas potenciales en la aplicación. */}
    <BrowserRouter>
    {/* // Envuelve la aplicación con BrowserRouter para habilitar el enrutamiento basado en URLs. */}
      <Routes>
      {/* // Define un contenedor para declarar todas las rutaS de la aplicación. */}
        <Route path="/" element={<Login />} />
        {/* // Define la ruta principal "/" y renderiza el componente Login cuando el usuario accede a esta URL. */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home /> 
            </ProtectedRoute>
          } 
          />
        <Route 
          path="/users" 
          element={
            <ProtectedRoute>
              <Users /> 
            </ProtectedRoute>
          } 
          />
          {/* // Define la ruta "/home" y renderiza el componente Home solo si ProtectedRoute permite el acceso (es decir, si el usuario está autenticado). */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);