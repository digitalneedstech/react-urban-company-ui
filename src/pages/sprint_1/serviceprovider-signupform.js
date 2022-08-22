import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderSignupform () {
    const [registrationType,setRegistrationType]=React.useState("0");// 0 means - Company
    function updateSelectedVal(event) {
        setRegistrationType(event.target.value);
        console.log(event.target.value);
      }
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
                                <li><a href="#"><button type="button" class="btn btn-outline-primary post-btn">LOGIN</button></a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </header>

        <section class="client-section  position-relative">
            

            <div class="login-img d-none d-md-block">
				<div class="container-fluid h-100">
					<div class="row h-100">
						<div class="col-md-5 order-sm-2 pr-0 h-100"> 
                            <img src="images/client-selector-right.svg" class="loginbg" alt="" /> 
						</div>
						<div class="col-md-7 order-sm-1"> 
						</div>
					</div>
				</div>
			</div>
 
            <div class="container min-heighvh position-relative">
               <div class="row pt-4">
                <div class="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
                    <h1>signup as a service provider</h1>
                    <h2>with <span>protocall</span></h2>


                    <div onChange={updateSelectedVal} class="row mt-4 mt-sm-4">
                        <div class="col-md-4">
                            <div class="form-group radio-input desgin-radio">
                                <input class="with-gap" value="0" checked={registrationType === "0"} type="radio" name="client-selector"  id="client1" />
                                <label for="client1" class="radio-label">Register as a company</label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group radio-input desgin-radio">
                                 <input class="with-gap" value="1" checked={registrationType === "1"} type="radio" name="client-selector"  id="client2" />
                                <label  for="client2" class="radio-label">Register as an individual</label> 
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group position-relative">
                                <img src="images/client-user.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Full name (first & last name)" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group position-relative">
                                <img src="images/client-mobile.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Mobile number" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group position-relative">
                                <img src="images/login-sms.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Email address" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group position-relative">
                                <img src="images/password-lock.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Password" />
                                <img src="images/password-eye.svg" class="paswd-eyes" alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="row mt-1">
                        <div class="col-md-5">
                            <div class="form-group">
                                <input class="filled-in" type="checkbox" value="" id="Check" />
                                <label class=" checkFrom-label" for="Check">
                                    Yes, I understand and agree to the Protocall Terms of Service, including the User Agreement and Privacy Policy .
                                </label>
                              </div>
                        </div>
                    </div>

                   <div class="row mt-2 mb-4">
                    <div class="col-md-12">
                        {
                            registrationType==0 ?
                            <a href="/ServiceproviderCompanylogo"><button type="button" class="btn btn-login">CREATE MY COMPANY</button></a>
                            :
                            <a href="/ServiceProviderIndividualsignupprofile"><button type="button" class="btn btn-login">CREATE MY COMPANY</button></a>
                        }
                    </div>
                   </div>
                   
                </div>
                 

               </div>
            </div>

           
        </section>

      </>
    );
}

export default ServiceproviderSignupform;