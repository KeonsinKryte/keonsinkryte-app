import React, { Component } from 'react';
import Cover from '../Cover/Cover';
import ScrollHandler from '../Handlers/ScrollHandler/ScrollHandler'

class Header extends Component {
    render() {
        return (
            <header className="container">
                {/* 
                --------------------------------------------------------------
                WORDS EXPERIMENT
                --------------------------------------------------------------
                <article className="header__left">
                    <div className="left__content">
                        <p className="left__title">
                            I <img className="left__image" src={process.env.PUBLIC_URL + "/icons/heart.svg"} alt="Red heart" /> <br /> Design
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
                                I'm <strong><span className="left__highlighted"> Mauricio Botero </span></strong>, a designer and researcher, in love of creating great experiences for users. Capable of researching, analyzing and proposing new ideas based on users necessities.
                                <br />
                                <br />
                                Emphatic and believing in design as a research, analytical, versatile, transversal and proactive discipline.
                        </p>
                        </article>
                    </div>
                </article> */}
                <div className="row">
                    <Cover></Cover>
                </div>
                <ScrollHandler title={"Checkout my work!"} target={1100}></ScrollHandler>
            </header>
        );
    }
}

export default Header;