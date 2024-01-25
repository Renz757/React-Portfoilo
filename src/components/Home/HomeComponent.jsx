import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { parent, child } from "../../utils/staggerAnimation";

function Home(props) {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const skills = props.skills.map((item) => {
    return (
      <>
        <motion.li variants={child} className="" key={item.id}>
          <img
            className="w-24 h-24 mx-auto"
            alt="Skill Set"
            src={item.image}
          ></img>
        </motion.li>
      </>
    );
  });

  return (
    <div className="container mx-auto ">
      <div className="text-left h-screen p-10">
        <motion.div
          className="pt-16 text-off-white"
          variants={parent}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          <motion.h4
            variants={child}
            className="text-accent-color font-Lobster lg:text-3xl text-2xl"
          >
            {" "}
            Hi, my name is
          </motion.h4>
          <motion.h1 variants={child} className="mt-4 text-5xl lg:text-7xl">
            Lorenzo Tinsley<span className="text-accent-color">.</span>
          </motion.h1>
          <motion.h2
            variants={child}
            className="tracking-wide text-fedora lg:text-4xl text-2xl"
          >
            Passionate about creating and designing the web
          </motion.h2>
          <motion.p
            variants={child}
            className="mt-4 font-Quicksand text-off-white lg:text-2xl text-xl"
          >
            Self-driven web developer on an exciting journey of continuous
            growth and exploration in the ever-evolving tech landscape. My focus
            revolves around mastering cutting-edge front-end technologies, with
            a particular emphasis on React and other dynamic frameworks.
          </motion.p>
          <Link
            className="no-underline hover:no-underline hover:text-accent-color text-accent-color"
            to="about"
          >
            <motion.button
              variants={child}
              onClick={toTop}
              className="mt-10 border-2 border-accent-color py-2 px-4 rounded font-Quicksand"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>


      <motion.div
        className="p-10 mt-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mt-12">
          <h2 className="text-2xl mr-3 lg:text-4xl lg:order-2 lg:mx-7 text-off-white">
            Technologies
          </h2>
          <div className="h-1 border-t border-accent-color grow lg:w-auto lg:order-1 "></div>
          <div className="hidden lg:w-auto h-1 border-t border-accent-color lg:block lg:order-3 lg:grow"></div>
        </div>

        <motion.ul
          variants={parent}
          initial="hidden"
          animate="show"
          className="mt-10 pl-0 text-accent-color grid gap-20 grid-rows-2 grid-cols-2 items-center md:grid-rows-3 md:grid-cols-3"
        >
          {skills}
        </motion.ul>

        <div className="text-center">
          <Link
            className="no-underline hover:no-underline hover:text-accent-color text-accent-color"
            to="projects"
          >
            <button
              onClick={toTop}
              className="mt-10 border-2 border-accent-color py-2 px-4 rounded"
            >
              View Projects
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
