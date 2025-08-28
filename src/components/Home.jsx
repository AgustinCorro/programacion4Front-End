import Sidebar from "./Sidebar";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "2rem", flex: 1 }}>
        <h1>Bienvenido 🎉</h1>
        <p>Selecciona una opción en la barra lateral para continuar.</p>
      </div>
    </div>
  );
}

export default Home;
