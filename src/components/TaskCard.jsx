import React from "react";


function TaskCard({task}){
    return(
        <div className="bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-600">
            <h3>{task.tittle}</h3>
            <p>{task.description}</p>
            <p> Autor: {task.autor}</p>
            {/* <hr />
            <br /> */}
        </div>
    )
}

export default TaskCard