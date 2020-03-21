import React, { Component } from 'react';
import CognosisThumbnail from '../Cognosis/CognosisThumbnail';

class Viewer extends Component {
    render() {
        return (
            <main className="viewer">
                <div className="viewer__container">
                    <main className="projects">
                        <CognosisThumbnail></CognosisThumbnail>
                    </main>
                </div>
            </main>
        );
    }
}

export default Viewer;