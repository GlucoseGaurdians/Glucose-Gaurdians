import React from "react";
import "./Footer.css"
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import FooterLogo from '../../Images/footerlogo.png'
import login from "../authComponents/Login"

export default function FooterComp() {
  const { logout } = useAuth()
  const history = useHistory()

  function handleLogOut() {
      logout()
      history.push('/login')
  }

  return (

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
            title={` Site Links `}
          >
           
            <p><a href="/questions">FAQ</a></p>
            <p><a href="/Contact">Contact Us</a></p>
            <p><a   onClick={handleLogOut} href="/login">Logout</a></p>
          
           
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


       

      </div>

    </div>

  </div>

)
}


