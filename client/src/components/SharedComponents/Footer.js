import React from "react";
import "./Footer.css"
import { Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import FooterLogo from '../../Images/footerlogo.png'


const FooterComp = () =>
// {
//   const { logout } = useAuth()
//   const history = useHistory()

//   function handleLogOut() {
//       logout()
//       history.push('/login')
//   }
(

  <div className="site-footer footer">
    <div className="container">

      <div className="dropdown">
        {['up'].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key='up'
            id={`dropdown-button-drop-${direction}`}
            drop='up'
            variant="secondary"
            title={` SiteLinks `}
          >
            <Dropdown.Item eventKey="1"><a href="/bloodsugar">Home</a></Dropdown.Item>
            <Dropdown.Item eventKey="2"><a href="/login">Login</a></Dropdown.Item>
            <Dropdown.Item eventKey="3"><a href="/signup">Sign Up</a></Dropdown.Item>
            <Dropdown.Item eventKey="4"><a href="/questions">The Glucose Guardian</a></Dropdown.Item>
            <Dropdown.Item eventKey="5"><a href="/contact">FAQ</a></Dropdown.Item>
            <Dropdown.Item eventKey="6"><a href="/login">Logout</a></Dropdown.Item>
          </DropdownButton>
        ))}
        <br></br>
        <div>
        <p className="copyright-text">Copyright &copy; The Glucose Guardian</p>
        </div>
      </div>

      <div className="row">

        <div className="col-sm-12 col-md-6">

          <img src={FooterLogo}
            alt="logo"
            width="210"
            height="90"
            className="d-inline-block"
          />

         
        </div>


        {/* <div className="col-xs-6 col-md-3">
          <ul className="footer-links">
            <li><a href="/bloodsugar">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <ul className="footer-links">
            <li><a href="/questions">The Glucose Guardian</a></li>
            <li><a href="/contact">FAQ</a></li>
            <li><a href="/login">Logout</a></li>

          </ul>
        </div> */}

      </div>

    </div>

  </div>

);


export default FooterComp;