import "./App.css";
import Controller from "./Components/Controller";
import ThemeSetter from "./Components/ThemeSetter";
import ThemeContext from "./Contexts/ThemeContext";
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("default");
  console.log(theme)

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Controller></Controller>
      <ThemeSetter></ThemeSetter>
    </ThemeContext.Provider>
  )
}

export default App;
