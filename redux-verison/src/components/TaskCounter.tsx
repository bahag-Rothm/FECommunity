import React from "react";

interface TaskCounterProps {
    count: number;
}

const TaskCounter: React.FC<TaskCounterProps> = ({ count }) => (
    <p className="mt-2">Total Tasks: {count}</p>
);

export default TaskCounter;
