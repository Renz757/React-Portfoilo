import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <div className="container-fuild footer-section">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <ul className="d-md-flex align-middle footer-link-parent">
                            <li><Link className="footer-link" to="home">Home</Link></li>
                            <li><Link className="footer-link" to="projects">Projects</Link></li>
                            <li><Link className="footer-link" to="about">About</Link></li>
                            <li><Link className="footer-link" to="contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4 icon-group align-middle">
                        <a href="https://twitter.com/Renz_757" target="_blank" rel="noreferrer"><TwitterIcon className="footer-icon" fontSize="large" /></a>
                        <a href="https://github.com/Renz757" target="_blank" rel="noreferrer"><GitHubIcon className="footer-icon" fontSize="large" /></a>
                        <a href="https://www.linkedin.com/in/lorenzo-tinsley-0b8049139/" target="_blank" rel="noreferrer"><LinkedInIcon className="footer-icon" fontSize="large" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;