import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";

import { parent, child } from "../../utils/staggerAnimation";

const Projects = (props) => {
  const projectImages = props.projectImage.map((image) => {
    return (
      <>
        <motion.li variants={child} className="w-80 mx-auto">
          <a key={image.id} href={image.url} target="_blank" rel="noreferrer">
            <img
              
              alt={image.text}
              src={image.image}
            ></img>
          </a>
          <h1 className="text-fedora text-2xl font-Quicksand tracking-wide">{image.text}</h1>
          <ul className="flex gap-2 justify-start items-center">
            
            {image.technologies.map((skill) => {
              return (
                <>
                  <li className="text-off-white font-Quicksand">{skill}</li>
                </>
              );
            })}
            <div className="text-accent-color">
              <a
                href={image.github}
                alt={`Github: ${image.text}`}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </ul>
        </motion.li>
      </>
    );
  });

  return (
    <>
      <motion.ul
        variants={parent}
        initial="hidden"
        animate="show"
        className="p-16 grid gap-y-10 md:gap-x-10 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3"
      >
        {projectImages}
      </motion.ul>
    </>
  );
};

export default Projects;
