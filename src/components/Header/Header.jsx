import React, { Component } from 'react';
import Cover from '../Cover/Cover';
import { Events, animateScroll as scroll, scroller } from 'react-scroll'

class Header extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        return (
            <header className="header">
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
                </article>
                <article className="header__right">
                    <div className="right__content">
                        <Cover></Cover>
                    </div>
                    <div className="right text-right">
                        <a onClick={() => scroll.scrollTo(1075)} className="header__scroll">
                            <h2>Check out my work!</h2>
                            <img className="img-small-vertical-right" src={process.env.PUBLIC_URL + "/icons/arrow.svg"} alt="Blue Arrow" />
                        </a>
                    </div>
                </article>
            </header>
        );
    }
}

export default Header;