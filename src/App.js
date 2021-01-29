import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";



function App() {

  const [tasks,setTasks]=useState([

    {
        id:1,
        text:"Salon Appointment",
        day:"Feb 2nd at 1:00pm",
        reminder:true,
    },
    {
        id:2,
        text:"Doctor's Appontment",
        day:"Feb 4th at 3:00pm",
        reminder: true,
    },

    {
        id:3,
        text:"Project zoom meeting",
        day:"Feb 7th at 11:00am",
        reminder:false,
    },

    {
        id:4,
        text:"Walmart Delivery",
        day:"Feb 10th at 6:00pm",
        reminder:true,
    },

    {
        id:5,
        text:"Amazon return",
        day:"Feb 21st at 3:00pm",
        reminder:true,
    }




]
    )

    //to delete task: 

    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=> task.id !==id))
    }
  return (
    <div className="App">
      Hi there!
      <Header />
      <AddTask/>
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask}/>:'No task to display'}
  
    </div>
  );
}


export default App;
