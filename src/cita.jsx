function appointment({pet, owner, date, time, syntoms}){

    return (
        <div class="cita">
              <p>Mascota: <span>{pet}</span></p>
              <p>Dueño: <span>{owner}</span></p>
              <p>Fecha: <span>{date}</span></p>
              <p>Hora: <span>{time}</span></p>
              <p>Sintomas: <span>{syntoms}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
}

export default appointment