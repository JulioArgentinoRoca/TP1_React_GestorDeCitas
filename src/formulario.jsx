import './formulario.css'
import { useState } from 'react'

function form(props){
    //addAppointment

    const [pet, setPet] = useState()
    const [owner, setOwner] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [syntoms, setSyntoms] = useState()

    const handlePetChange = (e) => {
        setPet(e.target.value);
    }
    const handleOwnerChange = (e) => {
        setOwner(e.target.value);
    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }
    const handleSyntomsChange = (e) => {
        setSyntoms(e.target.value);
    }




    return (
        <>
            
            <h2>Crear mi Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={handlePetChange}/>
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={handleOwnerChange}/>
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" onChange={handleDateChange}/>
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={handleTimeChange}/>
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" onChange={handleSyntomsChange}></textarea>
                <button type="button" className="u-full-width button-primary" onClick={()=>{
                    props.addAppointment({
                    pet: pet,
                    owner: owner,
                    date: date,
                    time: time,
                    syntoms: syntoms
                })}}>Agregar Cita</button>
            </form> 
          
        </>
    )
}

export default form