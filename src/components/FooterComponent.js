import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {

    const toTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className="text-center mt-10 pb-10 lg:flex lg:p-7 lg:items-center lg:gap-x-10">
                <div className="flex justify-center gap-x-5">
                    <a href="https://twitter.com/Renz_757" target="_blank" rel="noreferrer"><TwitterIcon className="w-10 h-10 text-accent-color" fontSize="medium" /></a>
                    <a href="https://github.com/Renz757" target="_blank" rel="noreferrer"><GitHubIcon className="w-10 h-10 text-accent-color" fontSize="medium" /></a>
                    <a href="https://www.linkedin.com/in/lorenzo-tinsley" target="_blank" rel="noreferrer"><LinkedInIcon className="w-10 h-10 text-accent-color" fontSize="medium" /></a>
                </div>
                

                <ul className="mt-4 p-0 flex flex-col gap-y-3 lg:mt-0 lg:flex-row gap-x-3 text-off-white">
                    <li onClick={toTop}><Link className="no-underline hover:text-accent-color lg:text-xl" to="home">Home</Link></li>
                    <li onClick={toTop}><Link className="no-underline hover:text-accent-color lg:text-xl" to="projects">Projects</Link></li>
                    <li onClick={toTop}><Link className="no-underline hover:text-accent-color lg:text-xl" to="about">About</Link></li>
                    <li onClick={toTop}><Link className="no-underline hover:text-accent-color lg:text-xl" to="contact">Contact</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Footer;