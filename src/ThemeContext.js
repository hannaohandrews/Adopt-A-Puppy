import { createContext } from "react";

//sticking a hook inside of context
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
