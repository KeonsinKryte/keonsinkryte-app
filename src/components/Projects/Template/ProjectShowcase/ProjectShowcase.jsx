import React, { Component } from 'react';

class ProjectShowcase extends Component {
    render() {
        const develop__emoji = this.props.develop__emoji;
        const develop__emoji_arialabel = this.props.develop__emoji_arialabel;
        const develop__tittle = this.props.develop__tittle;
        const develop__text_intro = this.props.develop__text_intro;
        const showcase__img_a = this.props.showcase__img_a;
        const showcase__img_a_alt = this.props.showcase__img_a_alt;
        const showcase__img_main = this.props.showcase__img_main;
        const showcase__img_main_alt = this.props.showcase__img_main_alt;
        const showcase__img_b = this.props.showcase__img_b;
        const showcase__img_b_alt = this.props.showcase__img_b_alt;
        const showcase__tittle_a = this.props.showcase__tittle_a;
        const showcase__text_a = this.props.showcase__text_a;
        const showcase__tittle_b = this.props.showcase__tittle_b;
        const showcase__text_b = this.props.showcase__text_b;

        return (
            <section className="project__showcase">
                <article className="col-12">
                    <article className="project__showcase-top col-3">
                        <span aria-label={develop__emoji_arialabel} role="img">{develop__emoji}</span>
                    </article>
                    <article className="project__showcase-bottom col-10">
                        <div className="col-9">
                            <h1>{develop__tittle}</h1>
                            <p>{develop__text_intro}</p>
                        </div>
                    </article>
                </article>
                <article className="col-10 project__showcase-a">
                    <div className="col-4 project__showcase-img">
                        <img src={showcase__img_a} alt={showcase__img_a_alt} />
                    </div>
                    <div className="col-7 project__showcase-text">
                        <h2>{showcase__tittle_a}</h2>
                        <p>{showcase__text_a}</p>
                    </div>
                </article>
                <article className="col-12 project__showcase-main">
                    <img src={showcase__img_main} alt={showcase__img_main_alt} />
                </article>
                <article className="col-10 project__showcase-a">
                    <div className="col-7 project__showcase-text">
                        <h2>{showcase__tittle_b}</h2>
                        <p>{showcase__text_b}</p>
                    </div>
                    <div className="col-4 project__showcase-img">
                        <img src={showcase__img_b} alt={showcase__img_b_alt} />
                    </div>
                </article>
            </section>
        );
    }
}

export default ProjectShowcase;