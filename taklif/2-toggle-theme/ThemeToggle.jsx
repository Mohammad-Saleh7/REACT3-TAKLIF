import { useState } from "react";
import "./app.css";

export default function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    <div className={`app ${darkTheme ? "dark-theme" : "light-theme"}`}>
      <h1>Theme App</h1>
      <p>{darkTheme ? "light" : "dark"}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
