import ContentHeader from './ContentHeader';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Content = (props) => {
  const [tasks, setTasks] = useState([])

  const [form, setForm] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:5000/tasks', {headers: {'auth-token' : props.token }})
    .then(res => setTasks(res.data));
  })

  const hideForm = () => {
    setForm(false);
    setHeaderButton({text: 'Add Task', onClick: displayForm});
  }

  const displayForm = () => {
    setForm(true);
    setHeaderButton({text: 'Go Back', onClick: hideForm});
  }
  const saveTask = (task) => {
    axios.post('http://localhost:5000/tasks/add', task, {headers: {'auth-token' : props.token }})
    .then(res => (res.data === "Task Added!") ? hideForm() : console.log(res.data));
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task._id !== id));
  }

  const  toggleReminder = (id) => {
    setTasks(tasks.map((task) => task._id === id ? { ...task, reminder: !task.reminder } : task));
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
