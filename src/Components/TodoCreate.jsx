const TodoCreate = () => {
    return (
        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 pl-5">
            <span className="inline-block h-5 w-5 rounded-full border-4"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="Create a new todo..."
            />
        </form>
    );
}

export default TodoCreate;
