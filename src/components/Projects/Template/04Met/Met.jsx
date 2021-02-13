import React, { Component } from 'react';

class Met extends Component {
    render() {
        const met__emoji = this.props.met__emoji;
        const met__emoji_arialabel = this.props.met__emoji_arialabel;
        const met__tittle = this.props.met__tittle;
        const met__text = this.props.met__text;

        return (
            <article className="project__met-content col-6">
                <article className="project__met-top col-3">
                    <span aria-label={met__emoji_arialabel} role="img">{met__emoji}</span>
                </article>
                <article className="project__met-bottom col-9">
                    <h1>{met__tittle}</h1>
                    <p>{met__text}</p>
                </article>
            </article>
        );
    }
}

export default Met;