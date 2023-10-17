import { useEffect, useState } from "react";
import MoonIcon from "./Icons/IconMoonIcon";
import IconSun from "./Icons/IconSun";

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
