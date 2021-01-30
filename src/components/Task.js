import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
  return (
    <div style={{animationDelay: props.animationDelay + 's'}} onDoubleClick={() => props.toggleReminder(props.task.id)} className={`task ${props.task.reminder === true ? 'reminder' : ''}`}>
      <h3>{props.task.text} <FaTimes onClick={() => props.deleteTask(props.task.id)} style={{color: 'red', cursor: 'pointer'}} /></h3>
      <p>{props.task.day}</p>
    </div>
  )
}

export default Task;
