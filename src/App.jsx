import { useState } from 'react'

import Formulario from './formulario.jsx'
import Lista from './lista.jsx'

import './App.css'


function App() {
  
  return (
    <div id="root">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            < Formulario />
          </div>
          
          <div class="one-half column">
            < Lista />
          </div>
          
        </div>
      </div>

      <script src="/static/js/bundle.js"></script>
      <script src="/static/js/vendors~main.chunk.js"></script>
      <script src="/static/js/main.chunk.js"></script>
      
    </div>
  )
}

export default App
