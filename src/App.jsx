import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Signup from "./Components/Signup";

function App() {
  const user = useSelector(selectUser)
  return (
      <Router>
        <Routes>
          {user ? <Route path="/logout" element={<Logout />} /> :
          <Route path="/" element={<Login />} /> }
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
  );
}

export default App;













// import Login from "./Components/Login";
// import Logout from "./Components/Logout";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";

// const App = () => {
//   const user = useSelector(selectUser);
  
//   return <div> {user ? <Logout /> : <Login />} </div>
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login";
// import Logout from "./Components/Logout";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";

// function App() {
//   const user = useSelector(selectUser)
//   return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} /> */}
//           {/* <Route path="/logout" element={<Logout />} />
//           {/* <Route path="/signup" element={<Signup />} /> */}
//         </Routes>
//       </Router>
//   );
// }

// export default App;
