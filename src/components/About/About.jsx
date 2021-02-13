import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';
import ScrollHandler from '../Handlers/ScrollHandler/ScrollHandler';

class About extends Component {
    render() {
        return (
            <article className="container about">
                <div className="row">
                    <div className="col-6">
                        <h1 className="heading_1">So, <br /> What about me<br /><span role="img" aria-label="Thinking face">🤔</span></h1>
                    </div>
                    <div className="col-6">
                        <p>
                            I’m a UX Researcher/Designer in love with interaction systems <span role="img" aria-label="Technology">🦾</span>, cities <span role="img" aria-label="Skycrapers">🏙️</span>, people <span role="img" aria-label="People">🧑🏻‍🤝‍🧑🏻</span>, solving problems <span role="img" aria-label="Puzzle">🧩</span> and trying to understand how the the world works <span role="img" aria-label="Map">🗺️</span>.
                                <br /><br />
                                I believe in economic growth and well being as an opportunity for Design disciplines. Our responsibility it’s provide tools for social impact.
                                <br /><br />
                                Three topics I suggest are pretty important for design exploration right now: <strong>Education<span role="img" aria-label="School">🏫</span>, Health <span role="img" aria-label="Doctor">👩‍⚕️</span></strong> and <strong>digital literacy<span role="img" aria-label="Floppy Disk">💾</span>.</strong>
                            <br /><br />
                                Download my CV  <strong><a href="/cv/Resume - EN - BW.pdf" download="KeonsinKryte Resume EN">EN</a></strong> || <strong><a href="/cv/Resume - ES - BW.pdf" download="KeonsinKryte Resume ES">ES </a></strong>
                        </p>

                    </div>
                </div>
                <ScrollHandler title={"Contact me!"} target={2750}></ScrollHandler>
            </article>
        );
    }
}

export default About;