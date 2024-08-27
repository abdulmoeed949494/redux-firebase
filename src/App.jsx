import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
// import Login from "./auth/Login";
// import Signup from "./auth/Register";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
