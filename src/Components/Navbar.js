import React from 'react'

function Navbar({setCategory}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="badge text-bg-secondary bg-light text-dark fs-5">Tech-News</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav pe-auto">
              <li className="nav-item">
                <a className="nav-link pe-auto" style={{ cursor: 'pointer' }} onClick={() => setCategory("technology")}>Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setCategory("business")}>Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setCategory("health")}>Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setCategory("sports")}>Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setCategory("entertainment")}>Entertainment</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
