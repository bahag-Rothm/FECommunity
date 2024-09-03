import React, { useState } from "react";

interface TaskInputProps {
    addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [inputValue, setInputValue] = useState<string>("");

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
