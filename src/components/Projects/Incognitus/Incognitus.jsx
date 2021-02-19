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

class Incognitus extends Component {
    render() {
        return (
            <main className="project">
                <Banner
                    project__emoji={"🧠"} project__emoji_arialabel={"Brain"}
                    project__tittle={"Improving efficiency on neurological tests in Parkinson's disease patients"} project__description={"Incognitus™"}
                    project__route_gradient={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/incognitus_gradient.jpg)'}
                    project__link={<a target="blank" className="project__link" href="https://play.google.com/store/apps/details?id=co.edu.icesi.incognitus&hl=es&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>}
                ></Banner>
                <Intro
                    project__intro={[<strong>Incognitus™</strong>, ", It’s a software tool made to be include in a big Parkinson’s disease diagnostics package that unifies some of the most used diagnostics tests in a new form factor that can be easily solved and provides specialists with information about their patients in a short amount of time."]}
                ></Intro>
                <Info
                    project__client={["i2t", <br></br>, "Universidad Icesi", <br></br>, "Fundación Valle del Lili"]}
                    project__role={["🔴🟠 UX Research", <br></br>, "🟢🔵 UX Design & Android Development"]}
                    project__timeframe={["2019 - ", <strong>2021*</strong>, <br></br>, <strong>WIP</strong>]}
                ></Info>
                <section className="project__met">
                    <Met
                        met__emoji={"🎯"} met__emoji_arialabel={"A dart board with dart hitting the center / bullseye region"}
                        met__tittle={"Our Challenge"} met__text={["Improve the usability efficiency of cognitive impairments tests applied in Parkinson’s disease patients.", <br></br>, <br></br>, "Creating a relief for doctors and patients."]}
                    ></Met>
                    <Met
                        met__emoji={"🔍"} met__emoji_arialabel={"A classic magnifying glass"}
                        met__tittle={"Our Approach"} met__text={["We decided to divide our research into three parts due to the complexity of our interactive map.", <br></br>, <br></br>, "Three users, each one with its own necessities, problems, and pains.", <br></br>, <br></br>, "By now, we are going to start talking about Parkinson’s, what it means for the patient, what’s the role of a specialist, be clear of the limits, pains, opportunities, and frustrations."]}
                    ></Met>
                </section>
                <Discover
                    discover__emoji={"🔴"} discover__emoji_arialabel={"Red circle"}
                    discover__tittle={"What we discovered"} discover__text_intro={["It’s time to tell you what we’ve discovered in a year working on this project.", <br></br>, <br></br>, "First of all, defining What?, Why? and Where?", <br></br>, <br></br>, "Three “simple questions” that gonna guide us into the real user, context and purpose."]}
                    discover__text_what={"The Tests, that’s the core of a big interaction problem, a communication tool, and a system to diagnostic the disease."}
                    discover__text_why={["For doctors, time is the most important variable. A little bit late and there’s no much you can do.", <br></br>, <br></br>, "For patients, it’s quite important to understand what’s happening in their body, understanding the complexity of the disease, and giving solutions that can improve lightly (Due to Parkinson’s it’s a catastrophic illness) their life quality."]}
                    discover__text_where={["To give you some context, we’re working with a group of doctors, engineers, designers, and a Patient support group called ", <strong><a href="https://www.facebook.com/alianzaparkinsoncali/" target="blank">“Alianza Parkinson Cali”</a></strong>, ".", <br></br>, <br></br>, "TTogether, we’re trying to give solutions to the everyday life problems and tasks of Parkinson’s patients and create solutions to fast and easily evaluate the progression of the illness."]}
                ></Discover>
                <Define
                    define__emoji={"🟠"} define__emoji_arialabel={"Orange circle"}
                    define__tittle={"What we defined"} define__text_intro={"This time defining it’s very difficult, but the insights we got were pretty helpful."}
                ></Define>
                <section className="project__insights">
                    <div className="col-12 project__define-list">
                        <ProjectList
                            list__emoji={"😌"} list__emoji_arialabel={"Relieved face"}
                            list__tittle={"Satisfaction"} list__number={"1"}
                            list__text={"It’s not just how many tests the doctor can make in one day, it’s the quality time they share with their patient, it's the enjoyment in the evaluation process, being able to connect specialists and patients building trust and a sense of care."}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"😬"} list__emoji_arialabel={"Grimacing face"}
                            list__tittle={"If it works, don't touch it"} list__number={"2"}
                            list__text={["The tests works, the questions are necessary to get the correct information.", <br></br>, "The problem is the form factor, it is hard to understand and pretty slow to apply."]}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"🧮"} list__emoji_arialabel={"Math"}
                            list__tittle={"It’s the 21st century!"} list__number={"3"}
                            list__text={["Why do doctors need to calculate each test?", <br></br>, "Well, you can think it’s just an addition… but there are 75+ questions, different evaluation formats as well as different outcomes to analyze"]}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"⏰"} list__emoji_arialabel={"Clock"}
                            list__tittle={"Time"} list__number={"4"}
                            list__text={["Sometimes to a doctor takes up to 6 medical sessions to completely evaluate a patient ", <strong>6 SESSIONS!</strong>]}
                        ></ProjectList>
                        <ProjectList
                            list__emoji={"🙂"} list__emoji_arialabel={"Slightly happy face"}
                            list__tittle={"People want a better life"} list__number={"5"}
                            list__text={"That's It. Parkinson’s patients just want to feel useful, healthy, and happy."}
                        ></ProjectList>
                    </div>
                </section>
                <ProjectShowcase
                    develop__emoji={"🔵🟢"} develop__emoji_arialabel={"Blue and green circles"}
                    develop__tittle={"What we developed and delivered"} develop__text_intro={["Ideas, and ideas, testing, sharing and improving what we discuss.", <br></br>, <br></br>, "Our work going to take place inside PDdaily, a mobile application designed for the use of Parkinson's patients or their caregivers that allow them to control the intake of their medications, record events such as tremor and dyskinesias, and share that information collected in real-time with their respective doctors to through a web platform."]}
                    showcase__img_a={process.env.PUBLIC_URL + "/images/projects/incognitus/incognitus_tmt.png"} showcase__img_a_alt={"TMT test ongoing"}
                    showcase__tittle_a={"Cognitive tests"} showcase__text_a={"These “mini-games” are pretty important to evaluate and analyze tremors, dyskinesias, short-term memory, language, and math solving tasks. This information is important and gives the specialist clues about the disease and the performance of the patient."}
                    showcase__img_main={process.env.PUBLIC_URL + "/images/projects/incognitus/incognitus_banner.png"} showcase__img_main_alt={"graphical user interface, application"}
                    showcase__img_b={process.env.PUBLIC_URL + "/images/projects/incognitus/incognitus_type_a.png"} showcase__img_b_alt={"Question answers form"}
                    showcase__tittle_b={"Cognitive impairment Mapping"} showcase__text_b={["Simple questions that suggest the specialist where’s the brain damage.", <br></br>, <br></br>, "After the patient answer the questions, they receive feedback about their performance and the specialist receive this information online."]}
                ></ProjectShowcase>
                <Learn
                    learn__tittle={["So,", <><br /><s style={{ opacity: "0.5" }}>What I learned ...</s><br /></>, "What I'm learning ...", <><br /><span role="img" aria-label="Thinking face">🤔</span></>]}
                    learn__text={["It’s pretty powerful the feeling that Parkinson’s patients transmit. People are trying their best to fight against something that every single day’s worst or the same, but never better.", <br></br>, <br></br>, "This process’s not creating an app or giving a product. It’s understanding the limits, we cannot solve some things, but we can create tools for people, tools for doctors, provide elements that help to simplify tasks and improving care.", <br></br>, <br></br>, <h2>Let me tell you about <a href="https://www.icesi.edu.co/i2t/teleco/" target="blank"><br /><span role="img" aria-label="Gear" style={{ color: "#ffa50a" }}>i2t Research Group ⚙️</span></a></h2>, <br></br>, "Especially what we do.", <br></br>, <br></br>, "i2t aims to contribute to global development through the implementation and participation in research and technological development in the field of information and communications technologies.", <br></br>, <br></br>, "The challenges of research and innovation in e-health are enormous because the definitions and the opportunities are quickly evolving, the use of technology as a tool for health care does not match its original purpose. Also, their identification with health programs is not well known and the evidence on e-Health is new and is very limited in developing countries.", <br></br>, <br></br>, "i2t has worked in research projects like ", <strong><a href="https://www.icesi.edu.co/i2t/teleco/index.php/grupo-biomedica/44-uncategorised/73-e-motion-capture-system" target="blank"> e-Motion app project, </a></strong>, <strong><a href="https://www.icesi.edu.co/i2t/teleco/index.php/grupo-biomedica/44-uncategorised/74-pdaily" target="blank">PDaily app project, </a></strong>, <strong><a href="https://cnnespanol.cnn.com/2014/10/03/spectra-app-chikunguna/" target="blank">Spectra, </a></strong>, "and others."]}
                ></Learn>
                <ProjectFarewell
                    next__tittle={"Checkout this banking project"}
                    next__route={'/projects/bancoomeva'}
                ></ProjectFarewell>
            </main>
        );
    }
}

export default Incognitus;