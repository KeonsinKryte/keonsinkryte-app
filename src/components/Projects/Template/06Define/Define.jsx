import React, { Component } from 'react';
import ProjectList from '../ProjectList/ProjectList';

class Define extends Component {
    render() {
        const define__emoji = this.props.define__emoji;
        const define__emoji_arialabel = this.props.define__emoji_arialabel;
        const define__tittle = this.props.define__tittle;
        const define__text_intro = this.props.define__text_intro;
        return (
            <section className="project__define">
                <article className="col-12">
                    <article className="project__define-top col-2">
                        <span aria-label={define__emoji_arialabel} role="img">{define__emoji}</span>
                    </article>
                    <article className="project__define-bottom col-10">
                        <div className="col-9">
                            <h1>{define__tittle}</h1>
                            <p>{define__text_intro}</p>
                        </div>
                    </article>
                </article>
            </section>
        );
    }
}

export default Define;