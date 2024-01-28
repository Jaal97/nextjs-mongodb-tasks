"use client"
import { ChangeEvent, FormEvent, useEffect} from "react";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";


function FormPage(){
    const [newTask, setNewTask] = useState({
        tittle: "",
        description: "",
        autor: ""
    });

    const router = useRouter()

    //Para los parametros que llegan por la URL
    const params = useParams()


    const getTask = async () => {
        const res = await fetch(`/api/tasks/${params.id}`)
        const data = await res.json()
        setNewTask({
            tittle: data.tittle,
            description: data.description,
            autor: data.autor
        })
    }


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
                router.refresh()
                
            }
            console.log(data)
       } catch (error) {
        
       }
    }


    const updateTask = async () => {
       try {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(newTask),
                headers:{
                    "Content-Type": "application/json",
                }
            })
        const data = await res.json();
        router.push('/')
        router.refresh()
       } catch (error) {
            console.log(error)
       }

    };


    const handleDelete = async () => {
        if(
            window.confirm("¿Estas seguro de eliminar esta tarea?"))
            {
                try {
                    const res = await fetch(`/api/tasks/${params.id}`, { 
                        method: "DELETE"
                    })
                    router.push('/')
                    router.refresh()
                } catch (error) {
                    console.log(error)
                }
            }
        
    };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if(!params.id){
            await createTask()
        }else{
            updateTask()
        }
        



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

    //Comprobar que al momento de cargar este componente vengan sus parametros
    useEffect(() =>{
        
        if(params.id){
            getTask()
        }

    }, [])

    return(
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <header
                    className="flex justify-between"
                >
                <h1 className="font-bold text-3xl">
                    {
                        params.id ? "Editar Tarea" : "Crear Tarea"
                    }
                </h1>

                <button
                    type="button"
                    className="bg-red-500 px-3 py-1 rounded-md"
                    onClick={handleDelete}
                    hidden
                    
                >
                    
                    Delete
                </button>

                </header>
                <input 
                    type="text" 
                    name="tittle" 
                    placeholder="Title" 
                    id="" 
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange} 
                    value={newTask.tittle}
                />
                <textarea 
                    name="description"
                    rows={3} 
                    id="" 
                    placeholder="Descripcion" 
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4" 
                    onChange={handleChange} 
                    value={newTask.description}
                ></textarea>
                <input 
                    type="text" 
                    name="autor" 
                    placeholder="Autor" 
                    id="" 
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4" 
                    onChange={handleChange} 
                    value={newTask.autor}
                />
                <button
                    type="submit" 
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg" >
                    {
                        !params.id ? "Save" : "Update"
                    }
                </button>
            </form>
        </div>
    )
}

export default FormPage