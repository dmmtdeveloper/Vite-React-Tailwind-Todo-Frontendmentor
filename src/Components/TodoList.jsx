import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white dark:bg-gray-900 [&>article]:p-5">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
