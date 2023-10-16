import CrossIcon from "./Components/Icon/CrossIcon";
import MoonIcon from "./Components/Icon/MoonIcon";

const App = () => {
    return (
        <div className=" min-h-screen bg-gray-300 bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        todo
                    </h1>
                    <button>
                        <MoonIcon className="fill-white" />
                    </button>
                </div>

                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 pl-4">
                    <span className="inline-block h-5 w-5 rounded-full border-4"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new todo..."
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white [&>article]:p-5">
                    <article className="flex gap-4 border-b">
                        <button className="inline-block h-5 w-5 rounded-full border-4"></button>
                        <p className="grow text-gray-500">
                            Complete online javascrip course
                        </p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 border-b">
                        <button className="inline-block h-5 w-5 rounded-full border-4"></button>
                        <p className="grow text-gray-500">
                            Complete online javascrip course
                        </p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 border-b">
                        <button className="inline-block h-5 w-5 rounded-full border-4"></button>
                        <p className="grow text-gray-500">
                            Complete online javascrip course
                        </p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between px-4 py-4">
                        <span className="text-gray-400 ">5 items left</span>
                        <button className="text-gray-400">
                            Clear Completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mt-8">
                <div className="mx-4 flex justify-center gap-16 rounded-md bg-white p-4 px-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="mt-8 text-center">Drag and drop reader list</p>
        </div>
    );
};

export default App;
