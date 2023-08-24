import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import IconSun from "./icons/IconSun";
import HelpIcon from "./icons/HelpIcon";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode])

  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
          Todo
        </h1>
        <div className="flex justify-between">
          <button 
            className="mx-5"
            onMouseEnter={() => setTooltipVisible(!tooltipVisible)}
            onMouseLeave={() => setTooltipVisible(!tooltipVisible)}
          >
            <HelpIcon />
          </button>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <IconSun /> : <MoonIcon />}
          </button>
        </div>
      </div>
      <div className={`tooltip ${tooltipVisible ? '' : 'hidden'}`}>
        <div className="bg-white">
          <p>Hola!</p>
        </div>
      </div>
    </header>    
  )
}

export default Header