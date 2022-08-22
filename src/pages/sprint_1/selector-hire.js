import React from 'react';
import { Link } from "react-router-dom";

function Selectorhire () { 
    
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
                                <li class="client-loginHead d-none d-sm-block">
                                    <a href="#"><img src="images/pro-headimg.png" class="pro-headimg" alt="" />You are logged in as a <span>CLIENT</span>
                                    </a>
                                </li>
                                <li class="user-picHead">
                                    <a href="#">
                                        <span><img src="images/pro-userpic.jpg" alt="" /></span>
                                        <p>Hi, Vinod !</p>
                                    </a>
                                </li>
                                <li><a href="#"><img src="images/bell.png" alt="" /></a></li>
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
                   <h1>howdy, Vinod !</h1>
                   <h2>welcome to <span>protocall</span></h2>

                   <h4>what do you want to do today ?</h4>

                   <div class="row mt-2 mt-sm-3">
                       <div class="col-md-4 mb-3">
                           <div class="client-radio">
                               <div class="row">
                                   <div class="col-md-12">
                                       <div class="form-check mt-3 desgin-radio">
                                           <input class="with-gap" type="radio" name="client-selector"  id="client1" />
                                           <label for="client1"></label>
                                         </div>
                                   </div>
                               </div>
                               <div class="row">
                                   <div class="col-md-5 col-6">
                                      
                                         <p>Hire</p>
                                         <h6>I want to post a project and hire a service provider</h6>
                                   </div>
                                   <div class="col-md-7 col-6">
                                       <img src="images/Hire-left.png" alt="" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="client-radio">
                               <div class="row">
                                   <div class="col-md-12">
                                       <div class="form-check desgin-radio mt-3">
                                           <input class="with-gap" type="radio" name="client-selector"  id="client2" />
                                           <label  for="client2"></label>
                                         </div>
                                   </div>
                               </div>
                               <div class="row">
                                   <div class="col-md-5 col-6">
                                         <p>Browse</p>
                                         <h6>I just want to browse and buy services</h6>
                                   </div>
                                   <div class="col-md-7 col-6">
                                       <img src="images/Hire-right.png" alt="" />
                                   </div>
                               </div>
                           </div>
                       </div>
                  </div>

                  <div class="row mt-3 mt-sm-2 mb-4">
                   <div class="col-md-12">
                       <button type="button" class="btn btn-login ">CONTINUE AS A CLIENT</button>
                   </div>
                  </div>


                 

                  


                        

                   

               </div>
                

              </div>
           </div>
          
       </section>
         

      </>
    );
}

export default Selectorhire;