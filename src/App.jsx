import { useEffect, useState } from "react";
import Header from "./Components/Header";
import TodoComputed from "./Components/TodoComputed";
import TodoCreate from "./Components/TodoCreate";
import TodoFilter from "./Components/TodoFilter";
import TodoList from "./Components/TodoList";

// const initialStateTodo = [
//     {
//         id: 1,
//         title: "Go to the gym",
//         completed: true,
//     },
//     {
//         id: 2,
//         title: "Complete online course",
//         completed: false,
//     },
//     {
//         id: 3,
//         title: "10 minutes meditation",
//         completed: true,
//     },
//     {
//         id: 4,
//         title: "Pick up groceries",
//         completed: false,
//     },

//     {
//         id: 5,
//         title: "Complete task frontendmentor",
//         completed: false,
//     },
// ];

const initialStateTodo = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])
    

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemLeft = todos.filter((todo) => !todo.completed).length;

    const clearComplete = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setfilter] = useState("all");

    const changeFilter = (filter) => setfilter(filter);

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat  transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('src/assets/images/bg-mobile-dark.jpg')] md:bg-[url('src/assets/images/bg-desktop-dark.jpg')] ">
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filterTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed
                    computedItemLeft={computedItemLeft}
                    clearComplete={clearComplete}
                />

                <TodoFilter changeFilter={changeFilter} />
            </main>

            <footer className="mt-8 text-center font-medium text-gray-500">
                Drag and drop reader list
            </footer>
        </div>
    );
};

export default App;
