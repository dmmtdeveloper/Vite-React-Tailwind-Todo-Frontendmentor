import Header from "./Components/Header";
import TodoComputed from "./Components/TodoComputed";
import TodoCreate from "./Components/TodoCreate";
import TodoFilter from "./Components/TodoFilter";
import TodoList from "./Components/TodoList";

const App = () => {
    return (
        <div className=" min-h-screen bg-gray-300 bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoCreate />

                <TodoList />

                <TodoComputed />

                <TodoFilter/>
            </main>

            <footer className="mt-8 text-center font-medium text-gray-500">
                Drag and drop reader list
            </footer>
        </div>
    );
};

export default App;
