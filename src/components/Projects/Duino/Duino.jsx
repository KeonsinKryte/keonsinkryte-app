import React, { Component } from 'react';

class Duino extends Component {
    render() {
        return (
            <main className="duino__project">
                <article className="duino__project-description">
                    <div className="duino__project-information-header">
                        <div className="duino__project-decoration"><span>👽</span></div>
                        <div className="duino__project-title">
                            <p className='heading_1'>Duino, an alien who teaches electronics in kids. <br />New ways of learning</p>
                            <p className="heading_2">Universo de Duino</p>
                        </div>
                    </div>
                    <div className="text-container text-centered spacing-10vh-top">
                        <p className="paragraph_1">
                            <strong>Universo de Duino</strong>, was born in response to the paradigm shift in the education system.  The democratisation of technology and the big transfer between generations were the key element that supports this creation. A book with the basic elements to understand the “New world” and new fellas to build, share and explore the world of electronics.
                        </p>
                    </div>
                </article>
                <nav className="duino__project-information spacing-5vh">
                    <div className="duino__project-info">
                        <h5>Timeframe</h5>
                        <p className="paragraph_list">2017 - 2020</p>
                    </div>
                    <div className="duino__project-info">
                        <h5>Role</h5>
                        <p className="paragraph_list">UX Researcher, UX writer and insights collector</p>
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
                        Learning electronics it’s a very complex and quite boring activity. It’s necessary understand natural phenomena and apply math in many cases. For a kid this have to be a big nightmare. That’s why in 418 Media Lab we wanted to tackle this problem, and create a way where kids can learn electronics without dying of boredom <span>🥱</span> or exploding their minds <span>🤯</span> trying to learn how to create from scratch a lunar rover.
                    </p>
                </article>
                <article className="duino__project-approach spacing-10vh">
                    <div className="half-container">
                        <p className="heading_1 left">Our approach</p>
                        <div className="right">
                            <p className="paragraph_1 text-left">
                                Well, this time we wanted to change our approach by trying a new methodology to research and get those insights. <br />
                                So, for that, we aimed to answer the next question:
                            </p>
                            <h5>What’s the first time that a kid has contact with electronics?</h5>
                        </div>
                    </div>
                    <div className="text-container text-centered column spacing-5vh-top">
                        <p className="paragraph_1">
                            Well, it’s not as easy as we thought it would be. <br />
                            We got two possible answers:
                        </p>
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_approach.png"} alt="" />
                    <div className="half-container">
                        <div className="left spacing-5vh-left">
                            <h5>The death of a toy.</h5>
                            <p className="paragraph_1 wide-90">
                                A crushed toy with all the electronics exposed, this would be a nightmare for parents <i>(Who spent a thousands bucks in that shiny robotic dog)</i>, but for the kid it’s mind blowing experience because of the questions inside it’s mind. You can barely hear what would be the next words of that child “Dad, What’s inside the robot?”
                            </p>
                        </div>
                        <div className="right spacing-5vh-left">
                            <h5>A boring book.</h5>
                            <p className="paragraph_1">
                                The boring and complex book full of diagrams that no one understands. <br />
                                That’s it, a book full diagrams and weird words. A frustrating way to learn for a kid and a weak tool for teacher.
                            </p>
                        </div>
                    </div>
                    <div className="text-container text-centered column spacing-5vh-top">
                        <p className="paragraph_1">
                            With that on mind we did some research work in the following way:
                        </p>
                    </div>
                </article>
                <article className="duino__project-discover">
                    <div className="text-container text-centered column spacing-5vh">
                        <div className="line-a"></div>
                        <p className="heading_list">Discover<br /><span>🔎</span></p>
                    </div>
                    <div className="text-container text-centered column">
                        <p className="paragraph_1">
                            First of all, defining What?, Why? and Where?. <br />
                            Three “simple questions” that gonna guide us into the real user, context and purpose.
                        </p>
                    </div>
                    <div className="duino__project-information wide-90 column">
                        <div className="duino__project-info a spacing-5vh">
                            <h2>What?</h2>
                            <p className="paragraph_list sca-75">
                                Knowledge! Nowadays it’s important to know the things that we use everyday, the same way a Doctor knows what’s inside us (humans). <br /> <br />
                                It’s important that a kid can easily learn what’s inside and how works the smartphone they use, the toy that they play with and many other things.
                            </p>
                        </div>
                        <div className="duino__project-info b spacing-5vh">
                            <h2>Why?</h2>
                            <p className="paragraph_list sca-75">
                                Understanding phenomena it’s the foundation of science. Solving the questions a kid does creates the perfect conditions to feed their imagination, a curiosity for understanding and provide them useful tools.
                            </p>
                        </div>
                        <img src="" alt="" />
                        <div className="duino__project-info c spacing-5vh">
                            <h2>Where?</h2>
                            <p className="paragraph_list sca-75">
                                We need erase the idea of the school as the only place that a kid can learn, practice their abilities or be creative. Our house it’s a perfect sandbox for a curious mind and we need to provide a great tool for both environments.
                            </p>
                        </div>
                    </div>
                    <div className="text-container text-centered column">
                        <p className="paragraph_1">
                            Then, trying to be a kid, looking for what they do and how they learned. <br /> <br /> For that, we went to schools, libraries and talked with parents and teachers about what the kids really liked and how they learned.
                            <br />
                            <br />
                            This is what we find out.
                        </p>
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_books.png"} alt="" />
                    <div className="half-container">
                        <div className="left spacing-5vh-left">
                            <h5>
                                "Gira las tablas de multiplicar"
                                <br />
                                <a href="https://www.sunshine.co.nz/paula-martyr/" target="blank">
                                    <i>by: Paula Martyr (1995)</i>
                                </a>
                            </h5>
                        </div>
                        <div className="right spacing-5vh-left">
                            <h5>We found some interesting things.</h5>
                            <p className="paragraph_1">
                                Kids (5 - 9) are interested in foldable books, comics, books with rounded corners and wiring spiral <i>(We still trying to figuring out why)</i> books with things that they can touch, like this book (Book to learn how to multiply shown in the image) teachers says that book is the best one to teach the multiplication tables.
                                <br />
                                <br />
                                We believe that the interaction component helps a lot in the reinforcement of an specific topic.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="duino__project-define">
                    <div className="text-container spacing-5vh text-centered column">
                        <div className="line-b"></div>
                        <p className="heading_list">Define<br /><span>🗳️</span></p>
                        <p className="paragraph_1">
                            This time defining it’s very difficult, but the insights we got were pretty helpful.
                        </p>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">1</p>
                        <div className="text-container">
                            <h5>Creating engagement in kids.<span>😜</span></h5>
                            <p className="paragraph_1 right">
                                Being an adult and trying to make a kid enjoy the things you like it’s … you know, the perfect moment for a kid to say “Ok, boomer”. This is bigger than making colorful cartoons or talking with baby voice because they’re not dumb, instead they’re pretty brilliant!
                            </p>
                        </div>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">2</p>
                        <div className="text-container">
                            <h5>Keep it simple, stupid. <span>🤦‍♀️</span></h5>
                            <p className="paragraph_1 right">
                                Keeping the essentials, but not saturate with non-necessary information (at this level). A kid needs to know how the energy flows, but it’s not necessary know how to apply the Ohm’s law.
                            </p>
                        </div>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">3</p>
                        <div className="text-container">
                            <h5>It’s not just about electronics.📺<span></span></h5>
                            <p className="paragraph_1 right">
                                This what we’re looking for solutions. Kids doesn’t want something only about electronics, they need something else, something that matters for them.
                            </p>
                        </div>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">4</p>
                        <div className="text-container">
                            <h5>Learning to create.<span>🖍️</span></h5>
                            <p className="paragraph_1 right">
                                One important aspect is that a kid after learning about electronics can easily create and use that information to produce whatever they want to.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="duino__project-develop">
                    <div className="text-container spacing-5vh text-centered column">
                        <div className="line-c"></div>
                        <p className="heading_list">Develop<br /><span>👩‍💻</span></p>
                        <p className="paragraph_1">
                            Ideas, and ideas, testing, sharing and improving what we discuss.
                        </p>
                    </div>
                    <div className="text-container text-centered column">
                        <p className="paragraph_1">
                            Making a deep research about what other peers have created trying to solve the complex task of teaching electronics. We were pretty glad to discover the work made by <strong><a href="http://technolojie.com/circuit-sticker-sketchbook/" target="blank">Jie Qi</a></strong> and the <strong><a href="https://www.media.mit.edu" target="blank">MIT Media Lab.</a></strong>
                            <br />
                            <br />
                            The Circuit Sticker Sketchbook is a book that use the basics on electronics to create a really fun experience, using the paper as a powerful tool.
                        </p>
                        <p className="paragraph_1">
                            After that, we clearly wanted to create a big and robust story using Circuits on paper like little dots that worked as little missions that helped the story to develop itself.
                        </p>
                        <p className="paragraph_1">
                            But, Why? Well, the answer to that question was the research itself.
                            <br />
                            <br />
                            With that scheme on mind, it’s time to make it real:
                        </p>
                    </div>
                    <div className="half-container">
                        <img className="img-left" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_story.png"} alt="" />
                        <div className="right spacing-5vh-left duino__project-develop-story">
                            <h5>The story and the purpose. <br /> What we want to tell. <br /> What's around the book.</h5>
                            <p className="paragraph_1">
                                For us was very easy to put things together, specially around the topic.
                                <br />
                                <br />
                                Yeah! Aliens <span>👽</span>, space <span>👩‍🚀</span>, technology <span>⚙️</span>, friendship <span>🤝</span> and even an evil character <span>🦹‍♀️</span>; The old wiser one <span>👴</span>.
                                <br />
                                <br />
                                The ingredients of a fantastic story, buuut we can’t have an adventure without you (I mean, the kid). So, put your boots on, wash your hands <i>(Yeah, this was written in Covid times)</i> and let’s begin!
                            </p>
                            <img className="img-centered" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_story-bg.png"} alt="" />
                        </div>
                    </div>
                    <div className="half-container">
                        <div className="left spacing-5vh-left">
                            <h5>The knowledge.<br />  What we want to teach. <br /> What's on the book.</h5>
                            <p className="paragraph_1">
                                It wasn’t that easy to built the story, this was a tough section because we had to make a strong effort in simplifying electronic concepts and embed them into the narrative in a seamless way.
                            </p>
                        </div>
                        <img className="img-right" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_knowledge.png"} alt="" />
                    </div>
                    <div className="half-container">
                        <img className="img-left" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_challenge.png"} alt="" />
                        <div className="right spacing-5vh-left">
                            <h5>The challenge.<br /> How we going to evaluate what we teach. <br /> Circuits on paper.</h5>
                            <p className="paragraph_1">
                                Create circuits on paper, it’s from far easy as it looks. It was a complete nightmare trying to create a connection without creating a really big mess.
                                <br />
                                <br />
                                Our challenge, create in notebook format a circuit that included all the necessary connections to work, using the less amount of materials and giving the kid, space to work with.
                            </p>
                        </div>
                    </div>
                    <div className="text-container text-centered column">
                        <p className="paragraph_1">
                            We decided to give enough quantity of levels to supply an interesting story, an easy learning curve and complex circuits with deeper outcomes (Like Sound, Music, Microcontrollers, etc).
                        </p>
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/duino/project/duino_project_circuit.png"} alt="" />
                </article>

                <article className="duino__project-deliver">
                    <div className="text-container spacing-5vh text-centered column">
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