import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
  return (
    <div style={{animationDelay: props.animationDelay + 's'}} onDoubleClick={() => props.toggleReminder(props.task._id)} className={`task ${props.task.reminder === true ? 'reminder' : ''}`}>
      <h3>{props.task.text} <FaTimes onClick={() => props.deleteTask(props.task._id)} style={{color: 'red', cursor: 'pointer'}} /></h3>
      <p>Day: <span style={{color: 'white'}}>{props.task.day}</span> &nbsp;&nbsp; Time: <span style={{color: 'white'}}>{props.task.time}</span></p>
    </div>
  )
}

export default Task;
