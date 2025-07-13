import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}

// // this is more efficient
// export default function useTheme() {
//   return useContext(
//     createContext({
//       themeMode: "light",
//       darkTheme: () => {},
//       lightTheme: () => {},
//     }).Provider
//   );
// }
