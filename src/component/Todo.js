import React, { useState } from 'react';
import './Todo.css';
const AddTask = ({addTask}) =>{
    const[add,updateValue]= useState("");
const handleSubmit = e=> {
    e.preventDefault();
    if(add !=="")
    {
        addTask(add)
        updateValue("");
    }
};
    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={add}
            placeholder='Enter Your Task To Do'
            onChange={e => updateValue(e.target.value)}
            />  
            <button type='submit'>Add</button>
        </form>
    );
};

function Todo() {
    const addTask =title => setTasks([...tasks,{title}]);
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: false
        },
        {
            title: "Hav some Coffee",
            completed: false
        },
        {
            title: "Find Your Sneaks",
            completed: true
        }
        
         
    ]);
    const tgTask = index => {
        const newTask = [...tasks];
        if (newTask[index].completed) {
            newTask[index].completed = false;
        }
        else {
            newTask[index].completed = true;
        }
        setTasks(newTask);
   
    }
    let removeTask = index =>{
        const newTask = [...tasks];
        newTask.splice(index,1);
        setTasks(newTask);

    }
    
    return (
        <div id='hed'>
            <h1>Pending tasks</h1>
            {tasks.map((task, index) => (
                <div id='klj'>
                <div id='nms'>
                    
                     {/* {index} */}
                    <span onClick={() => tgTask(index)} className={task.completed ? "tasks-name completed-tasks" : "tasks-name"}>
                    {task.title}
                       
                    </span>
                    <button onClick={() => removeTask(index)}>Delete</button>
                </div>
                </div>
            ))}
            <AddTask addTask={addTask}/>    

        </div>
    );
}
export default Todo;
