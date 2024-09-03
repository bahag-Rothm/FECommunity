import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const TaskInput: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (inputValue.trim()) {
            dispatch(addTask(inputValue));
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
