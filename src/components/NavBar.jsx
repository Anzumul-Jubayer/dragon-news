import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
 
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('LogOut Successful')
      })
      .catch((error) => {
       console.log(error)
      });
  };
  return (
    <div className="flex justify-between item-center">
      <div>{user && user.email}</div>
      <div className="flex  gap-3 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img src={`${user?user.photoURL:userIcon}`} alt="" className="w-12 rounded-full" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-primary px-10">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
