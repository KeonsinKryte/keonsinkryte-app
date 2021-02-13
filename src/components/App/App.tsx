import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Nasa from '../Projects/Nasa/Nasa';
import ScrollToTop from './ScrollToTop';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import ProjectGallery from '../Projects/Template/ProjectGallery/ProjectGallery';
import Incognitus from '../Projects/Incognitus/Incognitus';
import Duino from '../Projects/Duino/Duino';
import Bancoomeva from '../Projects/Bancoomeva/Bancoomeva';
import Eficacia from '../Projects/Eficacia/Eficacia';

class App extends Component {
    render() {
        return (
            <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
                <ScrollToTop></ScrollToTop>
                <div className="app">
                    <div className="container">
                        <Nav></Nav>
                        <div className="container-expand-lg row">
                            <Switch>
                                <Route exact path='/'>
                                    <Header></Header>
                                    <ProjectGallery></ProjectGallery>
                                    <About></About>
                                </Route>
                                <Route exact path='/projects/incognitus'>
                                    <Incognitus></Incognitus>
                                </Route>
                                <Route exact path='/projects/duino'>
                                    <Duino></Duino>
                                </Route>
                                <Route exact path='/projects/nasa'>
                                    <Nasa></Nasa>
                                </Route>
                                <Route exact path='/projects/bancoomeva'>
                                    <Bancoomeva></Bancoomeva>
                                </Route>
                                <Route exact path='/projects/eficacia'>
                                    <Eficacia></Eficacia>
                                </Route>
                                <Route path="*">
                                    <NotFound></NotFound>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </HashRouter>
        );
    }
}

export default App;