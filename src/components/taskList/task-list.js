
import React, {useEffect} from 'react';
import Task from "../task";

const ns = 'task-list'
const TaskList = ({tasks, loadTasksAction}) => {
    useEffect(() => {
        loadTasksAction();
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
