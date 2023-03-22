
function TaskList({tasks}) {

  if (tasks.length === 0) {
    return <div>NO hay tareas</div>;
  } else {
    return (
      <div>
        {tasks.map((task) => (
          <div key = {task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;
