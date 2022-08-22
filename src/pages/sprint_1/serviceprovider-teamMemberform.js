import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderTeamMemberform1 () {

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
                                            <img src="images/service-prohead-img.png" class="pro-headimg" alt="" />You are logged in as a <span>SERVICE PROVIDER COMPANY</span>
                                        </a>
                                    </li>
                                    <li class="user-picHead">
                                        <a href="#">
                                            <span><img src="images/pro-userpic.jpg" alt="" /></span>
                                            <p>Hi, MockLabs Inc.!</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="images/bell.png" alt="" />
                                            <span class="notification-numb">8</span>
                                        </a>
                                    </li>
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
                                <div class="tab-pane fade show active" >
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="client-profilehead">
                                                <h1>add team member</h1>
                                                <h2>step 1: basic profile</h2>
                                            </div>
                                            <img src="images/profilebuilder-leftimg.svg" alt="" />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <div class="col-md-9">
                                                    <nav>
                                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                            <a class="nav-item nav-link active"  href="#">
                                                                headline
                                                            </a>
                                                            <a class="nav-item nav-link"  href="#" >
                                                                skills
                                                            </a>
                                                            <a class="nav-item nav-link"  href="#" >
                                                                rate
                                                            </a>
                                                            <a class="nav-item nav-link"  href="#" >
                                                                proximity
                                                            </a>
                                                        </div>
                                                    </nav>

                                                    <label for="#" class="profile-label mt-4">Write a catchy headline</label>
                                                    <div class="">
                                                        <input type="email" class="form-control login-input profile-inpt" placeholder="Start typing here…" />
                                                    </div>
                                                    <h4 class="text-right words-text">0/100 words</h4>

                                                    <div class="border-bottom mt-3 mb-3"></div>

                                                    <div class="form-group">
                                                        <input type="email" class="form-control login-input profile-inpt" placeholder="Full name here" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" class="form-control login-input profile-inpt" placeholder="Email address" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" class="form-control login-input profile-inpt" placeholder="Phone number" />
                                                    </div>


                                                    <div class="row mt-2 mb-4 mb-sm-0">
                                                        <div class="col-md-12">
                                                            <a href="/ServiceproviderTeamMemberform2"><button type="button" class="btn btn-login mr-3" >NEXT STEP</button></a>
                                                            <button type="button" class="btn btn-outline-primary post-btn">SKIP & GO TO DASHBOARD</button>
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

export default ServiceproviderTeamMemberform1;