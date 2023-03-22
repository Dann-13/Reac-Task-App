import TaskList from "./TaskList";
import TaskForm from "./TaskForm"
import { tasks as data } from "./tasks";
import { useEffect, useState } from "react";
function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(taskTitle){
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description:"Algo nuevo"
    }]) //copia todas las tareas y añadele una nueva tarea
  }
  return (
    <div>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}
export default App;
