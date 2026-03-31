import Appointment from "./cita.jsx"
import './lista.css'

function list(){


    let appointmentList=[]

    let appointmentsObjectList=[
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

    ]

    for(let i=0; i<appointmentsObjectList.length; i++){
        appointmentList.push(
            < Appointment pet={appointmentsObjectList[i].pet} owner={appointmentsObjectList[i].owner} date={appointmentsObjectList[i].date} time={appointmentsObjectList[i].time} syntoms={appointmentsObjectList[i].syntoms} />
        )
    }


    return (


        <>
            <h2>Administra tus citas</h2>

            
            {appointmentList}

        </>
        
        
    )
}

export default list