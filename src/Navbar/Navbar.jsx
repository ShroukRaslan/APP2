import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function Navbar() {
  return (
    
    <div className="container-fluid min-vh-100 d-flex flex-column">
      {/* Header/Navbar */}
      <nav className="navbar navbar-expand-md navbar-light ">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="src/assets/imges/nav/logo.png"
           alt="Logo" wi
           dth="30"
            height="30" className="me-2" />
         
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Become a rental</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Rinatal deals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How it work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Why choose us</a>
            </li>
          </ul>
          <div className="d-flex gap-2 m-5">
            <button className="btn btn-outline-secondary">Sign in</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="row flex-grow-1 align-items-center px-4 px-md-5 py-5">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold">
            Find, book <br />
            and rent a <br />
            car <span className="text-primary">Easily</span>
          </h1>
          <p className="mt-3 text-muted fs-6">
            Get a car wherever and whenever you need it with your IOS and Android device.
          </p>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="src/assets/imges/landing-page/car 2 1.png"
            alt="Car"
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
      </main>
    </div>
  )
}
