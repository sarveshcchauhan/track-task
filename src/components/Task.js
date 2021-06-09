import React from 'react'
import {FaTimes,FaRegClock} from 'react-icons/fa'
const Task = ({task,onRemove,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} >
            <h3>{task.text} 
                {/* while using id we can create a function or we can create a anonumoyus function */}
                <span>
                    <FaRegClock onClick={() => onToggle(task.id)} />
                    <FaTimes style={red} onClick={() => onRemove(task.id)} />
                </span>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

const red = {
    color:'red'
}

const green = {
    color:'green'
}

export default Task
