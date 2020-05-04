import React, { Component } from 'react';

class Duino extends Component {
    render() {
        return (
            <main className="duino__project">
                <article className="duino__project-description">
                    <div className="duino__project-information-header">
                        <div className="duino__project-decoration">📚</div>
                        <div className="duino__project-title">
                            <p className='heading_1'>The preservation of an indigenous language</p>
                            <p className="heading_2">Yu´a Atsa Piya´a</p>
                        </div>
                    </div>
                    <div className="text-container text-centered">
                        <p className="paragraph_1">
                            <strong>Yu´ a Atsa Piya ´a</strong>, was a tool/game created for the duino indigenous community located in La Primavera, Cauca. This platform works as an interactive method for learning duino Yuwe (Native Indigenous language of duino’s community) in kids.
                    </p>
                    </div>
                </article>
                <nav className="duino__project-information spacing-5vh">
                    <div className="duino__project-info">
                        <h5>Timeframe</h5>
                        <p className="paragraph_list">2017</p>
                    </div>
                    <div className="duino__project-info">
                        <h5>Role</h5>
                        <p className="paragraph_list">UX Researcher, UX writer, Content creator and insights collector</p>
                    </div>
                    <div className="duino__project-info">
                        <h5>Organizations</h5>
                        <img src={process.env.PUBLIC_URL + "/logos/crc.png"} alt="Logo del Consejo Regional Indigena del Cauca" />
                        <img src={process.env.PUBLIC_URL + "/logos/icesi.svg"} alt="Logo de la Universidad ICESI" />
                    </div>
                </nav>
                <article className="duino__project-challenge half-container spacing-10vh">
                    <p className="heading_1 left">Our Challenge</p>
                    <p className="paragraph_1 right">
                        Create a digital solution that satisfy language engagement/learning and digital literacy in kids between 9 - 12. The product is going to be used in a rural environment with limited resources (No internet access and toaster technology).
                </p>
                </article>
                <article className="duino__project-approach spacing-10vh">
                    <div className="half-container">
                        <p className="heading_1 left">Our approach</p>
                        <p className="paragraph_1 right text-left">
                            This project was a clear possibility for use the <strong><a href="https://www.designcouncil.org.uk/news-opinion/what-framework-innovation-design-councils-evolved-double-diamond" target="blank">double diamond methodology</a></strong>. The need to represent a complex problem as the appropriation, engagement and learning of an indigenous language as <strong><a href="http://talkingdictionary.swarthmore.edu/paez/?lang=es" target="blank">duino Yuwe</a></strong> and the digital literacy, gave us the opportunity to create a research pipeline to get those insights that will converge in concrete digital product.
                </p>
                    </div>
                    <article className="duino__project-discover">
                        <div className="text-container text-centered column spacing-5vh">
                            <img className="duino__project-diagram" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_diamond-diagram.png"} alt="Double Diamond diagram" />
                            <div className="line-a"></div>
                            <p className="heading_list">Discover<br /><span>🔎</span></p>
                            <p className="paragraph_1">
                                The first step here was defining What?, Why? and Where?. Three “simple questions” that gonna guide us into the real user, context and purpose.
                        </p>
                        </div>
                        <div className="duino__project-information wide-90 column">
                            <div className="duino__project-info a spacing-5vh">
                                <h2>What?</h2>
                                <p className="paragraph_list sca-75">The real concern it’s the preservation of a language, centuries of history and the community core. <br /><p></p><br />
                            The stories, the myths and the life that we could lose if we don’t preserve the orality.
                            </p>
                            </div>
                            <div className="duino__project-info b spacing-5vh">
                                <h2>Why?</h2>
                                <p className="paragraph_list sca-75">Colombia is one of the most cultural diverse countries, for that reason the preservation of a language it’s a really important task for us.<br /><p></p><br />The community itself recognize the low engagement showed by its students to learn duino Yuwe. <br /><p></p><br /> The oral tradition in this little towns and communities it’s pretty important, specially if we’re talking about the firsts steps in education in a rural context.
                            </p>
                            </div>
                            <img src="" alt="" />
                            <div className="duino__project-info c spacing-5vh">
                                <h2>Where?</h2>
                                <p className="paragraph_list sca-75">There’s no better way to understand the people you’re designing for than by immersing yourself into their lives and communities. <br /><p></p><br /> For context, it’s 2017, one year after <strong><a href="https://www.nytimes.com/2016/09/27/world/americas/colombia-farc-peace-agreement.html" target="blank">the final agreement to end the armed conflict in Colombia</a></strong>.<br /><p></p><br />Cauca is one of the most affected regions by this conflict. Over 40 years of resistance by the duino community in its territories have delayed this communities to access new technologies and literacy tools.
                            </p>
                            </div>
                        </div>
                    </article>
                    <article className="duino__project-define">
                        <div className="text-container spacing-5vh text-centered column">
                            <div className="line-b"></div>
                            <p className="heading_list">Define<br /><span>🗳️</span></p>
                            <p className="paragraph_1">
                                We can imagine the language learning as a possibility to engage a strong methodology based on didactic elements, but the challenge suggest use the technology as an instrument of digital literacy in kids. So the mainly instrument for this metaphor would be the screen.
                    </p>
                        </div>
                    </article>
                    <article className="duino__project-develop">
                        <div className="text-container spacing-5bh text-centered column">
                            <div className="line-c"></div>
                            <p className="heading_list">Develop<br /><span>👩‍💻</span></p>
                        </div>
                        <div className="mostly-container spacing-5vh-bottom">
                            <p className="heading_1 left text-centered">1</p>
                            <div className="text-container">
                                <h5>The cultural representation.🌄</h5>
                                <p className="paragraph_1 right">
                                    The product needs to follow the colors, the language, the social hierarchy, the rules and the meaning of the community.
                            </p>
                                <div className="duino__project-develop-roller">
                                    <img src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_artboard-1.png"} alt="" />
                                    <div></div>
                                    <img src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_artboard-2.png"} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mostly-container spacing-5vh-bottom">
                            <p className="heading_1 left text-centered">2</p>
                            <div className="text-container">
                                <h5>Creating literacy tools rather than complex products.😵</h5>
                                <p className="paragraph_1 right">
                                    This is the core of the project. It’s very important that kids can improve organically from the bottom; learning and practicing the duino Yuwe language foundations (Food, colors and animals) and easily jump to complex interactions (Recognizing roles and social hierarchy).
                            </p>
                            </div>
                        </div>
                        <div className="mostly-container spacing-5vh-bottom">
                            <p className="heading_1 left text-centered">3</p>
                            <div className="text-container">
                                <h5>The teacher as a guide for the student.👩‍🏫</h5>
                                <p className="paragraph_1 right">
                                    The focal point, the most reliable interaction; master and pupil. Here the student has a familiar experience, being guide by someone who really knows who you are. This is a powerful metaphor, connect the digital world with the kids reality itself. It’s really gorgeous see how the kids look at his teacher in a tiny computer, they smile, they laugh, they enjoy interact with something familiar, something that really exists.
                            </p>
                                <img className="duino__project-develop-img" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_teacher.png"} alt="" />
                            </div>
                        </div>
                        <div className="mostly-container spacing-5vh-bottom">
                            <p className="heading_1 left text-centered">4</p>
                            <div className="text-container">
                                <h5>The fun factor.💃🎉</h5>
                                <p className="paragraph_1 right">
                                    We’re talking about kids, we need to think in ways to create engagement. Learning through play it’s one of the best strategies for educational activities. Offering minigames about the animals, the colors, the food, foundation stories, myths, legends and the sense of community.
                            </p>
                            </div>
                        </div>
                    </article>
                </article>
                <article className="duino__project-deliver">
                    <div className="text-container spacing-5bh text-centered column">
                        <div className="line-d"></div>
                        <p className="heading_list">Deliver<br /><span>📬</span></p>
                    </div>
                    <img className="duino__project-deliver-img column" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_laptop-interface.png"} alt="" />
                </article>
                <article className="duino__project-learning">
                    <p>
                        What I learned?: There’s something special when you work for a community. The kids enjoying something that you’ve created for them, the gratitude that we received and the satisfaction for creating a tool for learning an essential cultural topic.

                        One of the greatest lessons I learned through this project, was the ability to get insights from an unknown culture, everything was new for me; the language, the meaning of nature, the relationship with the soil, the social hierarchy and the resilience of whole community.

                        Another great lesson was the ability to create from the inevitable “clash of cultures” between two different world interpretations.

                        It’s important to understand your user and provide them with tools that mold into the cultural stamp and do not allow our cosmology prevail over theirs.
                </p>
                </article>
                <footer></footer>
            </main>
        );
    }
}

export default Duino;