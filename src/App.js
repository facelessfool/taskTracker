import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [showAdd, setShowAdd]=useState(false)


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

    //add task
    const addTask=({text,day,reminder})=>{
      const id= Math.floor(Math.random() * 10000)+1
      const newTask={id,text,day,reminder}
      setTasks([...tasks,newTask])
    }

    //to delete task: 

    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=> task.id !==id))
    }
    const onAdd=()=>{
      setShowAdd(!showAdd)
    }
    
  return (
    <div className="App" style={{backgroundColor:"#304352"}}>
     
      <Header onAdd={onAdd} showAdd={showAdd}/>
      {showAdd && <AddTask  onAdd={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask}/>:'No task to display'}
  
    </div>
  );
}


export default App;
