import React from 'react'
import Task from './Task'

const Tasks = ({tasks,onRemove,onToggle}) => {
    return (
        <>
            {tasks.map((task)=> {
                return <Task  
                    key={task.id} 
                    task={task} 
                    onRemove={onRemove} 
                    onToggle={onToggle} 
                />
            })}
        </>
    )
}

export default Tasks
