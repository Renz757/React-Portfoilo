import React from "react";
import { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from 'react-router-dom';
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }

    render() {
        return (
            <>
                <nav className="navStyles navbar navbar-expand-lg row m-0 align-items-center" id="#home">
                    <div className="col-2 col-md-8 text-left mr-5 mr-lg-0">
                        <Link to="/home" className="logo">L.T</Link>
                    </div>

                    <div className="d-none d-lg-block col-md-4">
                        <ul className="d-sm-flex navbar-nav">
                            <NavLink className="nav-item p-2" to="/home">
                                Home
                            </NavLink>
                            <NavLink className="nav-item p-2" to="/projects">
                                Projects
                            </NavLink>
                            <NavLink className="nav-item p-2" to="/about">
                                About
                            </NavLink>
                            <NavLink className="nav-item p-2" to="/contact">
                                Contact
                            </NavLink>
                        </ul>
                    </div>

                    <div className="nav-utilities col-4 col-lg-2 align-items-end d-flex align-middle">
                        <MenuIcon onClick={this.toggleMenu} fontSize="large" className="MenuIcon d-lg-none" />
                    </div>
                </nav>
                <Offcanvas
                    isOpen={this.state.isOpen}
                    toggle={this.toggleMenu}
                    className="offcanvas"
                >
                    <OffcanvasHeader toggle={this.toggleMenu}>
                        <Link to='/home' onClick={this.toggleMenu} className="mobileLinks logo">LT</Link>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <ul className="list-unstyled">
                            <li><Link to='/home' onClick={this.toggleMenu} className="mobileLinks">Home</Link></li>
                            <li><Link to='/projects' onClick={this.toggleMenu} className="mobileLinks">Projects</Link></li>
                            <li><Link to='/about' onClick={this.toggleMenu} className="mobileLinks">Abobut</Link></li>
                            <li><Link to='/contact' onClick={this.toggleMenu} className="mobileLinks">Contact</Link></li>
                        </ul>
                    </OffcanvasBody>
                </Offcanvas>
            </>
        );
    }
}



export default Header;