import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
	return (
		<>
			<div>
				Hello There, Howdy ho ?
			</div>
			<UserContextProvider>
				<Login />
				<Profile />
			</UserContextProvider>
		</>
	);
}

export default App;
