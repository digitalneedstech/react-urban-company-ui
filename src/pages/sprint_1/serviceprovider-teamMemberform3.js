import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderTeamMemberform3() {

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
                                                <h2>step 3: hourly rate & communication</h2>
                                            </div>
                                            <img src="images/profile-builder3.svg" alt="" />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <div class="col-md-9">
                                                <nav>
                                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                            <a class="nav-item nav-link active" href="#">
                                                                headline
                                                            </a>
                                                            <a class="nav-item nav-link active" href="#" >
                                                                skills
                                                            </a>
                                                            <a class="nav-item nav-link active" href="#" >
                                                                rate
                                                            </a>
                                                            <a class="nav-item nav-link" href="#" >
                                                                proximity
                                                            </a>
                                                        </div>
                                                    </nav>

                                                    <label for="#" class="profile-label mt-4">Specify your basic hourly rate</label>
                                                    <div class="">
                                                        <input type="email" class="form-control login-input profile-inpt" placeholder="$" />
                                                    </div>

                                                    <label for="#" class="profile-label mt-4">English level</label>
                                                    <div class=" desgin-radio">
                                                        <input class="with-gap" type="radio" name="client-selector" id="client1" />
                                                            <label for="client1" class="radio-label">Any level</label>
                                                    </div>

                                                    <div class=" desgin-radio">
                                                        <input class="with-gap" type="radio" name="client-selector" id="client2" />
                                                            <label for="client2" class="radio-label">Conversational or better</label>
                                                    </div>
                                                    <div class=" desgin-radio">
                                                        <input class="with-gap" type="radio" name="client-selector" id="client3" />
                                                            <label for="client3" class="radio-label">Fluent or better</label>
                                                    </div>
                                                    <div class=" desgin-radio">
                                                        <input class="with-gap" type="radio" name="client-selector" id="client4" />
                                                            <label for="client4" class="radio-label">Native or bilingual only</label>
                                                    </div>

                                                    <div class="row mt-4 mb-4">
                                                        <div class="col-md-12">
                                                        <a href="/ServiceproviderTeamMemberform2"><button type="button" class="btn btn-outline-primary post-btn mr-3" >BACK</button></a>
                                                            <a href="/ServiceproviderTeamMemberform4"><button type="button" class="btn btn-login " >NEXT STEP</button></a>
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

export default ServiceproviderTeamMemberform3;