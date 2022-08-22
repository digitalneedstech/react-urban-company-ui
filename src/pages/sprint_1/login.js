import React from 'react';
import { Link } from "react-router-dom";

function Login () { 
    
    return (
      <>
          <header>
            <div class="container">
                <div class="tophead border-bottom">
                    <div class="row align-items-center">
                        <div class="col-md-3 col-5 moblogo">
                            <a href="/"><img src="images/Logo.svg" alt="" /></a>
                        </div>
                        <div class="col-md-9 col-7">
                            <ul class="tophead-right">
                                <li><a href="/Selector"><button type="button" class="btn btn-login">SIGNUP</button></a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </header>

        <section class="login-section position-relative">
            <div class="login-img d-none d-md-block">
				<div class="container-fluid h-100">
					<div class="row h-100">
						<div class="col-md-5 order-sm-2 pr-0 h-100"> 
                            <img src="images/login-rightimg.png" class="loginbg" alt="" /> 
						</div>
						<div class="col-md-7 order-sm-1"> 
						</div>
					</div>

				</div>
			</div>
 
            <div class="container min-heighvh position-relative">
               <div class="row pt-4">
                <div class="col-md-6 mt-2 pt-5 mt-sm-5 position-inherit">
                    <h1>login</h1>
                    <h2>to <span>protocall</span></h2>

                    <div class="row mt-1 mt-sm-4">
                        <div class="col-md-9 mt-3">
                            <div class="form-group position-relative">
                                <img src="images/login-sms.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Email address" />
                            </div>
                          
                            <div class="row mt-3 mt-sm-4">
                                <div class="col-md-7 col-7">
                                    <a href=""><button type="button" class="btn btn-login ">CONTINUE WITH EMAIL</button></a>
                                </div>
                                <div class="col-md-5 text-right col-5">
                                    <p><a href="#">Forgot Password ?</a></p>
                                </div>
                            </div>

                            <div class="row mt-2 align-items-center"> 
                                
                                <div class="col-md-1 col-2 pr-0">
                                    <h6 class="hori-line">or</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3 mt-sm-4">
                        <div class="col-md-6">
                            <a href=""><button type="button" class="btn btn-light continue-btn mb-3"><img src="images/Google-loginlogo.svg" height="22px" class="mr-2" alt="" /> Continue with Google</button></a>
                        </div>
                        <div class="col-md-6 pl-3 pl-sm-0">
                            <a href=""><button type="button" class="btn btn-light continue-btn"><img src="images/Facebook-loginlogo.svg" height="22px" class="mr-2" alt="" />Continue with Facebook</button></a>
                        </div>
                    </div>

                    <h3>© 2022. Protocall Services. All rights Reserved</h3> 
                         
                </div>
                 

               </div>
            </div>
        </section>
      </>
    );
}

export default Login;