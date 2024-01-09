import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    const addTask = (newTaskTitle, newTaskDesc) => {
        console.log("Nueva tarea, titulo:", newTaskTitle, "Descripcion:", newTaskDesc);
        let newTask = { id: +new Date(), taskTitle: newTaskTitle, taskDescription: newTaskDesc };

        setTasks([...tasks, newTask]);
    }

    const deleteTask = (idTask) => {
        console.log(idTask);

        setTasks([...tasks].filter(task => task.id !== idTask));
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            addTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}