import React, { useState, useContext } from "react";
// Assuming you have an AuthContext set up
import { AuthContext } from "./AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your authentication logic here
    setAuthUser({ username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
