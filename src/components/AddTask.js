import React from 'react'

const AddTask = () => {
    return (
       <form>
        <div>
       <lable>Task</lable>
       <input type="text" placeholder="Enter task"/>
       </div>
       <div>
       <lable>Enter day and time</lable>
       <input type="text" placeholder="Enter day & time"/>
       </div>
       <div>
       <lable>Reminder</lable>
       <input type="checkbox" />
       </div>

        <input type="submit" value="save task"/>
       </form>
    )
}

export default AddTask
