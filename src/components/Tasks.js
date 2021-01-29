import Button from './Button'
import Task from './Task'

const Tasks = (props) => {
  let animationDelay = 0.5;

  const onClick = () => {
    console.log("click");
  }
  return (
    <>
      <div className='tasksContainer'>
        {props.tasks.map((task) => (<Task key={task.id} animationDelay={animationDelay+= 0.5} task={task} deleteTask={props.deleteTask} toggleReminder={props.toggleReminder} />))}
      </div>
      <Button text="Add" onClick={onClick}/>
    </>
  )
}

export default Tasks;
