import React from "react";
import TaskCounter from "./TaskCounter";

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4 rounded">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            <TaskCounter/>
        </header>
    );
};

export default Header;
