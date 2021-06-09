import {useState} from 'react'
import Button from './Button'
const AddTask = ({onAddTask}) => {
    const [TaskData, setTaskData] = useState({
        text:'', day:'', reminder:false
    })

    const submitTask = (e) => {
        e.preventDefault()

        if(TaskData.task === ''){
            alert('Enter task'); 
            return ;  
        }

        onAddTask(TaskData)
        //clear the data
        setTaskData({text:'', day:'', reminder:false})
    }

    return (
        <form className="add-form" onSubmit={submitTask}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input 
                    type="text" 
                    placeholder="Add new task" 
                    name="text" 
                    value={TaskData.text}
                    onChange={(e) => setTaskData({...TaskData,text:e.target.value})} />
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input 
                    type="text" 
                    placeholder="Choose date and time" 
                    name="day" 
                    value={TaskData.day}
                    onChange={(e) => setTaskData({...TaskData,day:e.target.value})} />
            </div>
            <div className="form-control form-control-check" >
                <label htmlFor="reminder">Set Reminder</label>
                <input 
                    type="checkbox"  
                    id="reminder" 
                    name="reminder" 
                    checked={TaskData.reminder}
                    onChange={(e) => setTaskData({...TaskData,reminder:e.currentTarget.checked})}/>
            </div>
            <Button styler='btn-block' bgColor='#d35400' textColor='#FFF' text="Save Task" />
        </form>
    )
}

export default AddTask
