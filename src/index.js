// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/login";
import AddQuote from "./components/add-quote/add-quote";
// import QuotesList from "./components/QuotesList";
import AuthContextProvider, { useAuth } from "./context/AuthContext";

// A wrapper component that redirects to login if the user is not authenticated
function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Assuming you're using AuthContext to manage auth state
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/add-quote"
            element={
              <PrivateRoute>
                <AddQuote />
              </PrivateRoute>
            }
          />
          <Route
            path="/quotes-list"
            element={<PrivateRoute>{/* <QuotesList /> */}</PrivateRoute>}
          />
          <Route
            path="/"
            element={<Navigate to="/login" />} // Redirect to /login if user accesses the root
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
