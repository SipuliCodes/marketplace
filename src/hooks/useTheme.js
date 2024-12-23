import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      }

      return window.matchMedia("(prefers-colors-scheme: dark)").matches ? "dark" : "light";
    })

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return [theme, toggleTheme]
}

export default useTheme;