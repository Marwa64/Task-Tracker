import ContentHeader from './ContentHeader';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { useState } from 'react';
import axios from 'axios';

const Content = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 4:30pm',
      reminder: false
    }
  ])

  const [form, setForm] = useState(false);

  const hideForm = () => {
    setForm(false);
    setHeaderButton({text: 'Add Task', onClick: displayForm});
  }

  const displayForm = () => {
    setForm(true);
    setHeaderButton({text: 'Go Back', onClick: hideForm});
  }
  const saveTask = (task) => {
    const email = 'marwa@hotmail.com';
    const newTask = {email, ...task};
    console.log(newTask);
    axios.post('http://localhost:5000/tasks/add', newTask)
    .then(res => (res.data === "Task Added!") ? hideForm() : console.log(res.data));
    //setTasks([...tasks, newTask]);
    //hideForm();
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const  toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  const [headerButton, setHeaderButton] = useState({text: 'Add Task', onClick: displayForm});

  return (
    <>
    <ContentHeader headerButton = {headerButton}/>
    <div className="container">
        {form === false ? tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : 'No tasks yet, add one!' : <AddTask saveTask={saveTask}/>}
    </div>
    <br/><br/><br/>
    </>
  );
}

export default Content;
