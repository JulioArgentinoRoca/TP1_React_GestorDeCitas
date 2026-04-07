import Appointment from "./cita.jsx"
import {useEffect, useState} from "react"
import './lista.css'

function list(props){
    //appointment


    const [indexToDelete, setDeleteIndex] = useState()

    const appointmentList=props.appointments.map((appointment, index) =>
        < Appointment 
        pet={appointment.pet} 
        owner={appointment.owner} 
        date={appointment.date} 
        time={appointment.time} 
        syntoms={appointment.syntoms} 
        myIndex={index} 
        deletMev2={props.deleteAppointment}
        />
    )
     


    return (


        <>
            <h2>Administra tus citas</h2>

            
            {appointmentList}

        </>
        
        
    )
}

export default list