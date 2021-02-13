import React, { Component } from 'react';

class Learn extends Component {
    render() {
        const learn__tittle = this.props.learn__tittle;
        const learn__text = this.props.learn__text;

        return (
            <section className="project__learn col-12">
                <article className="col-6">
                    <h1>{learn__tittle}</h1>
                </article>
                <article className="col-6">
                    <p>{learn__text}</p>
                </article>
            </section>
        );
    }
}

export default Learn;