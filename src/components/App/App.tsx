import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Cover from '../Cover/Cover';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Viewer from '../Projects/Viewer/Viewer';
import Cognosis from '../Projects/Cognosis/Cognosis';
import Duino from '../Projects/Duino/Duino';
import Nasa from '../Projects/Nasa/Nasa';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app__container">
                        <Nav></Nav>
                        <Switch>
                            <Route exact path='/'>
                                <Header></Header>
                                <Viewer></Viewer>
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
                        </Switch>
                    </div>
                    <Footer></Footer>
                </div>
            </Router>
        );
    }
}

export default App;