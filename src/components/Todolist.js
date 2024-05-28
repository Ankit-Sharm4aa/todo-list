import React,{ useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

   function handleInputChanges(event){
       setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !==""){
            setTasks(t =>[...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=> i !==index);
        setTasks(updatedTasks)
    }
return(
        <div className="list">
            <h1 className="heading">TO-DO LIST</h1>
            <div className="add-task">
                <input type="text" placeholder="Add new.." value={newTask} onChange={handleInputChanges}></input> 
                <button className="add-button" onClick={addTask}>Add</button>       
            </div>

            <ol>
                {tasks.map((tasks,index) =>
                <li key={index}>
                    <span className="text">{tasks}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;