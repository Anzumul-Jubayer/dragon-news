import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const LogIn = () => {
  const { logIn, setUser } = use(AuthContext);
  const [error,setError]=useState("")
  const location = useLocation();
  const navigate = useNavigate();
 
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    logIn(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
       setError(errorCode)
        // ..
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8 ">
        <h1 className="text-3xl font-bold text-center">Login your account</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
        </form>
        <p className="text-center text-accent font-semibold pt-5">
          Dont’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-secondary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
