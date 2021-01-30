import React from 'react'
import Card from "react-bootstrap/Card";

const Task = ({task,onDelete}) => {
    return (
        <div >
        <Card style={{ width: '28rem', marginLeft:"20%", marginBottom:'1%' }} className="d-flex align-items-left justify-content-center ">
        <Card.Body>
       <h3 >{task.text} <i 
        style={{color:'red', cursor:'pointer'}} 
        onClick={()=>onDelete(task.id)}
        className="fas fa-backspace"></i>
        </h3>
       
        <p>{task.day}</p>
        </Card.Body>
        </Card>
            
        </div>
    )
}

export default Task

// {
//     id:1,
//     text:"Salon Appointment",
//     day:"Feb 2nd at 1:00pm",
//     reminder:true,
// },
// {
//     id:2,
//     text:"Doctor's Appontment",
//     day:"Feb 4th at 3:00pm",
//     reminder: true,
// },

// {
//     id:3,
//     text:"Project zoom meeting",
//     day:"Feb 7th at 11:00am",
//     reminder:false,
// },

// {
//     id:4,
//     text:"Walmart Delivery",
//     day:"Feb 10th at 6:00pm",
//     reminder:true,
// },

// {
//     id:5,
//     text:"Amazon return",
//     day:"Feb 21st at 3:00pm",
//     reminder:true,
// }