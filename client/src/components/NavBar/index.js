import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border fixed-top">
      <section className="container">
        <a className="d-flex navbar-brand fs-2 fw-bold p-2"> Google Book Search</a>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <section className="collapse navbar-collapse" id="navbarSupportedContent">

          <section className="navbar-nav ms-auto">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >Search </Link>
            <Link
              to="/saved"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >Saved </Link>



          </section>
        </section>
      </section>
    </nav>

  )
}

export default Navbar;
