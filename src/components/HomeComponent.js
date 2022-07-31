import React from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Home(props) {

    const skill = props.skills.map(item => {
        return (
            <>
                <div className="col-6 col-md-4 text-center" key={item.id}>
                    <img className="SkillsImage" alt="Skill Set" src={item.image}></img>
                </div>
            </>
        );
    });



    return (
        <>
            <div className="container vh-100">
                <div className="row">
                    <div className="col-12 intro text-center">
                        <h1>Hello!</h1>
                        <p className="w-40">My name is <span className="textStyle">Lorenzo</span> and I am an <span className="textStyle">Aspiring</span> front end web developer,
                            <span className="textStyle"> Passionate</span> about <span className="textStyle">Creating</span> and designing the web.
                        </p>
                       <Link to='about'><button className="btn hero-btn">Learn More</button></Link>
                    </div>
                    <div className="col-12 text-center">
                        <KeyboardArrowDownRoundedIcon className="arrBtn bounce" fontSize="large" />
                    </div>
                </div>
            </div>

            <div className="container-fuild about-section" id="about">
                <div className="row">
                    <div className="col-12 about-me">
                        <h2>About Me</h2>
                        <p className="">Aspiring Web Developer - Photographer - Tech Lover </p>
                        <p>I am a recent graduate of a full stack online progamming bootcamp learning technologies like Bootstrap, JavaScript, React, and much more!
                            I love using code to solve problems and create beautiful functioning things on the internet.
                        </p>
                    </div>
                    <div className="col text-center">
                        <a href="https://twitter.com/Renz_757" target="_blank" rel="noreferrer"><TwitterIcon className="socailIcons" fontSize="large" /></a>
                        <a href="https://github.com/Renz757" target="_blank" rel="noreferrer"><GitHubIcon className="socailIcons" fontSize="large" /></a>
                        <a href="https://www.linkedin.com/in/lorenzo-tinsley-0b8049139/" target="_blank" rel="noreferrer"><LinkedInIcon className="socailIcons" fontSize="large" /></a>
                    </div>
                </div>
            </div>

            <div className="container skills-section">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2><span className="skill">My Skills</span></h2>
                    </div>
                </div>
                <div className="row">
                    {skill}
                </div>
                <div className="row">
                    <div className="col text-center">
                        <Link to="/projects">
                            <button className="btn project-btn">View Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;