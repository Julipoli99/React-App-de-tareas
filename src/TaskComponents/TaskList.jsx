import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { TaskCard } from "./TaskCard";

export function TaskList() {
    const { tasks } = useContext(TaskContext);

    console.log(tasks);

    return (

        <section className="taskList">
            {
                tasks.map(task => {
                    const { id, taskTitle, taskDescription } = task;
                    return (
                        <div className="taskCard" key={id}>
                            <TaskCard
                                id={id}
                                title={taskTitle}
                                description={taskDescription}
                                initialIsCompleted={false}
                            >
                            </TaskCard>
                        </div>
                    )
                })
            }
        </section>

    )

}