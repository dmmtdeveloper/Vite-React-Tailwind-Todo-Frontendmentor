import IconCheck from "./Icons/IconCheck.jsx";
import CrossIcon from "./Icons/IconCrossIcon.jsx";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b transition-all duration-1000 dark:border-b-gray-600">
            <button
                className={` dark:border-1 h-6 w-6 rounded-full border-2 transition-all duration-1000  dark:border-gray-600 ${
                    completed
                        ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>

            <p
                className={`grow text-gray-500 transition-all duration-1000 dark:text-gray-300 ${
                    completed && "line-through"
                }`}
            >
                {title}
            </p>
            <button onClick={() => removeTodo(id)} className="flex-none">
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
