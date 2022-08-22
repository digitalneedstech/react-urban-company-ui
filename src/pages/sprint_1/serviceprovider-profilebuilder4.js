import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderProfilebuilder4 () { 
    
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
                                    <a href="#">
                                        <img src="images/service-prohead-img.png" alt="" />You are logged in as a  <span>SERVICE PROVIDER</span></a>
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
        <section class="client-profile">
            <div class="container">
                <div class="row pt-4">
                    <div class="col-md-12 mt-2 pt-5 mt-sm-5"> 
                       
                          <div class="tab-content" >
                          <div class="tab-pane fade show active">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <div class="client-profilehead">
                                            <h1>profile builder</h1>
                                            <h2>step 4: your location & proximity</h2>
                                        </div>
                                        <img src="images/profile-builder4.svg" alt="" />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row justify-content-center">
                                            <div class="col-md-9">
                                                <nav>
                                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                      <a class="nav-item nav-link active"  href="#">
                                                        headline 
                                                      </a>
                                                      <a class="nav-item nav-link active"  href="#">
                                                        skills
                                                      </a>
                                                      <a class="nav-item nav-link active"  href="#">
                                                        rate
                                                      </a>
                                                      <a class="nav-item nav-link active"  href="#">
                                                        proximity
                                                      </a>
                                                    </div>
                                                  </nav>

                                                  <label for="#" class="profile-label mt-4 mb-0">Select the locations you want to serve in</label>
                                                  <div class="row align-items-center">
                                                    <div class="col-md-1 pr-0 col-1"><img src="images/profileBuilder-gps.svg" alt="" /></div>
                                                    <div class="col-md-10  col-10 pl-0">
                                                        <span class="profile-buildergps">Detect my current location</span>
                                                    </div>
                                                  </div>
                                                  <div class="form-group position-relative mt-3">
                                                    <img src="images/profileBuilder-location.svg" class="login-smsimg" alt="" />
                                                    <input type="email" class="form-control login-input" placeholder="Search location" />
                                                </div>

                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3182688614693!2d77.39455371691349!3d28.50007064897341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce86095555555%3A0x70cfc1465b1bc159!2sStaqo%20World%20Private%20Ltd!5e0!3m2!1sen!2sin!4v1649843153429!5m2!1sen!2sin"
                                                class="iframecontact-map"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                <h4 class="words-text">Adjust proximity radius</h4>

                                             

                                                <input id="feedback" data-slider-id='ex1Slider' type="text" data-slider-min="0"
                                                 data-slider-max="20" data-slider-step="1" data-slider-value="10" />
                                                <h4 class="words-text text-center">25mi.</h4>
                                                           
                                                    <div class="row mt-4 mb-4">
                                                    <div class="col-md-12">
                                                        <a href="/ServiceproviderProfilebuilder3"><button type="button" class="btn btn-outline-primary post-btn mr-3" >BACK</button></a>
                                                        <button type="button" class="btn btn-login " >GO TO DASHBOARD</button>
                                                    </div>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                          </div>


                    </div> 
                   
                </div>

            </div>
        </section>

      </>
    );
}

export default ServiceproviderProfilebuilder4;