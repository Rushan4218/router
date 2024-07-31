import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const RootLayout: React.FC = () => {
  const id: number = 29348723947;

  const navigate = useNavigate();
  //useNavigate()

  return (
    <div>
      <header className="header">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to={`/user/${id}`}>
          User
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export { RootLayout };
