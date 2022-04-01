import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <div className="container-fuild footer-section">
                <ul className="row">
                    <div className="col">
                        <li><Link className="footer-link" to="Home">Home</Link></li>
                        <li><Link className="footer-link" to="about">About</Link></li>
                        <li><Link className="footer-link" to="contact">Contact</Link></li>
                        <li><Link className="footer-link" to="Home">Extras</Link></li>
                    </div>
                </ul>
                <div className="row">
                    <div className="col icon-group">
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