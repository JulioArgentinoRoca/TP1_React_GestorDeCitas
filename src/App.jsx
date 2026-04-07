import { useState } from 'react'

import Formulario from './formulario.jsx'
import Lista from './lista.jsx'

import './App.css'


function App() {
  const [appointmentsObjectList, setAppointments] = useState([
      {
        pet: "Nina",
        owner: "Martin",
        date: "2021-08-05",
        time: "08:20",
        syntoms: "Le duele la pierna"
      },
      {
        pet: "Sifon",
        owner: "Rigoberto IV de la mesa redonda",
        date: "2023-08-05",
        time: "09:24",
        syntoms: "Duerme mucho"
      },
      {
        pet: "Floki",
        owner: "Ari",
        date: "2023-08-05",
        time: "16:15",
        syntoms: "No está comiendo"
      }

    ])


    const deleteAppointment = (indexToDelete) => {
      let appointments=[];

      for(let i=0; i<appointmentsObjectList.length; i++){
        if(i != indexToDelete){
          appointments.push(appointmentsObjectList[i])
        }
      }

      setAppointments(appointments)
    }



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
                < Lista appointments={appointmentsObjectList} deleteAppointment={deleteAppointment}/>
              </div>
              
            </div>
          </div>

          
          
      </div>
      
    </>
    
  )
}

export default App
