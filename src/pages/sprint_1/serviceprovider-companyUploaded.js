import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderCompanyuploaded () { 
    
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
                    <div class="col-md-8 mt-2 pt-5 mt-sm-5">
                        <div class="client-profilehead">
                            <h1>company logo</h1>
                            <h2>upload your logo here</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <img src="images/company-logoleftimg.svg" alt="" />
                    </div>
                    <div class="col-md-6">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <label for="#" class="profile-label">Upload / browse logo</label>
                                <div class="">
                                    <input type="email" class="form-control login-input profile-inpt" placeholder="logo.png" />
                                    <div class="upload-btn-wrapper">
                                        <button class="uploadBtn">
                                            BROWSE
                                        </button>
                                        <input type="file" />
                                    </div>
                                </div>

                                <div class="border-bottom"></div>
                                <div class="profile-content">
                                    <div class="row mt-3 mt-sm-3">
                                        <div class="col-md-12">
                                            <img src="images/pro-userpic.jpg" class="user-uploadimg" alt="" />
                                            <img src="images/close-square.svg" class="cross-img" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4 mb-4 mb-sm-0">
                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-login ">FINISH ACCOUNT SETUP</button>
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

export default ServiceproviderCompanyuploaded;