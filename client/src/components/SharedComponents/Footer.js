import React from "react";
import "./Footer.css"
import { Button } from 'react-bootstrap'
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
    <div className="row">
      <div className="col-sm-12 col-md-6">
      
        <img src={FooterLogo}
                               alt ="logo"
                                  width="210"
                                  height="90"
                                  className="d-inline-block"
                              /> 
<p className="copyright-text">Copyright &copy; The Glucose Guardian
        </p>
        
      </div>

      <div className="col-xs-6 col-md-3">
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
      </div>
    </div>
  </div>
</div>
);


export default FooterComp;





// }





