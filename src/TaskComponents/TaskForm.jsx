import "./taskFormStyle.css"
import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext";


export function TaskForm() {

    const [taskInputTitle, setTaskInputTitle] = useState("");
    const [taskInputDesc, setTaskInputDesc] = useState("");

    const { addTask } = useContext(TaskContext);


    const handleInputTitle = (e) => {
        setTaskInputTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskInputTitle !== "" && taskInputDesc !== "") {
            addTask(taskInputTitle, taskInputDesc);
            setTaskInputTitle("");
            setTaskInputDesc("");
        }
    }

    const handleInputDesc = (e) => {
        setTaskInputDesc(e.target.value)
    }


    return (
        <div className="card">
            <h2>Nueva Tarea</h2>
            <form id="taskForm" onSubmit={handleSubmit}>
                <label htmlFor="taskName">Nombre de la Tarea:</label>
                <input type="text" id="taskName" name="taskName" onChange={handleInputTitle} value={taskInputTitle} />

                <label htmlFor="taskDescription">Descripción:</label>
                <textarea id="taskDescription" name="taskDescription" onChange={handleInputDesc} value={taskInputDesc}></textarea>

                <button type="submit" className="taskForm-button create">Crear Tarea</button>
            </form>
        </div>
    )
}