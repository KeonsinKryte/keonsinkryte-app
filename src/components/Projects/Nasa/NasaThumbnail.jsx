import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NasaThumbnail extends Component {
    render() {
        return (
            <article className="nasa">
                <Link to="/projects/nasa">
                    <div className="nasa__cover">
                        <img className="nasa__imageCover" src={process.env.PUBLIC_URL + "/images/projects/nasa/thumbnail/nasa_thumbnail_cover.png"} alt="Old computer displaying the digital tool" />
                        <div className="nasa__gradient"></div>
                    </div>
                </Link>
                <div className="nasa__information">
                    <div className="nasa__decoration"><span role="img" aria-label="School">📚</span></div>
                    <div className="nasa__text">
                        <h2>Yu´a Atsa Piya´a <br /> The preservation of an indigenous language</h2>
                        <p>Yu´a Atsa Piya´a | 2017</p>
                    </div>
                </div>
            </article>
        );
    }
}

export default NasaThumbnail;