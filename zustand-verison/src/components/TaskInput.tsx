import React, { useState } from "react";
import useTaskStore from "../stores/useTaskStore";

const TaskInput: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const addTask = useTaskStore((state) => state.addTask);

    const handleAddTask = () => {
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue("");
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Add a new task"
            />
            <button
                onClick={handleAddTask}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskInput;
