import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DuinoThumbnail extends Component {
    render() {
        return (
            <article className="duino">
                <Link to="/projects/duino">
                    <div className="duino__cover">
                        <img className="duino__imageCover" src={process.env.PUBLIC_URL + "/images/projects/duino/thumbnail/duino_thumbnail_cover.png"} alt="Cover of the interactive book Universo de Duino" />
                        <div className="duino__gradient"></div>
                    </div>
                </Link>
                <div className="duino__information">
                    <div className="duino__decoration"><span role="img" aria-label="Alien">👽</span></div>
                    <div className="duino__text">
                        <h2>Duino, an alien who teaches electronics in kids. <br />New ways of learning</h2>
                        <p>Universo de Duino | 2017 - 2020</p>
                    </div>
                </div>
            </article>
        );
    }
}

export default DuinoThumbnail;