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

class Eficacia extends Component {
    render() {
        return (
            <main className="project">
                <Banner
                    project__emoji={"👔"} project__emoji_arialabel={"A necktie commonly worn at work or formal occasions"}
                    project__tittle={"The integrated platform for employees and job applicants for Eficacia"} project__description={"Eficacia™ Intranet"}
                    project__route_gradient={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/eficacia_gradient.jpg)'}
                ></Banner>
                <Intro
                    project__intro={[<strong>Eficacia™ Intranet</strong>, " Data recollection and management it’s a big headache for companies and recruiters. Creating a clean, easy to use, and meaningful dashboard that helps in this process is necessary to develop the right strategies, hire the correct people at the perfect moment to guarantee a great experience."]}
                ></Intro>
                <Info
                    project__client={["Eficacia", <br></br>, "UX Lab Icesi"]}
                    project__role={["🔴🟠 UX Research", <br></br>, "🟢 UX / UI Design"]}
                    project__timeframe={"2019"}
                ></Info>
                <section className="project__met">
                    <Met
                        met__emoji={"🎯"} met__emoji_arialabel={"A dart board with dart hitting the center / bullseye region"}
                        met__tittle={"Our Challenge"} met__text={"Facilitate recruitment and selection of the right people for the requirements of its customers."}
                    ></Met>
                    <Met
                        met__emoji={"🔍"} met__emoji_arialabel={"A classic magnifying glass"}
                        met__tittle={"Our Approach"} met__text={["We lead research to get those insights that ring us a clue of what’s going on inside the recruitment process.", <br></br>, <br></br>, "For that specific task we: identify which steps were failing, know the client’s perspective, and compare people and the client’s perceptions."]}
                    ></Met>
                </section>
                <Discover
                    discover__emoji={"🔴"} discover__emoji_arialabel={"Red circle"}
                    discover__tittle={"What we discovered"} discover__text_intro={["It’s time to tell you what we’ve discovered in a year working on this project.", <br></br>, <br></br>, "First of all, defining What?, Why? and Where?", <br></br>, <br></br>, "Three “simple questions” that gonna guide us into the real user, context and purpose."]}
                    discover__text_what={"The recruitment process. Such a messy, long and painful process for the recruiter whose job is to split, call, interview, analyze, and select people for its client’s requirements."}
                    discover__text_why={"Companies need a lot of people that are completely unique and Eficacia promises to bring workers that really fit into the job positions."}
                    discover__text_where={"Eficacia headquarters have some problems, they have to analyze a bucket of CVs by hand, then select the first group, call it, then create a final group for interviews. All this, in less than a week."}
                ></Discover>
                <Define
                    define__emoji={"🟠"} define__emoji_arialabel={"Orange circle"}
                    define__tittle={"What we defined"} define__text_intro={"This time defining it’s very difficult, but the insights we got were pretty helpful."}
                ></Define>
                <section className="project__insights">
                    <div className="col-12 project__define-list">
                        <ProjectList
                            list__emoji={"✋"} list__emoji_arialabel={"A hand held up showing its palm."}
                            list__tittle={"Honesty"} list__number={"1"}
                            list__text={"A process based on respect, honesty, and trust. Always within the fulfillment of the law."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"🤯"} list__emoji_arialabel={"A yellow face with an open mouth, the top of its head exploding in the shape of a brain-like mushroom cloud."}
                            list__tittle={"Passion for unexpected results"} list__number={"2"}
                            list__text={"Constantly innovating to generate extraordinary results. We don’t know how unique it is going to be a single person, we have to be prepared."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"🕰️"} list__emoji_arialabel={"An antique-styled mantel clock with a flat base and rounded case, as made of wood and brass and placed above a fireplace."}
                            list__tittle={"It’s the 21st Century"} list__number={"3"}
                            list__text={"Recruiters ", <strong>DO NOT</strong>, " have access to real-time data and real information about the recruitment process."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"🤦🏽"} list__emoji_arialabel={"A hand shown pressing against the head of a person, commonly written as facepalm"}
                            list__tittle={"A blind game"} list__number={"4"}
                            list__text={"Recruiters don’t know in a day if their participants have been already interviewed that day."}
                        ></ProjectList>
                    </div>
                </section>
                <ProjectShowcase
                    develop__emoji={"🔵🟢"} develop__emoji_arialabel={"Blue and green circles"}
                    develop__tittle={"What we developed and delivered"} develop__text_intro={["Ideas, and ideas, testing, sharing and improving what we discuss.", <br></br>, <br></br>, "We created a smart dashboard for recruiters and job applicants to easily give the correct information, automate this process.", <br></br>, <br></br>, "We hope to reduce over 80% of the time wasted in the recruiting process.", <br></br>, "We hope Eficacia continues supporting and giving people an opportunity to get a job."]}
                    showcase__img_a={process.env.PUBLIC_URL + "/images/projects/eficacia/eficacia_a.png"} showcase__img_a_alt={"a man sit on desk working on a computer"}
                    showcase__tittle_a={"Customization it’s the key"} showcase__text_a={"The recruiters can add, save, order, and manage each order. The dashboard can easily be adapted to each recruiter depending on specific requirements."}
                    showcase__img_main={process.env.PUBLIC_URL + "/images/projects/eficacia/eficacia_main.png"} showcase__img_main_alt={"graphical user interface, application"}
                    showcase__img_b={process.env.PUBLIC_URL + "/images/projects/eficacia/eficacia_b.png"} showcase__img_b_alt={"a man and a woman greeting"}
                    showcase__tittle_b={"Cooperation"} showcase__text_b={"It’s important that the recruitment team can easily talk and communicate the process status."}
                ></ProjectShowcase>
                <Learn
                    learn__tittle={["So,", <br></br>, "What I learned ...", <br></br>, <span role="img" aria-label="Thinking face">🤔</span>]}
                    learn__text={["I’ve never thought that hiring people can be so frustrating. The recruiters' office looks like Wall Street people surrounding, talking about some applicants and some requirements… It’s a mess. Eficacia received everything by hand, and then, you have some people transcribing CVs into a .xls file.", <br></br>, <br></br>, "If you are an outsider you easily can say … why just not create a system that … They try, but they cannot stop for a single moment. Every single day they receive orders from customers, CVs, ect … This project was challenging, we’re changing an engine while driving a car that is expected to arrive soon."]}
                ></Learn>
                <ProjectFarewell
                    next__tittle={"Checkout this language project"}
                    next__route={'/projects/nasa'}
                ></ProjectFarewell>
            </main >
        );
    }
}

export default Eficacia;