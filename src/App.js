import React, { useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TestPage from './components/TestPage'
import TestPage2 from './components/TestPage2'

import './App.css'
import Skeleton from '@yisheng90/react-loading';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [loader, setloader] = useState(true)
  const [tasks, setTasks] = useState([])
  const title = 'Task Tracker';
  // const versionNo = 1.0;

  useEffect(() => {
    const getTask = async () => {
      const getData = await fetchTasks()
      setloader(false)
      setTasks(getData)
    }

    getTask()
  }, [])

  // fetch task
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    let data = await res.json(res)
    return data
  }

  //get Single task to update
  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    let data = await res.json(res)
    return data
  }

  //Add Task
  const addTask = async(task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(task)
    })

    let data = await res.json()
    setTasks([...tasks,data])

    //FOR static based data
    //generate ID based on last array id
    // let incrementalIdGenerator = tasks.slice(-1)[0];
    // // incrementalIdGenerator = incrementalIdGenerator.id + 1
    // //random ID generate
    // const id = Math.floor(Math.random() * 1000) + 1;
    // //adding id to the task data
    // const addNewTask = {id,...task};
    // //set to the tasks arrays
    // setTasks([...tasks,addNewTask])
  }

  //Remove Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
      {method:'DELETE'}
    )

    setTasks(tasks.filter(task => task.id !== id)) 
    console.log('deleted',id);
  }

  //Toggle Reminder
  const toggleReminder = async(id) => {
    const getSigleTask = await fetchTask(id)
    const taskData = {...getSigleTask,reminder:!getSigleTask.reminder}
    const editedTask = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type' :'application/json'
      },
      body:JSON.stringify(taskData)
    })

    let data = await editedTask.json()

    setTasks(tasks.map(task => 
      task.id === id ? {...task,reminder:data.reminder} : task
    ))

    //For Static data
    // console.log(id);
    // setTasks(tasks.map(task => task.id === id ? 
    // {...task,reminder:!task.reminder}    
    //   :
    // task
    // ))
  }

  return (
    
    <Router>
    <div className="container">
          <Route path="/" exact render={() => (
            <>
            <TestPage /> 
            <Header title={title} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
              {/* Passing props */}
              {/* <Header title={title} versionNo={versionNo} /> */}
              {showAddTask && <AddTask onAddTask={addTask} />  }
              {/* we can pass whatever attribute we want to in the components */}
              {loader ? 
                  <Skeleton height={80} row={tasks.length} />
                :
                tasks.length  ?  
                (
                  <Tasks 
                    tasks={tasks} 
                    onRemove={deleteTask}
                    onToggle={toggleReminder}
                  /> 
                )
                : 
                (<p>No Task Enter new task</p>) 
              }
              
              </>
          )}/>
          <Route path='/testPage2'  component={TestPage2} />
    </div>
    </Router>
  )
}
export default App;