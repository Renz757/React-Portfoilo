import { motion } from "framer-motion";

import { parent, child } from "../utils/staggerAnimation";

const Projects = (props) => {

    const projectImages = props.projectImage.map(image => {
        return (
            <>
                <motion.li 
                    variants={child}    
                >
                    <a key={image.id} href={image.url} target="_blank" rel="noreferrer">
                        <img className="w-80 mx-auto" alt={image.text} src={image.image}></img>
                    </a>
                </motion.li>
            </>
        );
    })

    return (
        <>
            <motion.ul
                variants={parent}
                initial="hidden"
                animate="show"
                className='p-16 grid gap-y-10 md:gap-x-10 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3'
            >
                {projectImages}
            </motion.ul>
        </>
    );
}

export default Projects;