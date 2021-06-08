import React from "react";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Hello, I'm Hayden
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://docs.google.com/document/d/10HvmDd7pAeAJbiQbveTuQE3MQie4pSnfS4p0id9BwWU/edit"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
