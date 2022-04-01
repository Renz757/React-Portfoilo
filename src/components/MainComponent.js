import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Skills_Data } from '../shared/Product_Data';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills_data: Skills_Data
        }
    }

    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route path='/home' render={()=> <Home skills={this.state.skills_data} />} />
                    <Route path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default withRouter(Main);

