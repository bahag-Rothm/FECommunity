// src/App.tsx
import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App: React.FC = () => {
    const taskCount = useSelector(
        (state: RootState) => state.tasks.tasks.length
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Header count={taskCount} />
            <div className="mt-6">
                <TaskInput />
                <TaskList />
            </div>
        </div>
    );
};

export default App;
