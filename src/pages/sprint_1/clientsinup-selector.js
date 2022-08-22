import React from 'react';
import { Link } from "react-router-dom";

function Selector () { 
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
                                <li><a href="/login"><button type="button" class="btn btn-outline-primary post-btn">LOGIN</button></a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </header>

        <section class="client-section  position-relative">
            <div class="client-wave-left">
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
                    <h1>signup</h1>
                    <h2>with <span>protocall as a</span></h2>

                    <div class="row mt-4 mt-sm-5">
                        <div class="col-md-4 mb-3" onChange={updateSelectedVal}>
                            <div class="client-radio">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-check mt-3 desgin-radio">
                                            <input class="with-gap" value="0" checked={registrationType === "0"} type="radio" name="client-selector"  id="client1" />
                                            <label for="client1"></label>
                                          </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-5 col-6">
                                          <p>Client</p>
                                          <h6>I want to post a new project</h6>
                                    </div>
                                    <div class="col-md-7 col-6">
                                        <img src="images/teams-manright.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" onChange={updateSelectedVal}>
                            <div class="client-radio">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-check desgin-radio mt-3">
                                            <input class="with-gap" value="1" checked={registrationType === "1"} type="radio" name="client-selector"  id="client2" />
                                            <label  for="client2"></label>
                                          </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-5 col-6">
                                          <p>Service provider</p>
                                          <h6>I want to bid for a project</h6>
                                    </div>
                                    <div class="col-md-7 col-6">
                                        <img src="images/teams-womenleft.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>

                   <div class="row mt-3 mt-sm-2">
                       
                    <div class="col-md-12">
                    {
                            registrationType==0 ?
                            <a href="/Clientsignupform"><button type="button" class="btn btn-login">CONTINUE AS A CLIENT</button></a>
                            :
                            <a href="/ServiceproviderSignupform"><button type="button" class="btn btn-login">CONTINUE AS A SERVICE PROVIDER</button></a>
                        }
                    </div>
                   </div>


                  

                   

                    
                    <h3>© 2022. Protocall Services. All rights Reserved</h3> 
                         

                    

                </div>
                 

               </div>
            </div>
            </div>
        </section>
         

      </>
    );
}

export default Selector;