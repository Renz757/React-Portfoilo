import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";
import { parent, child } from "../../utils/staggerAnimation";

function Home(props) {


    const toTop = () => {
        window.scrollTo(0, 0)
    }

    const skills = props.skills.map(item => {
        return (
            <>
                <motion.li variants={child} className="" key={item.id}>
                    <img className="w-24 h-24 mx-auto" alt="Skill Set" src={item.image}></img>
                </motion.li>
            </>
        );
    });

    return (
        <>
            <div className="text-left h-screen p-10">
                <motion.div
                    className="pt-24 text-off-white"
                    variants={parent}
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true }}
                >
                    <motion.h4 variants={child} className="text-accent-color font-Lobster lg:text-3xl" > Hi, my name is</motion.h4>
                    <motion.h1 variants={child} className="mt-4 text-4xl lg:text-7xl">Lorenzo Tinsley<span className="text-accent-color">.</span></motion.h1>
                    <motion.h2 variants={child} className="tracking-wide text-fedora lg:text-4xl">Passionate about creating and designing the web</motion.h2>
                    <motion.p variants={child} className="mt-4 font-Quicksand text-off-white text-lg">Junior front end developer looking for a role in tech.
                        Currently focusing on learning more on front end technologies like React and much more!
                    </motion.p>
                    <Link className="no-underline hover:no-underline hover:text-accent-color text-accent-color" to='about'><motion.button variants={child} onClick={toTop} className="mt-10 border-2 border-accent-color py-2 px-4 rounded">Learn More</motion.button></Link>
                </motion.div>
            </div>

            <motion.div
                className="p-10 text-left text-off-white" id="about"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <div className="">
                    <div className="flex items-center">
                        <h2 className="text-2xl mr-3 lg:text-4xl lg:order-2 lg:mx-7">About Me</h2>
                        <div className="h-1 border-t border-accent-color grow lg:w-auto lg:order-1 "></div>
                        <div className="hidden lg:w-auto h-1 border-t border-accent-color lg:block lg:order-3 lg:grow"></div>
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
            </motion.div>
        

            <motion.div
                className="p-10 mt-24"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <div className="flex items-center mt-12">
                    <h2 className="text-2xl mr-3 lg:text-4xl lg:order-2 lg:mx-7 text-off-white">Technologies</h2>
                    <div className="h-1 border-t border-accent-color grow lg:w-auto lg:order-1 "></div>
                    <div className="hidden lg:w-auto h-1 border-t border-accent-color lg:block lg:order-3 lg:grow"></div>
                </div>

                <motion.ul
                    variants={parent}
                    initial="hidden"
                    animate="show"
                    className="m-0 mt-5 pl-0 text-accent-color grid gap-20 grid-rows-2 grid-cols-2 items-center md:grid-rows-3 md:grid-cols-3">
                    {skills}
                </motion.ul>

                <div className="text-center">
                    <Link className="no-underline hover:no-underline hover:text-accent-color text-accent-color" to='projects'><button onClick={toTop} className="mt-10 border-2 border-accent-color py-2 px-4 rounded">View Projects</button></Link>
                </div>
            </motion.div>

        </>
    );

}

export default Home;