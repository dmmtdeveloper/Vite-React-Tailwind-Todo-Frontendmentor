const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mt-8">
            <div className="flex justify-center gap-16 rounded-md bg-white p-4 px-4 transition-all duration-1000 dark:bg-gray-800">
                <button
                    onClick={() => changeFilter("all")}
                    className={`font-semibold ${
                        filter === "all"
                            ? " text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => changeFilter("active")}
                    className={`font-semibold ${
                        filter === "active"
                            ? " text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                >
                    Active
                </button>
                <button
                    onClick={() => changeFilter("completed")}
                    className={`font-semibold ${
                        filter === "completed"
                            ? " text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
