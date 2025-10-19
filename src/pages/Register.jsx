import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate=useNavigate()
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({...user, displayName: name, photoURL: photo});
            navigate('/')
          })
          .catch((error) => {
           console.log(error)
           setUser(user)
          });

       
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
        <h1 className="text-3xl font-bold text-center">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Email</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="your name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="photo URL"
              required
            />
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

            <label className="label">
              <input type="checkbox" className="checkbox" required />
              Accept Terms & Conditions
            </label>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p className="text-center text-accent font-semibold pt-5">
          Already Have An Account ?{" "}
          <Link to="/auth/Login" className="text-secondary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
