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

class Bancoomeva extends Component {
    render() {
        return (
            <main className="project">
                <Banner
                    project__emoji={"💸"} project__emoji_arialabel={"A banded stack of U.S. dollar bills with feather wings, as if flying"}
                    project__tittle={"Banking for Millennials"} project__description={"Semillero Bancoomeva™"}
                    project__route_gradient={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/bancoomeva_gradient.jpg)'}
                ></Banner>
                <Intro
                    project__intro={[<strong>Semillero Bancoomeva™</strong>, " was a bet from Bancoomeva to get onboard millennials into the banking system. Bancoomeva was suffering a low product engagement within this population and wanted to create novel products that matter for them."]}
                ></Intro>
                <Info
                    project__client={["Bancoomeva", <br></br>, "Grupo Coomeva", <br></br>, "UX Lab Icesi"]}
                    project__role={["🔴🟠 Service Design", <br></br>, "🟢 Design Strategy"]}
                    project__timeframe={"2018"}
                ></Info>
                <section className="project__met">
                    <Met
                        met__emoji={"🎯"} met__emoji_arialabel={"A dart board with dart hitting the center / bullseye region"}
                        met__tittle={"Our Challenge"} met__text={"Create a novel product that creates and supports millennials in their firsts steps into the banking system. A product that can be profitable for the bank and create attractive for young adults."}
                    ></Met>
                    <Met
                        met__emoji={"🔍"} met__emoji_arialabel={"A classic magnifying glass"}
                        met__tittle={"Our Approach"} met__text={"We figure out that this time was a little bit sketchy to try to create something for people “Like us” and don’t build an ego monument of what we like as individuals."}
                    ></Met>
                </section>
                <Discover
                    discover__emoji={"🔴"} discover__emoji_arialabel={"Red circle"}
                    discover__tittle={"What we discovered"} discover__text_intro={["It’s time to tell you what we’ve discovered in a year working on this project.", <br></br>, <br></br>, "First of all, defining What?, Why? and Where?", <br></br>, <br></br>, "Three “simple questions” that gonna guide us into the real user, context and purpose."]}
                    discover__text_what={["Support and trust!! That’s what brings us here. Banks generally don't support small entrepreneurs, young people, or students.", <br></br>, <br></br>, "That creates a big trench between the banking system and young people that barely can access it."]}
                    discover__text_why={"It’s important that young people can easily access the banking system, which brings them a foundation to build up a career and access to funding to become reality new ideas."}
                    discover__text_where={"The Colombia banking system is full of paperwork and economic obstacles for young people to access any kind of product due to the “risk” associated with them."}
                ></Discover>
                <Define
                    define__emoji={"🟠"} define__emoji_arialabel={"Orange circle"}
                    define__tittle={"What we defined"} define__text_intro={"This time defining it’s very difficult, but the insights we got were pretty helpful."}
                ></Define>
                <section className="project__insights">
                    <div className="col-12 project__define-list">
                        <ProjectList
                            list__emoji={"🤑"} list__emoji_arialabel={"A yellow face with raised eyebrows, dollar signs for eyes, and an open smile sticking out a tongue styled after a green, dollar banknote."}
                            list__tittle={"Profitable"} list__number={"1"}
                            list__text={"Businesses are businesses, the bank needs to invest in products that can easily guaranty an ROI."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"⚖️"} list__emoji_arialabel={"A balance scale, as historically used to measure weight."}
                            list__tittle={"Financial independence and stability"} list__number={"2"}
                            list__text={"Millennials need a financial foundation that can help them to build new businesses, get new skills or support future goals."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"🤝"} list__emoji_arialabel={"Two hands performing a handshake gesture, indicating a cordial greeting between friends or associates."}
                            list__tittle={"Cooperation"} list__number={"3"}
                            list__text={"Some things are only obtainable when you have support from others (Friends, family, coworkers."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"😇"} list__emoji_arialabel={"A yellow face with smiling eyes, closed smile, and halo, usually blue, overhead."}
                            list__tittle={"My First Time"} list__number={"4"}
                            list__text={"You can’t get experience if you can’t access the system. We know, young people deserve an opportunity."}
                        ></ProjectList>
                    </div>
                </section>
                <ProjectShowcase
                    develop__emoji={"🔵🟢"} develop__emoji_arialabel={"Blue and green circles"}
                    develop__tittle={"What we developed and delivered"} develop__text_intro={["Ideas, and ideas, testing, sharing and improving what we discuss.", <br></br>, <br></br>, "We created a loan modality based on mutual aid (Young entrepreneurs and students), through the development of a kind of exclusive crowdfunding platform for young millennials, that generates greater interest in the young banking market."]}
                    showcase__img_a={process.env.PUBLIC_URL + "/images/projects/bancoomeva/bancoomeva_balance.png"} showcase__img_a_alt={"balance, two figures, an orange triangle in the left and a blue square in the right"}
                    showcase__tittle_a={"Balance"} showcase__text_a={"Each funding loan to create a new business by a young entrepreneur it’s going to support with half of its interests to crowdfunding loans for young students."}
                    showcase__img_main={process.env.PUBLIC_URL + "/images/projects/bancoomeva/bancoomeva_landing.png"} showcase__img_main_alt={"graphical user interface, application"}
                    showcase__img_b={process.env.PUBLIC_URL + "/images/projects/bancoomeva/bancoomeva_young.png"} showcase__img_b_alt={"Red hair guy with sunglasses"}
                    showcase__tittle_b={"Be part of my future"} showcase__text_b={"Entrepreneurs can propose a student to the fund, also, read stories and follow the path of the student that supports."}
                ></ProjectShowcase>
                <Learn
                    learn__tittle={["So,", <br></br>, "What I learned ...", <br></br>, <span role="img" aria-label="Thinking face">🤔</span>]}
                    learn__text={["Was a wonderful experience working with people that really felt uncomfortable about their approach to young people. Sometimes, the companies never imagine that their perception is bad in some age groups and never try to change their behavior.", <br></br>, <br></br>, "This time, Bancoomeva was very receptive to what we can tell about their products, communication, and approach. Millennials have some massive problems with accessibility, and the banking system endorses these barriers. This has to end and Bancoomeva wants it too. This mood provides us the trust and back support for making this product possible."]}
                ></Learn>
                <ProjectFarewell
                    next__tittle={"Checkout this editorial project with aliens"}
                    next__route={'/projects/duino'}
                ></ProjectFarewell>
            </main >
        );
    }
}

export default Bancoomeva; 