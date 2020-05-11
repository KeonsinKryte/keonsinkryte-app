import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Viewer from '../Projects/Viewer/Viewer';
import Cognosis from '../Projects/Cognosis/Cognosis';
import Duino from '../Projects/Duino/Duino';
import Nasa from '../Projects/Nasa/Nasa';
import ScrollToTop from './ScrollToTop';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';

class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop></ScrollToTop>
                <div className="app">
                    <div className="app__container">
                        <Nav></Nav>
                        <Switch>
                            <Route exact path='/'>
                                <Header></Header>
                                <Viewer></Viewer>
                                <About></About>
                            </Route>
                            <Route exact path='/projects/cognosis'>
                                <Cognosis></Cognosis>
                            </Route>
                            <Route exact path='/projects/duino'>
                                <Duino></Duino>
                            </Route>
                            <Route exact path='/projects/nasa'>
                                <Nasa></Nasa>
                            </Route>
                            <Route path="*">
                                <NotFound></NotFound>
                            </Route>
                        </Switch>
                    </div>
                    <Footer></Footer>
                </div>
            </Router>
        );
    }
}

export default App;