
import React, {useEffect, useState} from 'react';
import Task from "../task";
import taskService from "../../services/taskService";

const ns = 'task-list'
const TaskList = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        taskService.getAllTasks()
        .then((result) => {
            console.log(result);
            setTasks(result);
        }).catch(()=> {
            console.log('Ocurrio un error');
        })
    }, []);
    
    return (
        <div className={`${ns}`}>
            Lista de tareas
           {tasks.map((task) => {
               return(
                <Task key={`task-${task.id}`} id={task.id} name={task.name} />
               )
           })}
        </div>
    );
};

export default TaskList;