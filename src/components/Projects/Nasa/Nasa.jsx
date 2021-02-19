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

class Nas extends Component {
    render() {
        return (
            <main className="project">
                <Banner
                    project__emoji={"📚"} project__emoji_arialabel={"Books"}
                    project__tittle={"The preservation of an indigenous language"} project__description={"Yu´a Atsa Piya´a"}
                    project__route_gradient={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/nasa_gradient.jpg)'}
                ></Banner>
                <Intro
                    project__intro={[<strong>Yu´ a Atsa Piya ´a</strong>, ", was a tool/game created for the Nasa indigenous community located in La Primavera, Cauca. This platform works as an interactive method for learning Nasa Yuwe (Native Indigenous language of Nasa’s community) in kids."]}
                ></Intro>
                <Info
                    project__client={["Consejo Regional Indigena del Cauca", <br></br>, "Universidad Icesi"]}
                    project__role={["🔴🟠 UX Research", <br></br>, "🟢🔵 UX Design & UX Writing"]}
                    project__timeframe={["2017"]}
                ></Info>
                <section className="project__met">
                    <Met
                        met__emoji={"🎯"} met__emoji_arialabel={"A dart board with dart hitting the center / bullseye region"}
                        met__tittle={"Our Challenge"} met__text={["Create a digital solution that satisfies language engagement/learning and digital literacy in kids between 9 - 12.", <br></br>, <br></br>, "The product is going to be used in a rural environment with limited resources (No internet access and toaster technology)."]}
                    ></Met>
                    <Met
                        met__emoji={"🔍"} met__emoji_arialabel={"A classic magnifying glass"}
                        met__tittle={"Our Approach"} met__text={["The need to represent a complex problem as the appropriation, engagement, and learning of an indigenous language as ", <strong><a href="http://talkingdictionary.swarthmore.edu/paez/?lang=es" target="blank">Nasa Yuwe</a></strong>, " and the digital literacy, allowed us to create a research pipeline to get those insights that will converge in a concrete digital product."]}
                    ></Met>
                </section>
                <Discover
                    discover__emoji={"🔴"} discover__emoji_arialabel={"Red circle"}
                    discover__tittle={"What we discovered"} discover__text_intro={["It’s time to tell you what we’ve discovered in a year working on this project.", <br></br>, <br></br>, "First of all, defining What?, Why? and Where?", <br></br>, <br></br>, "Three “simple questions” that gonna guide us into the real user, context and purpose."]}
                    discover__text_what={["The real concern it’s the preservation of a language, centuries of history, and the community core.", <br></br>, <br></br>, "The stories, the myths, and the life that we could lose if we don’t preserve the orality."]}
                    discover__text_why={["Colombia is one of the most culturally diverse countries, for that reason the preservation of a language it’s a really important task for us.", <br></br>, <br></br>, "The community itself recognizes the low engagement showed by its students to learn Nasa Yuwe.", <br></br>, <br></br>, "The oral tradition in these little towns and communities it’s pretty important, especially if we’re talking about the firsts steps in education in a rural context."]}
                    discover__text_where={["There’s no better way to understand the people you’re designing for than by immersing yourself in their lives and communities.", <br></br>, <br></br>, "To give you some context, it’s 2017, one year after ", <strong><a href="https://www.nytimes.com/2016/09/27/world/americas/colombia-farc-peace-agreement.html" target="blank">the final agreement to end the armed conflict in Colombia.</a></strong>, <br></br>, <br></br>, "Cauca is one of the most affected regions by this conflict. Over 40 years of resistance by the Nasa community in its territories have delayed these communities to access new technologies and literacy tools."]}
                ></Discover>
                <Define
                    define__emoji={"🟠"} define__emoji_arialabel={"Orange circle"}
                    define__tittle={"What we defined"} define__text_intro={["We can imagine the language learning as a possibility to engage a strong methodology based on didactic elements, but the challenge suggest use the technology as an instrument of digital literacy in kids.", <br></br>, <br></br>, "So, the mainly instrument for this metaphor would be the screen.", <br></br>, <br></br>, "After a big research we can define our goals in four main insights."]}
                ></Define>
                <section className="project__insights">
                    <div className="col-12 project__define-list">
                        <ProjectList
                            list__emoji={"🌄"} list__emoji_arialabel={"Mountains"}
                            list__tittle={"The cultural representation"} list__number={"1"}
                            list__text={"The product needs to follow the colors, the language, the social hierarchy, the rules, and the meaning of the community."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"😵"} list__emoji_arialabel={"Dizzy face"}
                            list__tittle={"Creating literacy tools rather than complex products"} list__number={"2"}
                            list__text={["This is the core of the project. Kids can improve organically from the bottom; learning and practicing the Nasa Yuwe language foundations (Food, colors, and animals) and easily jump to complex interactions (Recognizing roles and social hierarchy)."]}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"👩‍🏫"} list__emoji_arialabel={"Teacher"}
                            list__tittle={"The teacher as a guide for the student"} list__number={"3"}
                            list__text={["The focal point, the most reliable interaction; master and pupil. Here the student has a familiar experience, being guide by someone who knows who you are.", <br></br>, "This is a powerful metaphor, connect the digital world with the kids' reality itself. It’s gorgeous to see how the kids look at their teacher on a tiny computer, they smile, they laugh, they enjoy interacting with something familiar, something that exists."]}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"💃🎉"} list__emoji_arialabel={"Party"}
                            list__tittle={"The fun factor"} list__number={"4"}
                            list__text={["We’re talking about kids, we need to think in ways to create engagement. Learning through play it’s one of the best strategies for educational activities.", <br></br>, "Offering minigames about the animals, the colors, the food, foundation stories, myths, legends, and the sense of community."]}
                        ></ProjectList>
                    </div>
                </section>
                <ProjectShowcase
                    develop__emoji={"🔵🟢"} develop__emoji_arialabel={"Blue and green circles"}
                    develop__tittle={"What we developed and delivered"} develop__text_intro={["Ideas, and ideas, testing, sharing and improving what we discuss.", <br></br>, <br></br>, "The creation of cultural product has to accomplish many aspects, and with the definition of what we need to do, it’s time to make it real."]}
                    showcase__img_a={process.env.PUBLIC_URL + "/images/projects/nasa/nasa_words.png"} showcase__img_a_alt={"Words on Nasa Yuwe language"}
                    showcase__tittle_a={"The Language"} showcase__text_a={"We decided to create minigames about the core elements we found in the previous stage, such as Colors, fruits and food, Roles in the community, and finally, the foundation myth."}
                    showcase__img_main={process.env.PUBLIC_URL + "/images/projects/nasa/nasa_laptop.png"} showcase__img_main_alt={"Laptop running a game"}
                    showcase__img_b={process.env.PUBLIC_URL + "/images/projects/nasa/nasa_draw.png"} showcase__img_b_alt={"Nasa Yuwe Family from left to right: daughter, Grandma, Mom, and Son"}
                    showcase__tittle_b={"Self-recognition"} showcase__text_b={"One of the most important activities that we made in the field was drawing with the kids, we wanted to get how they identify themselves, how they see each other, how they draw their house, the colors they use, and every single aspect that we can find to elaborate and create something that represents the community."}
                ></ProjectShowcase>
                <Learn
                    learn__tittle={["So,", <br ></br>, "What I learned ...", <br></br>, <span role="img" aria-label="Thinking face">🤔</span>]}
                    learn__text={["There’s something special when you work for a community. The kids enjoying something that you’ve created for them, the gratitude that we received, and the satisfaction for creating a tool for learning an essential cultural topic.", <br></br>, <br></br>, "One of the greatest lessons I learned through this project, was the ability to get insights from an unknown culture, everything was new for me; the language, the meaning of nature, the relationship with the soil, the social hierarchy, and the resilience of a whole community.", <br></br>, <br></br>, "Another great lesson was the ability to create from the inevitable “clash of cultures” between two different world interpretations."]}
                ></Learn>
                <ProjectFarewell
                    next__tittle={"Checkout this health project"}
                    next__route={'/projects/incognitus'}
                ></ProjectFarewell>
            </main>
        );
    }
}

export default Nas;