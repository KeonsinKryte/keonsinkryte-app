import React, { Component } from 'react';

class Info extends Component {
    render() {
        const project__client = this.props.project__client;
        const project__role = this.props.project__role;
        const project__timeframe = this.props.project__timeframe;

        return (
            <section className="project__info">
                <article className="col-10 project__info-container">
                    <div className="project__info-top">
                        <div className="col-4"><h2>Client</h2></div>
                        <div className="col-4"><h2>Role</h2></div>
                        <div className="col-4"><h2>Timeframe</h2></div>
                    </div>
                    <div className="project__info-bottom">
                        <div className="col-4"><p>{project__client}</p></div>
                        <div className="col-4"><p>{project__role}</p></div>
                        <div className="col-4"><p>{project__timeframe}</p></div>
                    </div>
                </article>
            </section>
        );
    }
}

export default Info; 