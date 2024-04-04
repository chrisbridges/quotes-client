import React, { useState, useContext } from "react";
// Assuming you have an AuthContext set up
import { AuthContextProvider } from "../../context/AuthContext";
import styles from "./Login.module.css"; // Importing CSS module

function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const { setAuthUser } = useContext(AuthContextProvider);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your authentication logic here
    // setAuthUser({ username });
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="text"
          placeholder="Username"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.loginButton}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
