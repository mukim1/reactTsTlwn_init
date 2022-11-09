import React, { useEffect, useState } from "react";
import { handleThemeChange } from "../../utils/utils";

const Topbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("bg-gray-900")
      handleThemeChange(true);
      setDark(true);
    } else {
      document.body.classList.add("bg-blue-50");
    }
  }, []);

  const toggleLight = () => {
    setDark((p) => (handleThemeChange(!p), !p));
  };

  return (
    <div className="fixed top-0 w-full z-10 bg-white dark:bg-gray-800 dark:text-white shadow-sm">
      <div className="h-16 max-w-screen-lg mx-auto flex justify-between items-center">
        <h3 className="font-semibold text-lg">HISTORY EVENT</h3>
        <span
          onClick={() => toggleLight()}
          className="cursor-pointer text-2xl"
        >
          {dark ? <span>&#9728;</span> : <span>☪</span>}
        </span>
      </div>
    </div>
  );
};

export default Topbar;
