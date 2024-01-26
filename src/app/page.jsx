import { connectDB } from "../utils/mongoose";
import Task from "/src/models/Task.js"
import TaskCard from "/src/components/TaskCard"


async function loadTasks(){
  connectDB()
  const tasks = await Task.find()
  return tasks
}

async function Homepage(){
  const tasks = await loadTasks()
  loadTasks()
  return(
    <div className="grid grid-cols-3 gap-2">
      {tasks.map(task => (
      <TaskCard task={task} key={task._id}/>

      
      ))}
      </div>
  )
}

export default Homepage