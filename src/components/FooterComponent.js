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
                        <TwitterIcon className="footer-icon" fontSize="large" />
                        <GitHubIcon className="footer-icon" fontSize="large" />
                        <LinkedInIcon className="footer-icon" fontSize="large" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;