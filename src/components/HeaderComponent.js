import React from "react";
import { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toogleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState = {
            isOpen: !this.state.isOpen
        }
    }

    render() {
        return (
            <>
                <nav className="navStyles navbar navbar-expand-lg row m-0 align-items-center">
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
                        <MenuIcon fontSize="large" className="MenuIcon d-lg-none" />
                    </div>
                </nav>
            </>
        );

    }
}



export default Header;