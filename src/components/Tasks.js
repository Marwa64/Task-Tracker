import Button from './Button'

const Tasks = (props) => {

  const onClick = () => {
    console.log("click");
  }
  return (
    <>
      <div className='tasksContainer'>
        {props.tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
      </div>
      <Button text="Add" onClick={onClick}/>
    </>
  )
}

export default Tasks;
