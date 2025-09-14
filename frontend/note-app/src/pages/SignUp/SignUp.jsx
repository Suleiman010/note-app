import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { validateEmail } from "../../utils/helpers";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("please enter a valid email password");
      return;
    }
    if (!name) {
      setError("please enter a vaild name");
      return;
    }
    if (!password) {
      setError("please enter a password");
      return;
    }
    setError("");
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border border-gray-300 rounded bg-white px-7 py-10">
          <form onSubmit={handleSignIn}>
            <h4 className="text-2xl mb-7 text-center font-medium uppercase">
              Sign in
            </h4>
            <input
              type="text"
              placeholder="name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            {error && (
              <p className="text-red-500 text-sm text-center my-1">{error}</p>
            )}
            <button className="btn-primary">Sign in</button>
            <p className="text-sm text-center mt-4">
              Already have an account{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 underline"
              >
                Login to Your account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
