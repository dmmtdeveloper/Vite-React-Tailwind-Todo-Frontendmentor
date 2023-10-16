import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, removetodo, updateTodo }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-5">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removetodo={removetodo} updateTodo={updateTodo}/>
            ))}
        </div>
    );
};

export default TodoList;
