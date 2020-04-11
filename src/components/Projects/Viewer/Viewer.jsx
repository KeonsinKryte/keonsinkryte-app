import React, { Component } from 'react';
import CognosisThumbnail from '../Cognosis/CognosisThumbnail';
import DuinoThumbnail from '../Duino/DuinoThumbnail';
import NasaThumbnail from '../Nasa/NasaThumbnail';

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
            </main>
        );
    }
}

export default Viewer;