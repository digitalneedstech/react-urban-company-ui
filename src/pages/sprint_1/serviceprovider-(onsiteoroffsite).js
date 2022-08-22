import React from 'react';
import { Link } from "react-router-dom";

function ServiceprovicerOnsiteOffsite () { 
    
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
                                <li class="client-loginHead d-none d-sm-block"><a href="#"><img src="images/service-prohead-img.png" class="pro-headimg" alt="" />You are logged in as a <span>CLIENT</span></a></li>
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

                   <h4>you are best suited for ?</h4>

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
                                         <p>Onsite</p>
                                         <h6>Projects related to handyman or similar services, eg: plumber, carpenter etc.</h6>
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
                                   <div class="col-md-5  col-6">
                                         <p>Offsite</p>
                                         <h6>Projects related to online service, eg: coding, editing, designing etc.</h6>
                                   </div>
                                   <div class="col-md-7 col-6">
                                       <img src="images/Hire-right.png" alt="" />
                                   </div>
                               </div>
                           </div>
                       </div>
                  </div>

                  <div class="row mt-3 mt-sm-2 mb-4 mb-sm-0">
                   <div class="col-md-12">
                       <a href="/ServiceproviderProfilebuilder1"><button type="button" class="btn btn-login ">CONTINUE BUILDING YOUR PROFILE</button></a>
                   </div>
                  </div>


               </div>
                

              </div>
           </div>
          
       </section>
         

      </>
    );
}

export default ServiceprovicerOnsiteOffsite;