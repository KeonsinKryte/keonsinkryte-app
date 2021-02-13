import React, { Component } from 'react';
import SideHandler from '../../../Handlers/SideHandler/SideHandler';

class ProjectFarewell extends Component {
    render() {
        const next__tittle = this.props.next__tittle;
        const next__route = this.props.next__route;

        return (
            <section className="project__farewell">
                <article className="col-6">
                    <h1>That's all folks!</h1>
                    <p>Thanks for being here with me, <br />I appreciate it. <span role="img" aria-label="Happy face">😊</span></p>
                </article>
                <article className="col-6 sidehandler">
                    <SideHandler
                        tittle={next__tittle}
                        route={next__route}
                    ></SideHandler>
                </article>
            </section>
        );
    }
}

export default ProjectFarewell;