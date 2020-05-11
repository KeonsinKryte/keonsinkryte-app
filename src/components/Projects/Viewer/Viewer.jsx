import React, { Component } from 'react';
import CognosisThumbnail from '../Cognosis/CognosisThumbnail';
import DuinoThumbnail from '../Duino/DuinoThumbnail';
import NasaThumbnail from '../Nasa/NasaThumbnail';

import { animateScroll as scroll } from 'react-scroll'

class Viewer extends Component {
    render() {
        return (
            <main className="viewer">
                <div className="viewer__container">
                    <main className="projects">
                        <article className="projects__left">
                            <CognosisThumbnail></CognosisThumbnail>
                        </article>
                        <article className="projects__right">
                            <DuinoThumbnail></DuinoThumbnail>
                            <NasaThumbnail></NasaThumbnail>
                        </article>
                    </main>
                </div>
                <div className="right text-right">
                    <a onClick={() => scroll.scrollTo(1950)} className="header__scroll">
                        <h2>About me!</h2>
                        <img className="img-tiny-vertical-right" src={process.env.PUBLIC_URL + "/icons/arrow.svg"} alt="Blue Arrow" />
                    </a>
                </div>
            </main>
        );
    }
}

export default Viewer;