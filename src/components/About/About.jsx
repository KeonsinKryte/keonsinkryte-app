import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';

class About extends Component {
    render() {
        return (
            <article className="spacing-20vh-bottom spacing-5vh-top">
                <div className="half-container">
                    <div className="left about__map">
                        <p className="heading_1">So, <br /> What about me<br /><span role="img" aria-label="Thinking face">🤔</span></p>
                    </div>
                    <div className="right">
                        <p className="paragraph_1">
                            I’m a UX Researcher/Designer in love with interaction systems <span role="img" aria-label="Technology">🦾</span>, cities <span role="img" aria-label="Skycrapers">🏙️</span>, people <span role="img" aria-label="People">🧑🏻‍🤝‍🧑🏻</span>, solving problems <span role="img" aria-label="Puzzle">🧩</span> and trying to understand how the the world works <span role="img" aria-label="Map">🗺️</span>.
                                <br /><br />
                                A designer playing sandbox games. I really love them. I like build cities (That map it's from my recent project: San Luterio), try new layouts create walkable cities and focus on sustainable growth.
                                <br /><br />
                                I believe in economic growth and well being as an opportunity for Design disciplines. Our responsibility it’s provide tools for social impact.
                                <br /><br />
                                Three topics I suggest are pretty important for design exploration right now: <strong>Education<span role="img" aria-label="School">🏫</span>, Health <span role="img" aria-label="Doctor">👩‍⚕️</span></strong> and <strong>digital literacy<span role="img" aria-label="Floppy Disk">💾</span>.</strong>
                            <br /><br />
                                Download my CV  <strong><a href="/cv/Resume - EN - BW.pdf" download="KeonsinKryte Resume EN">EN</a></strong> :|:|: <strong><a href="/cv/Resume - ES - BW.pdf" download="KeonsinKryte Resume ES">ES </a></strong>
                        </p>

                    </div>
                </div>
                <div className="right text-right spacing-10vh-top">
                    <a onClick={() => scroll.scrollToBottom()} className="header__scroll">
                        <h2>Contact me!</h2>
                        <img className="img-tiny-vertical-right" src={process.env.PUBLIC_URL + "/icons/arrow.svg"} alt="Blue Arrow" />
                    </a>
                </div>
            </article>
        );
    }
}

export default About;