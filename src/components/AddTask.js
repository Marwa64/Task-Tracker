import { useState } from 'react'

const AddTask = (props) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  let animationDelay = 0;

  const onSubmit = (e) => {
      e.preventDefault();
      if (!text) {
        document.querySelector('#taskText').style.borderColor = '#cc0000';
        if (!date) {
          document.querySelector('#date').style.borderColor = '#cc0000';
        } else {
          document.querySelector('#date').style.borderColor = '#cc000000';
        }
        return
      }
      if (!date) {
        document.querySelector('#taskText').style.borderColor = '#cc000000';
        document.querySelector('#date').style.borderColor = '#cc0000';
        return
      }
      let dayTimeArr = date.split("T");
      let day = dayTimeArr[0];
      let time = dayTimeArr[1].split(".")[0];
      console.log(day + " " + time);
      props.saveTask({text, day, time, reminder});
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control' style={{animationDelay: (animationDelay = animationDelay+0.4) + 's'}} >
        <label>Task</label>
        <input id='taskText' type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control' style={{animationDelay: (animationDelay = animationDelay+0.4) + 's'}}>
        <label>Day & Time</label>
        <input id='date' type='datetime-local' value={date} onChange={(e) => setDate(e.target.value)}
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
