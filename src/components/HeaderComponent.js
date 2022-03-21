import React from "react";
import { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <nav class="navStyles navbar navbar-expand-lg row m-0 align-items-center">
                    <div class="col-2 col-lg-4 text-center mr-5 mr-lg-0">
                        <h1 class="logo">Esscents</h1>
                    </div>

                    <div class="d-none d-lg-block col-lg-6">
                        <ul class="d-md-flex navbar-nav">
                            <li class="nav-item p-2"><a class="btn btn-light border border-dark" href="#">Home</a></li>
                            <li class="nav-item p-2"><a class="btn btn-light border border-dark" href="#products">Products</a></li>
                            <li class="nav-item p-2"><a class="btn btn-light border border-dark" href="#">About</a></li>
                            <li class="nav-item p-2"><a class="btn btn-light border border-dark" href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div class="nav-utilities col-4 col-lg-2 align-items-end d-flex">
                        <button class="submitBtn btn btn-dark mb-3 mb-lg-0 d-none d-lg-block" type="submit">Sign In</button>
                        <span class="d-lg-none hamburger ml-3 text-right"><i class="fa fa-bars"></i></span>
                        <span><i class="fa fa-shopping-cart ml-3 align-items-end"></i></span>
                    </div>
                </nav>
            </>
        );

    }
}

export default Header;