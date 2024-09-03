import React from "react";

interface TaskListProps {
    tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
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

export default TaskList;
