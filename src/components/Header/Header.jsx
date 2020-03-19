import React, { Component } from 'react';
import Cover from '../Cover/Cover';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <article className="header__left">
                    <div className="left__content">
                        <p className="left__title">
                            I <img className="left__image" src={process.env.PUBLIC_URL + "/images/heart.svg"} alt="Red heart" /> <br /> Design
                        </p>
                        <b className="left__container">
                            <div className="left__words">
                                experiences. <br />
                                game-changing ideas.<br />
                                inclusive products.<br />
                                for people.<br />
                                easier life.<br />
                            </div>
                        </b>
                        <article className="left__text">
                            <h2 className="left__greeting">Hey!</h2>
                            <p className="left__paragraph">
                                I'm <strong><span className="left__highlighted"> Mauricio Botero </span></strong>, a designer and researcher in love of creating great experiences for users. Capable of research, analyze and propouse new ideas based on user’s necessities.
                                <br />
                                <br />
                                Emphatic and believing in design as a research, analytical, versatile, transversal and proactive discipline.
                        </p>
                        </article>
                    </div>
                </article>
                <article className="header__right">
                    <div className="right__content">
                        <Cover></Cover>
                    </div>
                </article>
            </header>
        );
    }
}

export default Header;