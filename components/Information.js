import React from 'react'

export default function Information() {
    return (
        <div>
            <img src = "./images/ProfilePic.jpg" alter = "Profile-picture" />
            <div className = "info-div">
                <h1>Khushi Patel</h1>
                <h3>Front-end Developer</h3>
                <p>Website coming soon</p>
            </div>
            <div className = "info-button">
                <a href="mailto: khushipatel3340@gmail.com" target="_blank">
                    <button className = "info-email-btn">
                        <img src = "./images/Email-logo.png" alter = "email-logo" />
                        Email
                    </button>
                </a>
                
                <a href="https://www.linkedin.com/in/khushie45/" target="_blank">
                    <button className = "info-linkedin-btn">
                        <img src = "./images/LinkedIn-logo.png" alter = "linkedIn-logo" />
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}