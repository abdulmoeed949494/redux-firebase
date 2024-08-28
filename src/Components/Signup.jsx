import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Signup = () => {
    const [sname, setSname] = useState("")
    const [semail, setSemail] = useState("")
    const [spassword, setSpassword] = useState("")

    const dispatch = useDispatch()

  return (
    <div className="body">
      <div className="form-container">
        <form 
        //   onSubmit={(e) => handleSubmit(e)}
          >
          <input
            className="nameinput pl-2"
            type="name"
            placeholder="Name"
            value={sname}
            onChange={(e) => setSname(e.target.value)}
          />
          <input
            className="emailinput pl-2"
            type="email"
            placeholder="Email"
            value={semail}
            onChange={(e) => setSemail(e.target.value)}
          />
          <input
            className="passwordinput pl-2"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={spassword}
            onChange={(e) => setSpassword(e.target.value)}
          />
          <button type="submit" className="loginbutton">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
