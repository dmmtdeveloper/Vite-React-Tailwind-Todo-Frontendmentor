import CrossIcon from "./Icons/CrossIcon.jsx";
const TodoList = () => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-5">
            <article className="flex gap-4 border-b">
                <button className="my-auto inline-block h-5 w-5 rounded-full border-4"></button>
                <p className="grow text-gray-500">
                    Complete online javascrip course
                </p>
                <button>
                    <CrossIcon />
                </button>
            </article>

            <article className="flex gap-4 border-b">
                <button className="my-auto inline-block h-5 w-5 rounded-full border-4"></button>
                <p className="grow text-gray-500">
                    Complete online javascrip course
                </p>
                <button>
                    <CrossIcon />
                </button>
            </article>

            <article className="flex gap-4 border-b">
                <button className="my-auto inline-block h-5 w-5 rounded-full border-4"></button>
                <p className="grow text-gray-500">
                    Complete online javascrip course
                </p>
                <button>
                    <CrossIcon />
                </button>
            </article>
        </div>
    );
};

export default TodoList;
