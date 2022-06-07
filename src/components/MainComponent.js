import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Projects from "./ProjectComponent"
import About from "./AboutComponent";
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Skills_Data } from '../shared/Product_Data';
import { Project_Image } from '../shared/Product_Data';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills_data: Skills_Data,
            project_image: Project_Image
        }
    }

    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home skills={this.state.skills_data} />} />
                    <Route path='/projects' render={() => <Projects projectImage={this.state.project_image} /> } />
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

