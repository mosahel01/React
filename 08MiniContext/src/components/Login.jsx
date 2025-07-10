import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // setUser came through UserContext()

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username, password });
    // alert("Hello");
    // console.log(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
