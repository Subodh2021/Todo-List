import { useState } from "react";
import React from "react";



function Todosir () {
    const [tasks1,setTasks1] = useState([
        {
            id: 1,
            title: "Attend meeting",
            status: 0,
        },
        {
            id: 2,
            title: "Do laundry",
            status: 1,
        },
        {
            id: 3,
            title: "Bring medicine",
            status: 1,
        },
        {
            id: 4,
            title: "Do Dancing",
            status: Math.floor(Math.random() * (100 - 15 + 1)) + 15,
        }
    ]);
    const deleteit=(id)=>{
        console.log(id);
        console.log(tasks1);
        setTasks((a) => {
            return a.filter((b, index) => {
                return index !== id;
            })
        })
        console.log(tasks1)
    }
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState(tasks1);

    const changeStatus = (index) => {
        console.log(index);
        let newTasks = [...tasks];
        newTasks[index].status = !newTasks[index].status;
        setTasks(newTasks)
    }

    const save =()=> {
        setTasks([...tasks, task]);
        setTask({});
        console.log(tasks1)
    }
    const editit=(id)=>{
        console.log(id);
        console.log();
    }

    return (
        <div>
            <h3>Status:</h3>
            <input onChange={(e)=>{setTask({id:0, title:e.target.value, status:0})}} value={task.title} />
            <button onClick={()=>save()}>Submit</button>
            <ul>
                {tasks.map((item, index) => {
                    return (
                        <li style={{ textDecoration: (item.status ? "line-through" : "") }} onClick={() => { setTask(item)}}>
                            {index + 1} - {item.title} <button onClick={() => { changeStatus(index) }}> Completed</button><button onClick={()=>deleteit(index)}>delete</button><button style={{color:"blue"}}onClick={()=>editit(index)}>Edit</button>
                        </li>  
                    );
                })}
            </ul>
        </div>
    );
}
export default Todosir;