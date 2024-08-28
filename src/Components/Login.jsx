import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const createNewAccount = () => {
    navigate("/signup");
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preentDefault();

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="body">
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="emailinput pl-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="passwordinput pl-2"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginbutton">
            Login
          </button>
          <button
            type="button"
            className="logincreatebtn"
            onClick={createNewAccount}
          >
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
