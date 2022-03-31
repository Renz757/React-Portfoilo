import React from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home(props) {

    const skill = props.skills.map(item => {
        return (
            <>
                <div className="col-6 text-center" key={item.id}>
                    <img className="SkillsImage" src={item.image}></img>
                </div>
            </>

        );
    });



    return (
        <>
            <div className="container vh-100">
                <div className="row">
                    <div className="col-12 intro">
                        <h1>Hello!</h1>
                        <p>My name is <span className="textStyle">Lorenzo</span> and I am an asipring front end web developer,
                            who's passionate about creating and designing the web.
                        </p>
                        <button className="btn hero-btn">Learn More</button>
                    </div>
                    <div className="col-12 text-center">
                        <KeyboardArrowDownRoundedIcon className="arrBtn" fontSize="large" />
                    </div>
                </div>
            </div>

            <div className="container-fuild about-section">
                <div className="row">
                    <div className="col-12 about-me">
                        <h2>About Me</h2>
                        <p>Asipring Web Developer - Photographer - Tech Lover </p>
                        <p>I am currently attending a full stack online progamming bootcamp learning technologies like Boostrap, JavaScript, React, etc...
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
                        <h2><span className="skill">Skills</span></h2>
                    </div>
                </div>
                <div className="row">
                    {skill}
                </div>
            </div>
        </>
    );

}

export default Home;