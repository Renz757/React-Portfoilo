import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { Product_Data } from '../shared/Product_Data';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_data: Product_Data
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Home product={this.state.product_data} />
            </div>
        );
    }
}

export default Main;