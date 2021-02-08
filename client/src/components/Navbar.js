import React from "react"


const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src="./Assets/images/logo.png" alt="logo" className="navbar--logo" /> : null}
      <h1>Glucose Guradians</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Home</li>
      <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Track</li>
    </ul>
  </nav>
)
export default Navbar