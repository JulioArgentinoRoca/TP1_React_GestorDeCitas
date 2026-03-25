import { useState } from 'react'

import Formulario from './formulario.jsx'
import Lista from './lista.jsx'

import './App.css'


function App() {
  
  return (
    <html>
      <head>
        <link rel="apple-touch-icon" href="/logo192.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
      </head>
      
      <body>
        <div id="root">
        
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
      </body>
      
    </html>
    
  )
}

export default App
