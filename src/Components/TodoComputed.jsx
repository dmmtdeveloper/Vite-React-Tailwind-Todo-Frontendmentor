import React from "react";

const TodoComputed = ({ computedItemLeft, clearComplete }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-5 py-5">
            <span className="text-gray-400 ">
                {computedItemLeft} items left
            </span>
            <button onClick={clearComplete} className="text-gray-400">
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
