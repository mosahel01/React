import "./App.css";
import { useState, useEffect } from "react";
import ThemeProvider from "./Contexts/Theme";
import ThemeBtn from "./Component/ThemeBtn";
import Card from "./Component/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Change in Theme with JS
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap item-center min-h-screen">
        <div className="w-full">
          <div className="w-full max-w-sm  mx-auto flex justify-center mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm  mx-auto ">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
