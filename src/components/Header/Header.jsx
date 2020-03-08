import React, { Component } from 'react';
import Cover from '../Cover/Cover';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className="header">
                <article className="header__left">
                    <div className="left__content">
                        <Cover></Cover>
                    </div>
                </article>
                <article className="header__right">
                    <div className="right__content">
                        <h1 className="right__title">
                            I ♥ Design experiences
                        </h1>
                    </div>
                </article>
            </header>
        );
    }
}

export default Header;