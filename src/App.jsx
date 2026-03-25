import { useState } from 'react'

import Formulario from './formulario.jsx'
import Lista from './lista.jsx'

import './App.css'


function App() {
  
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      < Formulario />
      
      < Lista />
    </>
  )
}

export default App
