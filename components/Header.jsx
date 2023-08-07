import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import IconSun from "./icons/IconSun";

const Header = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <MoonIcon />}
        </button>
      </div>
    </header>    
  )
}

export default Header