import React from "react";

interface TaskCounterProps {
    count: number;
}

const TaskCounter: React.FC<TaskCounterProps> = ({ count }) => (
    <h3>Total Tasks: {count}</h3>
);

export default TaskCounter;
