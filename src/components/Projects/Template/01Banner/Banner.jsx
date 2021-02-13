import React, { Component } from 'react';

class Banner extends Component {
    render() {
        const project__emoji = this.props.project__emoji;
        const project__emoji_arialabel = this.props.project__emoji_arialabel;
        const project__tittle = this.props.project__tittle;
        const project__description = this.props.project__description;
        const project__route_gradient = this.props.project__route_gradient;
        const project__link = this.props.project__link;

        return (
            <section className="project__banner" style={{
                backgroundImage: project__route_gradient
            }}>
                <article className="col-6 project__decoration">
                    <span aria-label={project__emoji_arialabel} role="img">{project__emoji}</span>
                </article>
                <article className="col-6 project__tittle">
                    <h1>{project__tittle}</h1>
                    <p>{project__description}</p>
                    {project__link}
                </article>
            </section>
        );
    }
}

export default Banner; 