import React, { useState } from "react";

export function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center justify-center">
      {/* <span className="mr-2">Dark Theme</span> */}
      <button
        className={`${
          isDarkTheme ? "bg-primary" : "bg-textPrimary"
        } flex h-6 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none`}
        onClick={toggleTheme}
      >
        <span
          className={`${
            isDarkTheme ? "translate-x-8" : "translate-x-1"
          } inline-block h-5 w-5 transform rounded-full bg-tertionary shadow-lg transition-transform duration-300`}
        ></span>
      </button>
      {/* <span className="ml-2">Light Theme</span> */}
    </div>
  );
}
