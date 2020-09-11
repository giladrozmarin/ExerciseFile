import React from "react";
import './homePage.scss';


const BackgroundImagePage = () => {
    return (


        <div className="bg">


  
        
<div class="menu bar">
                <ul>
                <li><a href="#">exit</a></li>
              
                </ul>
          
                </div>    

            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            <h1 class="demo-title"></h1>

            <div class="pricing-table" style={{position:"relative"}}>
                <div class="pricing-option">
                    <i class="material-icons">important_devices</i>
                    <h1>Create Exercise File</h1>
                    <hr />
                    <p>Click here if you want to create a new exercise file.</p>
                    <hr />
                    <div class="price">
                        <div class="front">
                            <span class="price"><b></b></span>
                        </div>
                        <div class="back">
                            <a href="#" class="button">Create</a>
                        </div>
                    </div>
                </div>

                <div class="pricing-option">
                    <i class="material-icons">perm_identity</i>
                    <h1>My Files</h1>
                    <hr />
                    <p>Click here if you want to see your exercise file.</p>
                    <hr />
                    <div class="price">
                        <div class="front">
                            <span class="price"> <b></b></span>
                        </div>
                        <div class="back">
                            <a href="#" class="button">Create</a>
                        </div>
                    </div>
                </div>

                <div class="pricing-option">
                    <i class="material-icons">art_track</i>
                    <h1>Files to approve</h1>
                    <hr />
                    <p>Click here if you want to see your files to approve.</p>
                    <hr />
                    <div class="price">
                        <div class="front">
                            <span class="price"><b></b></span>
                        </div>
                        <div class="back">
                            <a href="#" class="button">Create</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rectangle"></div>
        </div>

    );
}

export default BackgroundImagePage;