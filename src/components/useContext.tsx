import { createContext, useContext } from "react";

const themeContext = createContext("dark");

const theme = useContext(themeContext);

export { theme };
