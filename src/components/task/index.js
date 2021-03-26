
import React from "react";

const ns = 'task'
const Task = (props) => {
    const { id, name } = props;
    return (
        <div className={`${ns}-card`}>
            {name}
        </div>
    );
};

export default Task;