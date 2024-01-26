"use client"
import { ChangeEvent, FormEvent} from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function FormPage(){
    const [newTask, setNewTask] = useState({
        tittle: "",
        description: "",
        autor: ""
    });

    const router = useRouter()

    const createTask = async () => {
       try {
            const res = await fetch('/api/tasks/',{
                method: "POST",
                body: JSON.stringify(newTask),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (res.status == 200){
                router.push('/')
                // router.refresh()
                
            }
            console.log(data)
       } catch (error) {
        
       }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log(newTask)
        await createTask()
        // const res = await fetch('/api/tasks/',{
        //     method: "POST",
        //     body: JSON.stringify(newTask)
        // })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        setNewTask({... newTask, [e.target.name]: e.target.value})
    }


    return(
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <h1 className="font-bold text-3xl">
                    Create Task
                </h1>
                <input 
                    type="text" 
                    name="tittle" 
                    placeholder="Title" 
                    id="" 
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange} 
                />
                <textarea 
                    name="description"
                    rows={3} 
                    id="" 
                    placeholder="Descripcion" 
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4" 
                    onChange={handleChange} 
                ></textarea>
                <input 
                    type="text" 
                    name="autor" 
                    placeholder="Autor" 
                    id="" 
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4" 
                    onChange={handleChange} 
                />
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg" >
                    Save
                </button>
            </form>
        </div>
    )
}

export default FormPage