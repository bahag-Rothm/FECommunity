import React from "react";
import useTaskStore from "../stores/useTaskStore";
const TaskCounter: React.FC = () => {
    const taskCount = useTaskStore((state) => state.tasks.length);
    return <p className="mt-2">Total Tasks: {taskCount}</p>;
};

export default TaskCounter;
