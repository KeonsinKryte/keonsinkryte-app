import React, { Component } from 'react';

class ProjectList extends Component {
    render() {
        const list__tittle = this.props.list__tittle;
        const list__number = this.props.list__number;
        const list__text = this.props.list__text;
        const list__emoji = this.props.list__emoji;
        const list__emoji_arialabel = this.props.list__emoji_arialabel;

        return (
            <article className="project__list col-5">
                <div className="project__list-num">
                    <span>{list__number}</span>
                </div>
                <div className="project__list-content">
                    <span aria-label={list__emoji_arialabel} role="img">{list__emoji}</span>
                    <h2>{list__tittle}</h2>
                    <p>{list__text}</p>
                </div>
            </article>
        );
    }
}

export default ProjectList;