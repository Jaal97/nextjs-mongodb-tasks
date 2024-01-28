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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 ">
      {tasks.map(task => (
      <TaskCard className="" task={task} key={task._id} />

      
      ))}
      </div>
  )
}

export default Homepage