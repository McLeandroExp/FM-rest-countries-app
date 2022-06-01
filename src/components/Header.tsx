import { useEffect, useState } from "react";

export const Header = () => {
  const DARK = "dark";
  const LIGHT = "light";
  const [theme, setTheme] = useState(DARK);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
      setTheme(DARK);
    } else {
      document.body.classList.remove("dark");
      setTheme(LIGHT);
    }
  }, []);

  return (
    <header className="flex bg-White dark:bg-Dark-Blue px-4  py-8 justify-between shadow-lg">
      <h1 className="lg:text-2xl font-extrabold dark:font-semibold">Where in the world ? </h1>
      <div
        className="flex justify-around gap-x-4 cursor-pointer"
        onClick={() => {
          localStorage.setItem("theme", theme === DARK ? LIGHT : DARK);
          document.body.classList.toggle(DARK)
          setTheme((darkState) => (darkState === DARK ? LIGHT : DARK));
        }}
      >
        <span>{theme === DARK ? "☀️" : "🌙"}</span>
        <span className="lg:text-xl">{theme === DARK ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </header>
  );
};
