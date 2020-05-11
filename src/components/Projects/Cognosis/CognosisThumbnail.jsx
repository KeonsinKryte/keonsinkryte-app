import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CognosisThumbnail extends Component {
    render() {
        return (
            <article className="cognosis">
                <Link to="/projects/cognosis">
                    <div className="cognosis__cover">
                        <img className="cognosis__imageCover" src={process.env.PUBLIC_URL + "/images/projects/cognosis/thumbnail/cognosis_thumbnail_cover.png"} alt="iPad Pro displaying Cognosis App" />
                        <div className="cognosis__gradient"></div>
                    </div>
                </Link>
                <div className="cognosis__information">
                    <div className="cognosis__decoration"><span role="img" aria-label="Brain">🧠</span></div>
                    <div className="cognosis__text">
                        <h2>Improving efficiency on neurological tests in Parkinson's disease patients</h2>
                        <p>Cognosis™ | 2019 - 2020</p>
                    </div>
                </div>
            </article>
        );
    }
}

export default CognosisThumbnail;