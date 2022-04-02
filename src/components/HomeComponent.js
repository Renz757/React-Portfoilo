import React from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home(props) {

    const skill = props.skills.map(item => {
        return (
            <>
                <div className="col-6 col-md-4 text-center" key={item.id}>
                    <img className="SkillsImage" alt="skill Set" src={item.image}></img>
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
                        <p className="w-40">My name is <span className="textStyle">Lorenzo</span> and I am an <span className="textStyle">asipring</span> front end web developer,
                            who's <span className="textStyle">passionate</span> about <span className="textStyle">creating</span> and designing the web.
                        </p>
                        <button className="btn hero-btn">Learn More</button>
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
                        <p>Asipring Web Developer - Photographer - Tech Lover </p>
                        <p>I am currently attending a full stack online progamming bootcamp learning technologies like Bootstrap, JavaScript, React, and much more!
                            I love using code to solve problems and create beatiful functioning things on the internet.
                        </p>
                    </div>
                    <div className="col text-center">
                        <TwitterIcon className="socailIcons" fontSize="large" />
                        <GitHubIcon className="socailIcons" fontSize="large" />
                        <LinkedInIcon className="socailIcons" fontSize="large" />
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
                        <button className="btn project-btn">View Projects</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;