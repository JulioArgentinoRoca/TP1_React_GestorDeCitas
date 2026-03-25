import { useState } from 'react'

import Formulario from './formulario.jsx'
import Lista from './lista.jsx'

import './App.css'


function App() {
  
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          < Formulario />
        
          < Lista />
        </div>
      </div>
      
    </>
  )
}

export default App
