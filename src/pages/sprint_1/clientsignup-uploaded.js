import React from 'react';
import { Link } from "react-router-dom";

function ClientsignupUploaded () { 
    
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
                                        <p>Hi, {localStorage.getItem("user")} !</p>
                                    </a>
                                </li>
                                <li><a href="#"><img src="images/bell.png" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="client-profile ">
            <div class="container">
                <div class="row  pt-4">
                    <div class="col-md-8 mt-2 pt-5 mt-sm-5">
                        <div class="client-profilehead">
                            <h1>profile image</h1>
                            <h2>upload your profile image</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <img src="images/profile-welcome.svg" alt="" />
                    </div>
                    <div class="col-md-6">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <label for="#" class="profile-label">Upload / browse profile image</label>
                                <div class="">
                                    <input type="email" class="form-control login-input profile-inpt" placeholder="profile_img.jpg" />
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
                                <div class="row mt-4 mb-4">
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

export default ClientsignupUploaded;