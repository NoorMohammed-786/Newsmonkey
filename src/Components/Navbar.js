import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          NewsMonkey
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/politics">
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/sport">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/weather">
                Weather
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
