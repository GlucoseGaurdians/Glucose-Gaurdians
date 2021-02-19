import React from "react";
import "./Footer.css"

const FooterComp = () => (
  <div className="footer p-3  bg-dark text-white">
    <div className="row">
   

                       <div className="col-xs-6 col-md-6">
                         <ul className="footer-links">
                         <img src="./Images/footerlogo.png"
                               alt ="logo"
                                  width="350"
                                  height="150"
                                  className="d-inline-block"
                              />
                             
                              
                              
                          </ul>
                      </div>

                      {/* <div className="col-xs-6 col-md-3"> */}
                           <ul className="footer-links">
                           <div className="col-sm-12 col-md-6">
                     {/* <p className="text-justify footertext">The Glucose Guardians<i>is an application to track and manage your blood sugar.</i>This  </p> */}

                            <p className="copyright-text"><i>Copyright &copy; 2021 All Rights Reserved by
                            The Glucose Guardians.</i>
     </p>
                       </div>
                        
                             
                           </ul>
                        </div></div>
//   </div>
);

export default FooterComp;
    //     <div>
    //         <Footer className="site-footer footer">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-sm-12 col-md-6">
    //                         <h6>About</h6>
    //                         <p className="text-justify footertext">gifNjelly <i>IS A NETWORK TO RATE GIPHYS</i> and is up and coming in the giphy world.
    //     Join your friends and add your captions to the giphs around town.</p>

    //                         <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
    //                         gifNjelly.
    //   </p>
    //                     </div>

    //                     <div className="col-xs-6 col-md-3">
    //                         <ul className="footer-links">
    //                             <li><a href="members">Home</a></li>
    //                             <li><a href="login">Login</a></li>
    //                             <li><a href="signup">Sign Up</a></li>
    //                         </ul>
    //                     </div>

    //                     <div className="col-xs-6 col-md-3">
    //                         <ul className="footer-links">
    //                             <li><a href="meettheteam">About gifNjelly</a></li>
    //                             <li><a href="contact">Contact Us</a></li>
    //                             <li><a href="logout">Log Out</a></li>
    //                         </ul>
    //                     </div>
    //                 </div>

    //             </div>
    //         </Footer>
//     //     </div>
//     )
// }





