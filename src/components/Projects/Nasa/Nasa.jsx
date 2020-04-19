import React, { Component } from 'react';

class Nasa extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <main className="nasa__project">
                <article className="nasa__project-description">
                    <p className='heading_1'>The preservation of an indigenous language</p>
                    <p className="heading_2">Yu´a Atsa Piya´a</p>
                    <p className="paragraph_1">
                        Yu´ a Atsa Piya ´a, was a tool/game created for the Nasa indigenous community located in La Primavera, Cauca. This platform works as an interactive method for learning Nasa Yuwe (Native Indigenous language of Nasa’s community) in kids.
                    </p>
                </article>
                <nav className="nasa__project-information">
                    <div className="nasa__project-info_1">
                        <p>Timeframe</p>
                        <p>2017</p>
                    </div>
                    <div className="nasa__project-info_2">
                        <p>Role</p>
                        <p>UX Researcher, Designer</p>
                    </div>
                    <div className="nasa__project-info_3">
                        <p>Institutions</p>
                        <p>US AID</p>
                        <p>Gobernación del Cauca</p>
                    </div>
                </nav>
                <article className="nasa__project-challenge">
                    <p className="paragraph_1">
                        Create a digital solution that satisfy language engagement/learning and digital literacy in kids between 9 - 12. The product is going to be used in a rural environment with limited resources (No internet access and toaster technology).
                    </p>
                </article>
                <article className="nasa__project-approach">
                    <p className="paragraph_2">
                        This project was a clear possibility for use the double diamond methodology. The need to represent a complex problem as the appropriation, engagement and learning of an indigenous language as Nasa Yuwe and the digital literacy, gave us the opportunity to create a research pipeline to get those insights that will converge in concrete digital product.
                    </p>
                    <article className="nasa__project-discover">
                        <p className="paragraph_3">
                            The first step here was defining What?, Why? and Where?. Three “simple questions” that gonna guide us into the real user, context and purpose.
                        </p>
                        <div className="nasa__project-information">
                            <div className="nasa__project-info_1">
                                <p>What?</p>
                                <p>The real concern it’s the preservation of a language, centuries of history and the community core. <br /> The stories, the myths and the life that we could lose if we don’t preserve the orality.
                                </p>
                            </div>
                            <div className="nasa__project-info_2">
                                <p>Why?</p>
                                <p>Colombia is one the most cultural diverse countries, for that reason the preservation of a language it’s a really important task for us.<br />The community itself recognize the low engagement showed by its students to learn Nasa Yuwe. <br /> The oral tradition in this little towns and communities it’s pretty important, specially if we’re talking about in the firsts steps in education in a rural context.
                                </p>
                            </div>
                            <div className="nasa__project-info_3">
                                <p>Where?</p>
                                <p>There’s no better way to understand the people you’re designing for than by immersing yourself into their lives and communities. <br /> For context, it’s 2017, one year after the final agreement to end the armed conflict in Colombia. Cauca is one of the most affected regions by this conflict. Over 40 years of resistance by the Nasa community in its territories have delayed this communities to access new technologies and literacy tools.
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="nasa__project-define">
                        <p>
                            We can imagine the language learning as a possibility to engage a strong methodology based on didactic elements, but the challenge suggest use the technology as an instrument of digital literacy in kids. So the mainly instrument for this metaphor would be the screen.
                        </p>
                    </article>
                    <article className="nasa__project-development">
                        <p>First: The cultural representation. The product needs to follow the colors, the language, the social hierarchy, the rules and the meaning of the community.
                        </p>
                        <p>
                            Second: Creating literacy tools rather than complex products. This is the core of the project. It’s very important that kids can improve organically from the bottom; learning and practicing the Nasa Yuwe language foundations (Food, colors and animals) and easily jump to complex interactions (Recognizing roles and social hierarchy)
                        </p>
                        <p>
                            Third: The teacher as a guide for the student. The focal point, the most reliable interaction; master and pupil. Here the student has a familiar experience, being guide by someone who really knows who you are. This is a powerful metaphor, connect the digital world with the kids reality itself. It’s really gorgeous see how the kids look at his teacher in a tiny computer, they smile, they laugh, they enjoy interact with something familiar, something that really exists.
                        </p>
                        <p>
                            Fourth: The fun factor. We’re talking about kids, we need to think in ways to create engagement. Learning through play it’s one of the best strategies for educational activities. Offering minigames about the animals, the colors, the food, foundation stories, myths, legends and the sense of community.
                        </p>
                    </article>
                </article>
                <article className="nasa__project-learning"></article>
                <footer></footer>
            </main>
        );
    }
}

export default Nasa; 