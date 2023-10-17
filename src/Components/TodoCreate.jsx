import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");
    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        setTitle("");

        if (!title.trim()) {
            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 pl-5 transition-all duration-1000 dark:bg-gray-800"
        >
            <span className=" inline-block h-6 w-6 rounded-full border-2  transition-all duration-1000 dark:border-gray-700"></span>
            <input
                className=" w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
