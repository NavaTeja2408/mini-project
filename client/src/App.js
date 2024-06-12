import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Navigate, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import { useContext } from "react";
import { UserContext } from "./utils/Context";

function App() {
  const { authUser } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-gradient-to-b from-grayTop to-grayBottom">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to="/Admin" /> : <Home />}
        />
        <Route
          path="/Admin"
          element={authUser ? <Admin /> : <Navigate to="/" />}
        />

        <Route path="/sucess" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
