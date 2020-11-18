import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import createHistory from "history/createBrowserHistory"

export const history = createHistory()

history.listen((location, action) => {
    window.scrollTo(0, 0)
})

class Nasa extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.initialize('UA-167062471-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <main className="nasa__project">
                <article className="nasa__project-description">
                    <div className="nasa__project-information-header">
                        <div className="nasa__project-decoration"><span role="img" aria-label="Books">📚</span></div>
                        <div className="nasa__project-title">
                            <p className='heading_1'>The preservation of an indigenous language</p>
                            <p className="heading_2">Yu´a Atsa Piya´a</p>
                        </div>
                    </div>
                    <div className="text-container text-centered">
                        <p className="paragraph_1 spacing-10vh-top">
                            <strong>Yu´ a Atsa Piya ´a</strong>, was a tool/game created for the Nasa indigenous community located in La Primavera, Cauca. This platform works as an interactive method for learning Nasa Yuwe (Native Indigenous language of Nasa’s community) in kids.
                        </p>
                    </div>
                </article>
                <nav className="nasa__project-information spacing-5vh">
                    <div className="nasa__project-info">
                        <h5>Timeframe</h5>
                        <p className="paragraph_list">2017</p>
                    </div>
                    <div className="nasa__project-info">
                        <h5>Role</h5>
                        <p className="paragraph_list">UX Researcher, UX writer, Content creator and insights collector</p>
                    </div>
                    <div className="nasa__project-info">
                        <h5>Organizations</h5>
                        <img src={process.env.PUBLIC_URL + "/logos/crc.png"} alt="Logo of Consejo Regional Indigena del Cauca" />
                        <img src={process.env.PUBLIC_URL + "/logos/icesi.svg"} alt="Logo of Universidad ICESI" />
                    </div>
                </nav>
                <article className="nasa__project-challenge half-container spacing-10vh">
                    <p className="heading_1 left">Our Challenge</p>
                    <p className="paragraph_1 right">
                        Create a digital solution that satisfy language engagement/learning and digital literacy in kids between 9 - 12. The product is going to be used in a rural environment with limited resources (No internet access and toaster technology).
                    </p>
                </article>
                <article className="nasa__project-approach spacing-10vh">
                    <div className="half-container">
                        <p className="heading_1 left">Our approach</p>
                        <p className="paragraph_1 right text-left">
                            This project was a clear possibility for use the <strong><a href="https://www.designcouncil.org.uk/news-opinion/what-framework-innovation-design-councils-evolved-double-diamond" target="blank">double diamond methodology</a></strong>. The need to represent a complex problem as the appropriation, engagement and learning of an indigenous language as <strong><a href="http://talkingdictionary.swarthmore.edu/paez/?lang=es" target="blank">Nasa Yuwe</a></strong> and the digital literacy, gave us the opportunity to create a research pipeline to get those insights that will converge in concrete digital product.
                    </p>
                    </div>
                    <article className="nasa__project-discover">
                        <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/common/project_diamond-diagram.png"} alt="Double Diamond diagram" />
                        <div className="text-container text-centered column spacing-5vh">
                            <div className="line-a"></div>
                            <p className="heading_list">Discover<br /><span role="img" aria-label="magnifying glass">🔎</span></p>
                            <p className="paragraph_1">
                                The first step here was defining What?, Why? and Where?. Three “simple questions” that gonna guide us into the real user, context and purpose.
                            </p>
                        </div>
                        <div className="nasa__project-information wide-90 column">
                            <div className="nasa__project-info a spacing-5vh">
                                <h2>What?</h2>
                                <p className="paragraph_list sca-75">The real concern it’s the preservation of a language, centuries of history and the community core. <br /><p></p><br />
                                The stories, the myths and the life that we could lose if we don’t preserve the orality.
                                </p>
                            </div>
                            <div className="nasa__project-info b spacing-5vh">
                                <h2>Why?</h2>
                                <p className="paragraph_list sca-75">Colombia is one of the most cultural diverse countries, for that reason the preservation of a language it’s a really important task for us.<br /><p></p><br />The community itself recognize the low engagement showed by its students to learn Nasa Yuwe. <br /><p></p><br /> The oral tradition in this little towns and communities it’s pretty important, specially if we’re talking about the firsts steps in education in a rural context.
                                </p>
                            </div>
                            <img src="" alt="" />
                            <div className="nasa__project-info c spacing-5vh">
                                <h2>Where?</h2>
                                <p className="paragraph_list sca-75">There’s no better way to understand the people you’re designing for than by immersing yourself into their lives and communities. <br /><p></p><br /> To give you some context, it’s 2017, one year after <strong><a href="https://www.nytimes.com/2016/09/27/world/americas/colombia-farc-peace-agreement.html" target="blank">the final agreement to end the armed conflict in Colombia</a></strong>.<br /><p></p><br />Cauca is one of the most affected regions by this conflict. Over 40 years of resistance by the Nasa community in its territories have delayed this communities to access new technologies and literacy tools.
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="nasa__project-define">
                        <div className="text-container spacing-5vh text-centered column">
                            <div className="line-b"></div>
                            <p className="heading_list">Define<br /><span role="img" aria-label="vote">🗳️</span></p>
                            <p className="paragraph_1">
                                We can imagine the language learning as a possibility to engage a strong methodology based on didactic elements, but the challenge suggest use the technology as an instrument of digital literacy in kids. So the mainly instrument for this metaphor would be the screen. <br /> <br />
                                After a big research we can define our goals in four main insights.
                        </p>
                        </div>
                        <div className="mostly-container spacing-5vh-bottom">
                            <p className="heading_1 left text-centered">1</p>
                            <div className="text-container">
                                <h5>The cultural representation.<span role="img" aria-label="Mountains">🌄</span></h5>
                                <p className="paragraph_1 right">
                                    The product needs to follow the colors, the language, the social hierarchy, the rules and the meaning of the community.
                                </p>
                            </div>
                        </div>
                        <div className="mostly-container spacing-5vh-bottom">
                            <p className="heading_1 left text-centered">2</p>
                            <div className="text-container">
                                <h5>Creating literacy tools rather than complex products.<span role="img" aria-label="Dizzy face">😵</span></h5>
                                <p className="paragraph_1 right">
                                    This is the core of the project. It’s very important that kids can improve organically from the bottom; learning and practicing the Nasa Yuwe language foundations (Food, colors and animals) and easily jump to complex interactions (Recognizing roles and social hierarchy).
                                </p>
                            </div>
                        </div>
                        <div className="mostly-container spacing-5vh-bottom">
                            <p className="heading_1 left text-centered">3</p>
                            <div className="text-container">
                                <h5>The teacher as a guide for the student.<span role="img" aria-label="Teacher">👩‍🏫</span></h5>
                                <p className="paragraph_1 right">
                                    The focal point, the most reliable interaction; master and pupil. Here the student has a familiar experience, being guide by someone who really knows who you are. This is a powerful metaphor, connect the digital world with the kids reality itself. It’s really gorgeous see how the kids look at his teacher in a tiny computer, they smile, they laugh, they enjoy interact with something familiar, something that really exists.
                                </p>
                            </div>
                        </div>
                        <div className="mostly-container spacing-5vh-bottom">
                            <p className="heading_1 left text-centered">4</p>
                            <div className="text-container">
                                <h5>The fun factor.<span role="img" aria-label="Party">💃🎉</span></h5>
                                <p className="paragraph_1 right">
                                    We’re talking about kids, we need to think in ways to create engagement. Learning through play it’s one of the best strategies for educational activities. Offering minigames about the animals, the colors, the food, foundation stories, myths, legends and the sense of community.
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="nasa__project-develop">
                        <div className="text-container spacing-5vh text-centered column">
                            <div className="line-c"></div>
                            <p className="heading_list">Develop<br /><span role="img" aria-label="Developer">👩‍💻</span></p>
                        </div>
                        <div className="text-container text-centered column">
                            <p className="paragraph_1">
                                The creation of cultural product has to accomplish many aspects, and with the definition of what we need to do, it’s time to make it real.
                            </p>
                            <p className="paragraph_1">
                                We decided to create minigames about the core elements we found in the previous stage, such like: Colors, fruits and food, Roles in the community and finally, the foundation myth.
                            </p>
                        </div>
                        <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/nasa/project/nasa_project_difficulty.png"} alt="Difficulty chart" />
                        <div className="text-container text-centered column">
                            <p className="paragraph_1">
                                We defined an organic growth the games, a learning curve from the most basic expressions to more complex sentences and  meaning.
                            </p>
                            <p className="paragraph_1"><strong>So, my work intensifies here.</strong></p>
                            <p className="paragraph_1">There were weeks where learning new words was daily, staying in touch with the teacher, asking about every step forward I take, being careful and not making any mistakes that can offend the community.</p>
                        </div>
                        <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/nasa/project/nasa_project_words.png"} alt="Words in Nasa Yuwe language" />
                        <div className="text-container text-centered column">
                            <p className="paragraph_1">
                                I created a list of words and a bunch of wireframes trying to create each interaction with the level that it needs.
                            </p>
                        </div>
                        <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/nasa/project/nasa_project_wireframes.png"} alt="Wireframes of the main screens" />
                        <div className="text-container text-centered column">
                            <p className="paragraph_1">
                                After defining every single word, every single term, every single story that we wanted to share, was possible creating the art for the game.
                            </p>
                            <p className="paragraph_1">
                                One of the most important activities that we made in field was draw with the kids, we wanted to get how the identify themselves, how they see each other, how they draw their house, the colors they use and every single aspect that we can find to elaborate and create something that really represents the community.
                            </p>
                        </div>
                        <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/nasa/project/nasa_project_draws.png"} alt="Kids draws" />
                    </article>
                </article>
                <article className="nasa__project-deliver">
                    <div className="text-container spacing-5vh text-centered column">
                        <div className="line-d"></div>
                        <p className="heading_list">Deliver<br /><span role="img" aria-label="Mail-box">📬</span></p>
                    </div>
                    <div className="text-container text-centered column">
                        <p className="paragraph_1">
                            After a huge effort we get what we want to create, now was time to develop an easy and lite program that a toaster can run … Well, this wasn’t that easy at all.
                        </p>

                    </div>
                    <img className="nasa__project-deliver-img column" src={process.env.PUBLIC_URL + "/images/projects/nasa/project/nasa_project_laptop-interface.png"} alt="Old laptop displaying home-screen interface" />
                    <div className="text-container text-centered column spacing-5vh">
                        <p className="paragraph_1">
                            We created the software and after all, we deliver a version that we were proud of. We went again to La primavera, but … nothing works properly.
                        </p>
                    </div>
                    <img className="nasa__project-deliver-img column" src={process.env.PUBLIC_URL + "/images/projects/nasa/project/nasa_project_school.jpg"} alt="Community school" />
                    <div className="half-container spacing-5vh">
                        <div className="left text-container text-centered">
                            <p className="paragraph_1 wide-90">
                                The computers needed the newest version of Java; well, this is not a big problem if you have an internet connection … but this time we were in the middle of a mountain, internet it’s not a possibility.
                            </p>
                        </div>
                        <div className="right text-container text-centered">
                            <p className="paragraph_1 wide-90">
                                Computers having a lot of errors due connection issues, architecture of software incompatibilities an God knows a lot of other little issues.
                            </p>
                        </div>
                    </div>
                    <div className="left text-container text-centered">
                        <p className="paragraph_1">
                            Fortunate, after many hours we can ran the software and the kids were pretty happy about it.
                        </p>
                    </div>
                </article>
                <article className="nasa__project-learning spacing-10vh">
                    <div className="half-container">
                        <div className="left">
                            <p className="heading_1">So, <br /> What I learned? <br /> <span role="img" aria-label="Thinking face">🤔</span></p>
                        </div>
                        <div className="right">
                            <p className="paragraph_1">
                                There’s something special when you work for a community. The kids enjoying something that you’ve created for them, the gratitude that we received and the satisfaction for creating a tool for learning an essential cultural topic.
                                <br />
                                <br />
                                One of the greatest lessons I learned through this project, was the ability to get insights from an unknown culture, everything was new for me; the language, the meaning of nature, the relationship with the soil, the social hierarchy and the resilience of a whole community.
                                <br />
                                <br />
                                Another great lesson was the ability to create from the inevitable “clash of cultures” between two different world interpretations.
                                <br />
                                <br />
                                It’s important to understand your user and provide them with tools that mold into the cultural stamp and do not allow our cosmology prevail over theirs.
                            </p>
                        </div>
                    </div>
                </article>
                <footer className="nasa__project-greeting spacing-10vh-bottom">
                    <div className="text-container text-centered column">
                        <p className="heading_1 spacing-none">
                            That's all folks!
                        </p>
                        <p className="paragraph_1">
                            Thanks for being here with me, <br /> I appreciate it. <span role="img" aria-label="Happy face">😊</span>
                        </p>
                    </div>
                </footer>
                <div className="right text-right spacing-10vh-bottom">
                    <Link to="/projects/cognosis">
                        <h2>Check out this health project<span role="img" aria-label="Brain">🧠</span></h2>
                        <img className="img-small-vertical-right rotated" src={process.env.PUBLIC_URL + "/icons/arrow.svg"} alt="Blue Arrow" />
                    </Link>
                </div>
            </main>
        );
    }
}

export default Nasa; 