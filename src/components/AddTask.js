import { useState } from 'react'

const AddTask = (props) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  let animationDelay = 0;

  const onSubmit = (e) => {
      e.preventDefault();
      if (!text) {
        alert('Please add the task');
        return
      }
      if (!day) {
        alert('Please add the day');
        return
      }
      props.saveTask({text, day, reminder});
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control' style={{animationDelay: (animationDelay = animationDelay+0.4) + 's'}} >
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control' style={{animationDelay: (animationDelay = animationDelay+0.4) + 's'}}>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check' style={{animationDelay: (animationDelay = animationDelay+0.4) + 's'}}>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn' id="submit" style={{animationDelay: (animationDelay = animationDelay+0.4) + 's'}}/>
    </form>
  )
}

export default AddTask;
