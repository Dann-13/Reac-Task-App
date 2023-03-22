import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("") //inicialmente el titulo sera un string vacio
  const handleSubmit = (e) =>{
    e.preventDefault()
    createTask(title)
  } //funcion que manegara el evento del formulario

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Escribe Tu Tarea" 
      onChange={(e) =>{
        setTitle(e.target.value)
      }}/>
      <button>Guardar</button>
    </form>
  );
}
export default TaskForm;
