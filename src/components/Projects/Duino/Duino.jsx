import React, { Component } from 'react';
import Banner from '../Template/01Banner/Banner'
import Intro from '../Template/02Intro/Intro';
import Info from '../Template/03Info/Info';
import Met from '../Template/04Met/Met';
import Discover from '../Template/05Discover/Discover';
import Define from '../Template/06Define/Define';
import Learn from '../Template/07Learn/Learn';
import ProjectFarewell from '../Template/ProjectFarewell/ProjectFarewell';
import ProjectList from '../Template/ProjectList/ProjectList';
import ProjectShowcase from '../Template/ProjectShowcase/ProjectShowcase';

class A extends Component {
    render() {
        return (
            <main className="project">
                <Banner
                    project__emoji={"👽"} project__emoji_arialabel={"Alien"}
                    project__tittle={"Duino, an alien who teaches electronics in kids."} project__description={"Universo de Duino"}
                    project__route_gradient={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/duino_gradient.jpg)'}
                ></Banner>
                <Intro
                    project__intro={[<strong>Universo de Duino</strong>, ", was born in response to the paradigm shift in the education system.  The democratisation of technology and the big transfer between generations were the key element that supports this creation. A book with the basic elements to understand the “New world” and new fellas to build, share and explore the world of electronics."]}
                ></Intro>
                <Info
                    project__client={["Semillero 418", <br></br>, "Universidad Icesi", <br></br>, "Editorial Universidad Icesi"]}
                    project__role={["🔴🟠 UX Research", <br></br>, "🟢🔵 UX Design"]}
                    project__timeframe={"2017 - 2020"}
                ></Info>
                <section className="project__met">
                    <Met
                        met__emoji={"🎯"} met__emoji_arialabel={"A dart board with dart hitting the center / bullseye region"}
                        met__tittle={"Our Challenge"} met__text={["Learning electronics it’s a very complex and quite boring activity. It’s necessary understand natural phenomena and apply math in many cases. For a kid this have to be a big nightmare.", <br></br>, <br></br>, "That’s why in 418 Media Lab we wanted to tackle this problem, and create a way where kids can learn electronics without dying of boredom ", <span role="img" aria-label="Bored face">🥱</span>, " or exploding their minds ", <span role="img" aria-label="Exploding head">🤯</span>, " trying to learn how to create from scratch a lunar rover."]}
                    ></Met>
                    <Met
                        met__emoji={"🔍"} met__emoji_arialabel={"A classic magnifying glass"}
                        met__tittle={"Our Approach"} met__text={["Well, this time we wanted to change our approach by trying a new methodology to research and get those insights.", <br></br>, "So, for that, we aimed to answer the next question:", <br></br>, <br></br>, <h2>What’s the first time that a kid has contact with electronics?</h2>, <br></br>, "Well, it’s not as easy as we thought it would be. We got two possible answers:", <br></br>, <br></br>, <h2>The death of a toy.</h2>, <br></br>, "A crushed toy with all the electronics exposed, this would be a nightmare for parents ", <i>(Who spent a thousands bucks in that shiny robotic dog)</i>, ", but for the kid it’s mind blowing experience because of the questions inside it’s mind. You can barely hear what would be the next words of that child “Dad, What’s inside the robot?”", <br></br>, <br></br>, <h2>A boring book.</h2>, <br></br>, "The boring and complex book full of diagrams that no one understands.", <br></br>, "That’s it, a book full diagrams and weird words. A frustrating way to learn for a kid and a weak tool for teacher."]}
                    ></Met>
                </section>
                <Discover
                    discover__emoji={"🔴"} discover__emoji_arialabel={"Red circle"}
                    discover__tittle={"What we discovered"} discover__text_intro={["With that on mind we did some research work in the following way:", <br></br>, <br></br>, "First of all, defining What?, Why? and Where?", <br></br>, <br></br>, "Three “simple questions” that gonna guide us into the real user, context and purpose."]}
                    discover__text_what={["Knowledge! Nowadays it’s important to know the things that we use everyday, the same way a Doctor knows what’s inside us (humans).", <br></br>, "It’s important that a kid can easily learn what’s inside and how works the smartphone they use, the toy that they play with and many other things."]}
                    discover__text_why={["Understanding phenomena it’s the foundation of science. Solving the questions a kid does creates the perfect conditions to feed their imagination, a curiosity for understanding and provide them useful tools."]}
                    discover__text_where={["We need erase the idea of the school as the only place that a kid can learn, practice their abilities or be creative. Our house it’s a perfect sandbox for a curious mind and we need to provide a great tool for both environments."]}
                ></Discover>
                <Define
                    define__emoji={"🟠"} define__emoji_arialabel={"Orange circle"}
                    define__tittle={"What we defined"} define__text_intro={["This time defining it’s very difficult, but the insights we got were pretty helpful.", <br></br>, "This is what we find out."]}
                ></Define>
                <section className="project__insights">
                    <div className="col-12 project__define-list">
                        <ProjectList
                            list__emoji={"😜"} list__emoji_arialabel={"Winking face"}
                            list__tittle={"Creating engagement in kids"} list__number={"1"}
                            list__text={["Being an adult and trying to make a kid enjoy the things you like it’s … you know, the perfect moment for a kid to say “Ok, boomer”.", <br></br>, "This is bigger than making colorful cartoons or talking with baby voice because they’re not dumb, instead they’re pretty brilliant!"]}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"🤦‍♀️"} list__emoji_arialabel={"Slap face"}
                            list__tittle={"Keep it simple, stupid"} list__number={"2"}
                            list__text={["Keeping the essentials, but not saturate with non-necessary information.", <br></br>, "A kid needs to know how the energy flows, but it’s not necessary know how to apply the Ohm’s law."]}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"📺"} list__emoji_arialabel={"TV"}
                            list__tittle={"It’s not just about electronics"} list__number={"3"}
                            list__text={"This what we’re looking for solutions. Kids doesn’t want something only about electronics, they need something else, something that matters for them."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"🖍️"} list__emoji_arialabel={"Crayon"}
                            list__tittle={"Learning to create"} list__number={"4"}
                            list__text={"One important aspect is that a kid after learning about electronics can easily create and use that information to produce whatever they want to."}
                        ></ProjectList>
                    </div>
                </section>
                <ProjectShowcase
                    develop__emoji={"🔵🟢"} develop__emoji_arialabel={"Blue and green circles"}
                    develop__tittle={"What we developed and delivered"} develop__text_intro={["Ideas, and ideas, testing, sharing and improving what we discuss.", <br></br>, <br></br>, "It wasn’t that easy to built the story, this was a tough section because we had to make a strong effort in simplifying electronic concepts and embed them into the narrative in a seamless way.", <br></br>, <br></br>, "Our challenge, create in notebook format a circuit that included all the necessary connections to work, using the less amount of materials and giving the kid, space to work with.", <br></br>, <br></br>, "We decided to give enough quantity of levels to supply an interesting story, an easy learning curve and complex circuits with deeper outcomes (Like Sound, Music, Microcontrollers, etc)."]}
                    showcase__img_a={process.env.PUBLIC_URL + "/images/projects/duino/duino_story.png"} showcase__img_a_alt={"Two Aliens talking, and working"}
                    showcase__tittle_a={"A great story"} showcase__text_a={"A book full of stories, characters and quite nice people. A book full of challenging exercises. A complete kit with all the necessary to easily play and challenge yourself."}
                    showcase__img_main={process.env.PUBLIC_URL + "/images/projects/duino/duino_book.png"} showcase__img_main_alt={"a book with a circuit board in it"}
                    showcase__img_b={process.env.PUBLIC_URL + "/images/projects/duino/duino_illustration.png"} showcase__img_b_alt={"Two Aliens an a Girl, in front of a command center"}
                    showcase__tittle_b={"Illustrative"} showcase__text_b={["We are very glad to collaborate with ", <strong><a href="https://www.instagram.com/jedidiah.home/">Jedidias Zapata</a></strong>, " to illustrate our story, we’ve evolutionated in many aspects such as illustration, circuits optimization, storytelling improvements and changes in the resources we need to accomplish our goal of provide a valuable and funny adventure for kids.", <br></br>, <br></br>, "Also, we’re glad to announce that we can publish “Universo de Duino” in a near future thanks to ", <strong><a href="https://www.icesi.edu.co/editorial/" target="blank">Editorial Icesi.</a></strong>]}
                ></ProjectShowcase>
                <Learn
                    learn__tittle={["So,", <br></br>, "What I learned", <br></br>, <span role="img" aria-label="Thinking face">🤔</span>]}
                    learn__text={["The moment I began in this project I can’t properly imagined how big and how complex create this kind of experiences can be.", <br></br>, <br></br>, "I’ve never thought how many variables are necessary to accomplish some basic tasks or even design a pattern for a circuit (Easy if you use a regular breadboard and wire circuit).", <br></br>, <br></br>, "Kids. Trying to guess what’s inside their mind, how they think, how the learn, what they like and other kind of things that were important to develop a suitable solution.", <br></br>, <br></br>, "It’s gratifying as designers to see how our products are used, but this time it’s going to take more time that we expected. I wait that moment with so much hype.", <br></br>, <br></br>, <h2>Let me tell you about <a href="https://www.instagram.com/semillero418/" target="blank"><br /><span role="img" aria-label="Coffee mug" style={{ color: "#6ae2c6" }}>418 Media Lab ☕</span></a></h2>, <br></br>, "Specially what we do.", <br></br>, <br></br>, "We’re a group of designers and artists with an special thing in common “We love electronics”. We’ve created a community that share, teach, create and solve problems based on the electronics.", <br></br>, <br></br>, "Our work is pretty diverse; from wearables solutions like ", <strong><a href="https://mariangelaaponte.com/portfolio/samay/" target="blank">Samay</a></strong>, ", a book “Universo de Duino” and, currently, we’re working on a project related to air pollution."]}
                ></Learn>
                <ProjectFarewell
                    next__tittle={"Checkout this Job employment project"}
                    next__route={'/projects/eficacia'}
                ></ProjectFarewell>
            </main >
        );
    }
}

export default A;