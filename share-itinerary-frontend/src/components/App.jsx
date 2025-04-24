import { useState } from "react";
import NavComp from "./NavComp";
import NavRoutes from "../router/routes";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <NextUIProvider navigate={navigate}>
      <main
        className={`text-foreground bg-background ${
          isDarkMode ? "dark" : ""
        } h-screen flex flex-col`}
      >
        <NavComp className="flex-shrink-0" toggleDarkMode={toggleDarkMode} />
        <div className="flex-grow overflow-hidden">
          <NavRoutes />
        </div>
      </main>
    </NextUIProvider>
  );
}

export default App;
