import React from "react";
import Link from "next/link";

function TaskCard({task}){
    return(
        <Link href={`/tasks/${task._id}`}>
            <div className="bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-600">
                <h3 className="text-2xl font-bold text-center">{task.tittle}</h3>
                <p className="text-slate-250 my-3 text-justify">{task.description}</p>
                <p className="text-slate-400 font-semibold my-2 mr-1">{task.autor}</p>
                {/* <hr />
                <br /> */}
            </div>
        </Link>
        
    )
}

export default TaskCard