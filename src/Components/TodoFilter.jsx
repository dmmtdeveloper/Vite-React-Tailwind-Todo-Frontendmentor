import React from "react";

const TodoFilter = () => {
    return (
        <section className="container mt-8">
            <div className="flex justify-center gap-16 rounded-md bg-white p-4 px-4">
                <button className="font-semibold text-blue-600">All</button>
                <button className="font-semibold hover:text-blue-600">
                    Active
                </button>
                <button className="font-semibold hover:text-blue-600">
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
