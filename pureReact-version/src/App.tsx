import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import Header from "./components/Header";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Header count={tasks.length} />
            <div className="mt-6">
                <TaskInput addTask={addTask} />
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
};

export default App;
