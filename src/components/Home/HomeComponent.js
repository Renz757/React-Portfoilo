import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Home(props) {

    const skills = props.skills.map(item => {
        return (
            <>
                <li className="" key={item.id}>
                    <img className="w-24 h-24 mx-auto" alt="Skill Set" src={item.image}></img>
                </li>
            </>
        );
    });

    const toTop = () => {
        window.scrollTo(0, 0)
    }


    return (
        <>
            <div className="text-left h-screen p-10">
                <div className="pt-24 text-off-white">
                    <h4 className="text-accent-color font-Lobster lg:text-3xl">Hi, my name is</h4>
                    <h1 className="mt-4 text-4xl lg:text-7xl">Lorenzo Tinsley<span className="text-accent-color">.</span></h1>
                    <h2 className="tracking-wide text-fedora lg:text-4xl">Passionate about creating and designing the web</h2>
                    <p className="mt-4 font-Quicksand text-off-white text-lg">Junior front end developer looking for a role in tech.
                        Currently focusing on learning more on front end technologies like React and much more!
                    </p>
                    {/* <p className="mt-10">My name is <span className="">Lorenzo</span> and I am an <span className="">Aspiring</span> front end web developer,
                        <span className=""> Passionate</span> about <span className="">Creating</span> and designing the web.
                    </p> */}
                    <Link className="no-underline hover:no-underline hover:text-accent-color text-accent-color" to='about'><button onClick={toTop} className="mt-10 border-2 border-accent-color py-2 px-4 rounded">Learn More</button></Link>
                </div>
            </div>

            <div className="p-10 text-left text-off-white" id="about">
                <div className="">
                    <div className="flex  items-center">
                        <h2 className="text-2xl mr-3 lg:text-4xl">About Me</h2>
                        <div className="w-7/12 h-1 border-t border-accent-color grow"></div>
                    </div>

                    <p className="font-IBM text-xl text-fedora mt-4 lg:text-2xl">Aspiring Web Developer - Photographer </p>
                    <p className="font-Quicksand tracking-wide lg:text-lg">I am a recent graduate of NuCamp's full stack online progamming bootcamp learning technologies like Bootstrap, JavaScript, React, and much more!
                        I love using code to solve problems and create beautiful functioning things on the internet.
                    </p>
                </div>
                <div className="mt-10">
                    <a href="https://twitter.com/Renz_757" target="_blank" rel="noreferrer"><TwitterIcon className="w-10 h-10 mr-3 text-accent-color" fontSize="large" /></a>
                    <a href="https://github.com/Renz757" target="_blank" rel="noreferrer"><GitHubIcon className="w-10 h-10 mr-3 text-accent-color" fontSize="large" /></a>
                    <a href="https://www.linkedin.com/in/lorenzo-tinsley-0b8049139/" target="_blank" rel="noreferrer"><LinkedInIcon className="w-10 h-10 text-accent-color" fontSize="large" /></a>
                </div>
            </div>

            <div className="p-10">
                <div className="flex  items-center">
                    <div className="w-7/12 h-1 border-t border-accent-color grow"></div>
                    <h2 className="text-2xl ml-3 text-off-white">Technologies</h2>
                </div>

                <ul className="m-0 mt-5 pl-0 text-accent-color grid gap-20 grid-rows-2 grid-cols-2 items-center md:grid-rows-3 md:grid-cols-3">
                    {skills}
                </ul>

                <div className="text-center">
                    <Link className="no-underline hover:no-underline hover:text-accent-color text-accent-color" to='projects'><button onClick={toTop} className="mt-10 border-2 border-accent-color py-2 px-4 rounded">View Projects</button></Link>
                </div>
            </div>

        </>
    );

}

export default Home;