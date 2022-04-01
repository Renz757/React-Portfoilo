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
                    <div className="col-2 col-lg-4 text-center mr-5 mr-lg-0">
                        <h1 className="logo">L.T</h1>
                    </div>

                    <div className="d-none d-lg-block col-md-6">
                        <ul className="d-sm-flex navbar-nav">
                            <NavLink className="nav-item p-2" to="/home">
                                Home
                            </NavLink>
                            <NavLink className="nav-item p-2" to="/products">
                                Products
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
                        <button className="submitBtn btn btn-dark mb-3 mb-lg-0 d-none d-lg-block" type="submit">Sign In</button>
                        <MenuIcon onClick={this.toggleMenu} fontSize="large" className="MenuIcon d-lg-none" />
                    </div>
                </nav>
                <Offcanvas
                    isOpen={this.state.isOpen}
                    toggle={this.toggleMenu}
                >
                    <OffcanvasHeader toggle={this.toggleMenu}>
                        <h1 className="logo">L.T</h1>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <ul className="list-unstyled">
                            <li><Link to='/home' onClick={this.toggleMenu} className="mobileLinks">Home</Link></li>
                            <li><Link to='/about' onClick={this.toggleMenu} className="mobileLinks">About</Link></li>
                            <li><Link to='/contact' onClick={this.toggleMenu} className="mobileLinks">Contact</Link></li>
                            <li><Link to='/extra' onClick={this.toggleMenu} className="mobileLinks">Extras</Link></li>
                        </ul>
                    </OffcanvasBody>
                </Offcanvas>
            </>
        );
    }
}



export default Header;