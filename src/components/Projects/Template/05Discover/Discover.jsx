import React, { Component } from 'react';

class Discover extends Component {
    render() {
        const discover__emoji = this.props.discover__emoji;
        const discover__emoji_arialabel = this.props.discover__emoji_arialabel;
        const discover__tittle = this.props.discover__tittle;
        const discover__text_intro = this.props.discover__text_intro;
        const discover__text_what = this.props.discover__text_what;
        const discover__text_why = this.props.discover__text_why;
        const discover__text_where = this.props.discover__text_where;

        return (
            <section className="project__discover">
                <article className="col-12">
                    <article className="project__discover-top col-2">
                        <span aria-label={discover__emoji_arialabel} role="img">{discover__emoji}</span>
                    </article>
                    <article className="project__discover-bottom col-10">
                        <div className="col-9">
                            <h1>{discover__tittle}</h1>
                            <p>{discover__text_intro}</p>
                        </div>
                        <article className="project__discover-stripe">
                            <div className="col-6 project__discover-stripe-a">
                                <h2>What?</h2>
                                <p>{discover__text_what}</p>
                            </div>
                            <div className="col-6 project__discover-stripe-b">
                                <h2>Why?</h2>
                                <p>{discover__text_why}</p>
                            </div>
                            <div className="col-6 project__discover-stripe-c">
                                <h2>Where?</h2>
                                <p>{discover__text_where}</p>
                            </div>
                        </article>
                    </article>
                </article>
            </section>
        );
    }
}

export default Discover; 