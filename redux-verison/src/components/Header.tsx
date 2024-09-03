import React from "react";
import TaskCounter from "./TaskCounter";

interface HeaderProps {
    count: number;
}

const Header: React.FC<HeaderProps> = ({ count }) => (
    <header className="bg-blue-600 text-white p-4 rounded">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <TaskCounter count={count} />
    </header>
);

export default Header;
