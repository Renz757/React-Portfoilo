import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import profileImg from '../shared/src-images/profile-image.jpg'

function About() {

    return (
        <>
            <div className='aboutSection'>
                <h1>About Lorenzo</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <div className="profilePictureContainer">
                            <img src={profileImg} className="profilePicture" alt='profile'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <p className="aboutTxt">I enjoy solving problems using code and strive to improve and learn new things everyday. Aside from programming, I have a deep love for music, nature, aquascaping, cars, and anything else that’s exciting!
                            <br></br>
                            <br></br>
                            I have a certificate in NuCamp’s Full-Stack Web and Mobile Development bootcamp. There I learned technologies like SCSS, Bootstrap, Javascript,  Git/Github, React, React-Native, Redux, MongoDB, Express, and NodeJs.
                            I had an amazing opportunity to work along side NuCamp’s instructors and my peers throughout the bootcamp. This is a start to a never-ending journey and I am excited to learn and see my growth over the course of time. I am currently seeking a position as a Junior Front End Web Developer. Feel free to <Link className="contact-link" to="/contact">contact</Link> me to discuss opportunities if you’re interested and definitely contact me if you wish to say hi!</p>
                    </Grid>
                </Grid>

            </div>
        </>
    );
}

export default About;