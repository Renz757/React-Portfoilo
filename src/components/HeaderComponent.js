import React from "react";
import { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <nav className="navStyles navbar navbar-expand-lg row m-0 align-items-center">
                    <div className="col-2 col-lg-4 text-center mr-5 mr-lg-0">
                        <h1 className="logo">Esscents</h1>
                    </div>

                    <div className="d-none d-lg-block col-lg-6">
                        <ul className="d-md-flex navbar-nav">
                            <li className="nav-item p-2"><a className="btn btn-light" href="#">Home</a></li>
                            <li className="nav-item p-2"><a className="btn btn-light" href="#products">Products</a></li>
                            <li className="nav-item p-2"><a className="btn btn-light" href="#">About</a></li>
                            <li className="nav-item p-2"><a className="btn btn-light" href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="nav-utilities col-4 col-lg-2 align-items-end d-flex">
                        <button className="submitBtn btn btn-dark mb-3 mb-lg-0 d-none d-lg-block" type="submit">Sign In</button>
                        <span className="d-lg-none hamburger ml-3 text-right"><i className="fa fa-bars"></i></span>
                        <span><i className="fa fa-shopping-cart ml-3 align-items-end"></i></span>
                    </div>
                </nav>
            </>
        );

    }
}

export default Header;