import { useState } from 'react'

import Formulario from './formulario.jsx'
import Lista from './lista.jsx'

import './App.css'


function App() {
  
  return (
    <>
      
      
      
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

          
          
      </div>
      
    </>
    
  )
}

export default App
