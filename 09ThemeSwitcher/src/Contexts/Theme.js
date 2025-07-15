import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  // return useContext(ThemeProvider); // ThemeProvider is not a context, it's a component
  return useContext(ThemeContext);
}


// // This is more efficient
// export default function useTheme() {
//   return useContext(
//     createContext({
//       themeMode: "light",
//       darkTheme: () => {},
//       lightTheme: () => {}
//     })
//   )
// }
