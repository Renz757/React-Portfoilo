import { Link } from "react-router-dom";
import profileImg from '../shared/src-images/profile-image.jpg'

import { motion } from "framer-motion";

const About = () => {

    return (
        <div className="container mx-auto">
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2}}
                className='p-12 text-off-white flex flex-col gap-y-4'
            >
                <h1 className="text-fedora text-4xl font-Lobster text-center">About</h1>


                <div className="">
                    <img src={profileImg} className="w-64 h-64 rounded-full mx-auto" alt='profile' />
                </div>

                <div className="text-left">
                    <p className="m-0 tracking-widern font-Quicksand text-xl">I enjoy solving problems using code and strive to improve and learn new things everyday. Aside from programming, I have a deep love for music, nature, aquascaping, cars, and anything else that’s exciting!

                        I have a certificate in NuCamp’s Full-Stack Web and Mobile Development bootcamp. There I learned technologies like SCSS, Bootstrap, Javascript,  Git/Github, React, React-Native, Redux, MongoDB, Express, and NodeJs.
                        I had an amazing opportunity to work along side NuCamp’s instructors and my peers throughout the bootcamp. This is a start to a never-ending journey and I am excited to learn and see my growth over the course of time. I am currently seeking a position as a Junior Front End Web Developer. Feel free to <Link className="no-underline text-accent-color" to="/contact"><span onClick={() => window.scrollTo(0, 0)}>contact</span></Link> me to discuss opportunities if you’re interested and definitely contact me if you wish to say hi!</p>
                </div>
            </motion.div>
        </div>
    );
}

export default About;