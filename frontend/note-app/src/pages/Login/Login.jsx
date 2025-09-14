import React, { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { validateEmail } from "../../utils/helpers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("please enter a valid Email");
      return;
    }
    if (!password) {
      setError("please enter your password");
      return;
    }
  };
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border border-gray-300 rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7 text-center font-medium uppercase">
              Login
            </h4>

            <input
              type="email"
              placeholder="email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-center pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm mt-4 text-center">
              Not rigisterd yet{"  "}
              <Link
                to="/sign-up"
                className="text-green-600 hover:text-green-700 underline"
              >
                create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
