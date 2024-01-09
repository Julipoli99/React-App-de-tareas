import "./App.css"
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export function AppTask() {
    return (
        <>
            <div className="form">
                <TaskForm />
            </div>
            <TaskList />
        </>
    )
}