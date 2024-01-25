import { Link } from "react-router-dom";
import profileImg from "../shared/src-images/IMG_2399.jpg";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-12 text-off-white flex flex-col gap-y-4"
      >
        <h1 className="text-fedora text-4xl font-Lobster text-center">About</h1>

        <div className="">
          <img
            src={profileImg}
            className="w-64 h-64 rounded-full mx-auto"
            alt="profile"
          />
        </div>

        <div className="text-left">
          <p className="m-0 tracking-widern font-Quicksand text-xl">
            Hello! I'm Lorenzo, a front-end web developer with an insatiable
            curiosity for coding and a relentless drive for improvement. Over
            the last two years, my dedication has taken me on an incredible
            learning journey, culminating in a certificate from NuCamp’s
            Full-Stack Web and Mobile Development bootcamp.
          </p>

          <p className="m-0 tracking-widern font-Quicksand text-xl mt-5">
            💡 My Approach: <br></br>I thrive on problem-solving through code,
            constantly pushing my boundaries to discover innovative solutions.
            Each challenge is an opportunity to learn, and my commitment to
            continuous improvement fuels my passion for development.
          </p>

          <p className="m-0 tracking-widern font-Quicksand text-xl mt-5">
            🛠️ Hands-On Experience: <br></br> During the NuCamp bootcamp, I
            collaborated with top-notch instructors and talented peers, gaining
            practical experience in the technologies that power the modern web.
            This hands-on approach has equipped me with the skills needed to
            excel in real-world projects.
          </p>
          <p className="m-0 tracking-widern font-Quicksand text-xl mt-5">
            🌟 Beyond Coding: <br></br> Beyond the screen, I find inspiration in
            music, the serenity of nature, the art of aquascaping, and the
            thrill of anything exciting. This diverse set of interests enhances
            my creativity and brings a unique perspective to my work.
          </p>
          <p className="m-0 tracking-widern font-Quicksand text-xl mt-5">
            💼 Current Endeavor: <br></br>Currently excelling in a technical
            support analyst role and exploring the possibility of furthering my
            education in computer science, with the support of my employer. This
            strategic move aligns with my long-term goal of becoming a seasoned
            software engineer.
          </p>
          <p className="m-0 tracking-widern font-Quicksand text-xl mt-5">
            This journey has not only been about learning but about thriving in
            challenging environments and contributing meaningfully to the coding
            community. It's a testament to my passion for continuous improvement
            and my commitment to delivering exceptional results. Let's{" "}
            <Link className="no-underline text-accent-color" to="/contact">
              <span onClick={() => window.scrollTo(0, 0)}>connect </span>
            </Link>
            and build something amazing together! 🚀
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
