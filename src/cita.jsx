import './cita.css'

function appointment(props){

    return (
        <div className="cita">
              <p>Mascota: <span>{props.pet}</span></p>
              <p>Dueño: <span>{props.owner}</span></p>
              <p>Fecha: <span>{props.date}</span></p>
              <p>Hora: <span>{props.time}</span></p>
              <p>Sintomas: <span>{props.syntoms}</span></p><button className="button elimnar u-full-width" onClick={() => props.deletMev2(props.myIndex)}>Eliminar ×</button>
        </div>
    )
}

export default appointment