import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';

class CognosisThumbnail extends Component {
    render() {
        return (
            <article className="cognosis">
                <Link to="/projects/cognosis">
                    <div className="cognosis__cover">
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </Link>
                <div className="cognosis__information">
                    <div className="cognosis__decoration"></div>
                    <div className="cognosis__text">
                        <h2>Improving efficency on neurological tests</h2>
                        <p>Cognosis™ | 2019 - 2020</p>
                    </div>
                </div>
            </article>
        );
    }
}

export default CognosisThumbnail;