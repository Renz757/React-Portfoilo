import { useState } from 'react';
import Header from './components/Navigation/HeaderComponent';
import Home from './components/Home/HomeComponent';
import Projects from './components/ProjectComponent';
import About from './components/AboutComponent';
import Contact from './components/Contact/ContactComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Skills_Data } from './shared/Product_Data';
import { Project_Image } from './shared/Product_Data';



const App = () => {

  const [skillsData, setSkillsData] = useState(Skills_Data);
  const [projectImg, setProjectImg] = useState(Project_Image);

  return (
    <BrowserRouter>
      <div className="bg-dark-blue">
        <Header />
        <Switch>
          <Route path='/home' render={() => <Home skills={skillsData} />} />
          <Route path='/projects' render={() => <Projects projectImage={projectImg} />} />
          <Route path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );

}

export default App; 