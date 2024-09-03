import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

import Header from "./components/Header";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-blue-100 p-6">
            <Header />
            <div className="mt-6">
                <TaskInput />
                <TaskList />
            </div>
        </div>
    );
};

export default App;
