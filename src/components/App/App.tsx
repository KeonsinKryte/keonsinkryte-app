import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Cover from '../Cover/Cover';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app__container">
                        <Nav></Nav>
                        <Switch>
                            <Route path='/' exact component={Header}></Route>
                        </Switch>
                    </div>
                    <Footer></Footer>
                </div>
            </Router>
        );
    }
}

export default App;