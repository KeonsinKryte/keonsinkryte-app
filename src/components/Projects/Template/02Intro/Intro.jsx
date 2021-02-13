import React, { Component } from 'react';

class Intro extends Component {
    render() {
        const project__intro = this.props.project__intro;

        return (
            <section className="project__intro">
                <article className="col-8">
                    <p>{project__intro}</p>
                </article>
            </section>
        );
    }
}

export default Intro; 