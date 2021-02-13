import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectCard extends Component {
    render() {
        const tittle = this.props.tittle;
        const description = this.props.description;
        const emoji = this.props.emoji;
        const arialabel = this.props.arialabel;
        const route = this.props.route;
        const height = this.props.height;
        const background_image = this.props.background_image;

        return (
            <article className="projectcard" style={{
                height: height + 'vh'
            }}>
                <Link to={route}>
                    <div className="projectcard__cover" style={{
                        backgroundImage: background_image,
                        height: (height - 15) + 'vh'
                    }} >
                        <div className="projectcard__gradient"></div>
                    </div>
                    <div className="projectcard__information">
                        <div className="projectcard__decoration container"><span role="img" aria-label={arialabel}>{emoji}</span></div>
                        <div className="projectcard__text container">
                            <h2>{tittle}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </Link>
            </article>
        );
    }
}

export default ProjectCard;