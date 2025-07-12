import { useContext, createContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

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
