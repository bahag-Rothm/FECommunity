import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    return (
        <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Task List</h3>
            <ul className="list-disc pl-5">
                {tasks.map((task, index) => (
                    <li key={index} className="text-gray-700">
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
