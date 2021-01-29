import React, {useState} from 'react'


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
       <form onSubmit={onSubmit}>
        <div>
       <lable>Task</lable>
       <input type="text" placeholder="Enter task" value={text} onChange={(e)=>setText(e.target.value)}/>
       </div>
       <div>
       <lable>Enter day and time</lable>
       <input 
       value={day} onChange={(e)=>setDay(e.target.value)}
       type="text" placeholder="Enter day & time"/>
       </div>
       <div>
       <lable>Reminder</lable>
       <input type="checkbox" 
           value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}
       />
       </div>

        <input type="submit" value="save task"/>
       </form>
    )
}

export default AddTask
