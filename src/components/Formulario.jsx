import { useState } from 'react'

function Formulario({ guardarNombreEnApp }) {
  const [nombreInput, setNombreInput] = useState('') // Estado local del input

  function manejarEnvioDelFormulario(eventoFunction) {
    eventoFunction.preventDefault()
    guardarNombreEnApp(nombreInput)  // Le pasamos el nombre al padre (App)
    //cuando hace set directamente le sea valor
    setNombreInput('') // Limpiamos el input

  }

  return (
    //llama a la funcion que le reotrona al padre luego
    //de que el usuario haga submit
    <form onSubmit={manejarEnvioDelFormulario}>
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={nombreInput}
        onChange={eventoOnChange => setNombreInput(eventoOnChange.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  )
}

export default Formulario
