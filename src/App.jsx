import { useState, useEffect } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Saludo from './components/Saludo'
import Descripcion from './components/Descripcion'
import Formulario from './components/Formulario'

function App() {
  // useState es un hook que permite declarar un estado en un componente funcional.
  // Recibe un valor inicial y devuelve un array con dos cosas:
  // 1) La variable de estado actual (en este caso "getCount")
  // 2) Una función para actualizar ese estado (en este caso "setearContador")
  const [getCount, setearContador] = useState(10)  // Inicializamos el contador en 0

  // useEffect es otro hook que se ejecuta después de cada renderizado,
  // o cuando cambian las variables del array de dependencias.
  // Aquí usamos useEffect para mostrar en consola cada vez que cambia "getCount"
  useEffect(() => {
    console.log(`El contador cambió y ahora vale: ${getCount}`)
  }, [getCount])  // Solo se ejecuta cuando cambia "getCount"

  // Otro estado para guardar un nombre recibido desde el formulario
  const [nombreGuardado, setNombreGuardado] = useState('')  // Empieza vacío

  return (
    <div>
      <div>
        {/* Logos con enlaces */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Componente Saludo que recibe por props el nombre "Mariano" */}
      {/* Las props son las propiedades que se pasan a un componente para personalizarlo */}
      <Saludo nombre="Carina" />

      <h1>Vite + React</h1>

      {/* Componente Descripcion que recibe contenido entre etiquetas (children) */}
      <Descripcion>
          . Este es el texto que quiero mostrar
      </Descripcion>

      {/* Componente Formulario que recibe una función como prop para guardar el nombre */}
      <Formulario guardarNombreEnApp={setNombreGuardado} />

      {/* Si "nombreGuardado" tiene valor, mostramos otro saludo con ese nombre */}
      {nombreGuardado && <Saludo nombre={nombreGuardado} />}

      {/* Botón para aumentar el contador */}
      <div className="card">
        <button onClick={() => setearContador((getCount) => getCount + 1)}>
          Count
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Mostramos el valor actual del contador */}
      {getCount}

      {/* Botón para disminuir el contador */}
      <div className="card">
        <button onClick={() => setearContador((getCount) => getCount - 1)}>
          Minum
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Botón con función más compleja que resetea el contador a 0 si llega a 10 */}
      <div className="card">
        <button onClick={() => setearContador((getCount) => {
          if (getCount >= 10) {
            return 0  // Reiniciamos a cero
          } else {
            return getCount + 1  // Si no, sumamos 1
          }
        })}>
          reset cuando llega a 10
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
