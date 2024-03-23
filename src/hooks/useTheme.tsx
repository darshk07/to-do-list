import { useEffect, useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [currTheme, setCurrTheme] = useState<string>("light");

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setCurrTheme("dark");
} else {
      setCurrTheme("light");
    }
  }, []);

  function switchTheme() {
    const changed = currTheme === "dark" ? "light" : "dark";
    if (changed === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setCurrTheme(changed);
  }

  return { currTheme, switchTheme };
};

export default useTheme;
