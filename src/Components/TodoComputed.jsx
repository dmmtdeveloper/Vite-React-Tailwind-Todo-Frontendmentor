import React from "react";

const TodoComputed = ({ computedItemLeft, clearComplete }) => {
    return (
        <section className=" flex justify-between rounded-b-md bg-white px-5 py-5  transition-all duration-1000 dark:bg-gray-800">
            <span className="text-gray-400 ">
                {computedItemLeft} items left
            </span>
            <button onClick={clearComplete} className="text-gray-400 ">
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
