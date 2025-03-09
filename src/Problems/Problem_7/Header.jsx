import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar navbar-expand-md navbar-light bg-white shadow-sm px-4 py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand fw-bold" to="/">MOCOM</Link>

        <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link " to="/content">Shop All</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
          </ul>
          <form className="d-flex ms-3">
            <input className="form-control me-2" type="search" placeholder="Search Product" />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;