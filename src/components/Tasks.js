import Task from './Task'

const Tasks = (props) => {
  let animationDelay = 0;

  return (
    <>
      {props.tasks.map((task) => (<Task key={task._id} animationDelay={animationDelay+= 0.4} task={task} deleteTask={props.deleteTask} toggleReminder={props.toggleReminder} />))}
    </>
  )
}

export default Tasks;
