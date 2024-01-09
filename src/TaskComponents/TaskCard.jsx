import { TaskContext } from "../context/TaskContext";
import "./cardStyle.css"
import { useState, useContext } from "react"


export function TaskCard({ id, title, description, initialIsCompleted }) {

    const [isCompleted, setIsCompleted] = useState(initialIsCompleted);

    const { deleteTask } = useContext(TaskContext);

    const handleComplete = () => {
        setIsCompleted(!isCompleted)
    }

    const handleDelete = () => {
        deleteTask(id)
    }

    const buttonTextComplete = isCompleted
        ? "Editar"
        : "Completar"

    const titleClassName = isCompleted
        ? "taskTitle complete"
        : "taskTitle edit"

    return (
        <div className="card">
            <h2 className={titleClassName}>Tarea Pendiente</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="taskCard-button complete" onClick={handleComplete}>
                {buttonTextComplete}
            </button>
            <button className="taskCard-button delete" onClick={handleDelete}>Borrar</button>
        </div>
    )
}