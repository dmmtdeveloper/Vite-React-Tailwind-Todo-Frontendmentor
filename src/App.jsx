const App = () => {
    return (
        <div className=" bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
            <header className="container mx-auto px-4 ">

                <div className="flex justify-between">
                <h1 className="font-semibold uppercase tracking-[0.2em] text-white">todo</h1>
                <button className="text-white">luna</button>
                </div>

                <form action="">
                    <input type="text" placeholder="Create a new todo" />
                </form>
            </header>

            <main className="container mx-auto px-4">
                <article className="">
                    <button>circulo</button>
                    <p>Complete online javascrip course</p>
                    <button>X</button>
                </article>

                <article className="">
                    <button>circulo</button>
                    <p>Complete online javascrip course</p>
                    <button>X</button>
                </article>

                <article className="">
                    <button>circulo</button>
                    <p>Complete online javascrip course</p>
                    <button>X</button>
                </article>

                <section>
                    <span>5 items left</span>
                    <button>Clear Completed</button>
                </section>
            </main>

            <section className="container mx-auto px-4">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </section>

            <p className="text-center">Drag and drop reader list</p>
        </div>
    );
};

export default App;
