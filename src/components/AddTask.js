import React, {useState} from 'react'
import Card from "react-bootstrap/Card";

const AddTask = ({onAdd}) => {

    const [text, setText]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setReminder]=useState(false)

    
const onSubmit=(e)=>{
    e.preventDefault()

    if(!text){
        alert("please add task")
        return
    }

    onAdd({text,day,reminder})

}

    return (
       <form style={{marginBottom:'5%'}} onSubmit={onSubmit}>
       <Card style={{ width: '28rem', marginLeft:"20%" }} className="d-flex align-items-center justify-content-center">
       <Card.Body>
        <div>
       <lable>Task:</lable>
       <input style={{marginLeft:"5%"}} type="text" placeholder="task" value={text} onChange={(e)=>setText(e.target.value)}/>
       </div>
       <div>
       <lable>Enter day and time:</lable>
       <input 
       value={day} onChange={(e)=>setDay(e.target.value)}
       type="text" placeholder="day & time"/>
       </div>
       <div>
       <lable>Reminder</lable>
       <input type="checkbox" 
           value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}
       />
       </div>

        <input style={{ marginTop:"3%",color:"white", backgroundColor:"#51229c"}} type="submit" value="save task"/>
        </Card.Body>
        </Card>
       </form>
    )
}

export default AddTask
