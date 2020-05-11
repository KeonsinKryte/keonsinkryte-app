import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import createHistory from "history/createBrowserHistory"

export const history = createHistory()

history.listen((location, action) => {
    window.scrollTo(0, 0)
});

class Cognosis extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <main className="cognosis__project">
                <article className="cognosis__project-description">
                    <div className="cognosis__project-information-header">
                        <div className="cognosis__project-decoration"><span role="img" aria-label="Brain">🧠</span></div>
                        <div className="cognosis__project-title">
                            <p className='heading_1'>Improving efficiency on neurological tests in Parkinson's disease patients</p>
                            <p className="heading_2">Cognosis™</p>
                        </div>
                    </div>
                    <div className="text-container text-centered spacing-10vh-top">
                        <p className="paragraph_1">
                            <strong>Cognosis™</strong>, It’s a software tool made to be include in a big Parkinson’s disease diagnostics package that unifies some of the most used diagnostics tests in a new form factor that can be easily solved and provides specialists with information about their patients in a short amount of time.
                        </p>
                    </div>
                </article>
                <nav className="cognosis__project-information spacing-5vh">
                    <div className="cognosis__project-info">
                        <h5>Timeframe</h5>
                        <p className="paragraph_list">2019 - 2020</p>
                    </div>
                    <div className="cognosis__project-info">
                        <h5>Role</h5>
                        <p className="paragraph_list">UX Researcher, UX Designer, Developer and insights collector... Well, <span role="img" aria-label="Unicorn">🦄</span></p>
                    </div>
                    <div className="cognosis__project-info">
                        <h5>Organizations</h5>
                        <img src={process.env.PUBLIC_URL + "/logos/icesi_i2t.png"} alt="Logo of i2t Research Group" />
                        <img src={process.env.PUBLIC_URL + "/logos/icesi.svg"} alt="Logo of Universidad ICESI" />
                        <img src={process.env.PUBLIC_URL + "/logos/fvl.svg"} alt="Logo of Fundación Valle del Lili" />
                    </div>
                </nav>
                <article className="cognosis__project-challenge half-container spacing-10vh">
                    <p className="heading_1 left">Our Challenge</p>
                    <p className="paragraph_1 right">
                        Improve the usability efficiency of cognitive impairments tests applied in Parkinson’s disease patients.
                        <br />
                        <br />
                        Creating a relief for doctors and patients.
                        <br />
                        <br />
                    </p>
                </article>
                <article className="cognosis__project-approach spacing-10vh-top">
                    <div className="half-container">
                        <p className="heading_1 left">Our approach</p>
                        <div className="right">
                            <p className="paragraph_1 text-left">
                                We decided divide our research in three parts due the complexity of our interaction map.
                                <br />
                                <br />
                                Three users, each one with it’s own necessities, problems and pains.
                            </p>
                        </div>
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_users.png"} alt="Cognosis user chart" />
                    <div className="text-container text-centered column">
                        <p className="paragraph_1">
                            This project was a clear possibility to use the double diamond methodology, but this time our research needs to follow some requirements from our medical specialists and support ongoing investigations from our partners around the topic.
                        </p>
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/common/project_diamond-diagram.png"} alt="Double Diamond diagram" />
                    <div className="text-container text-centered column">
                        <p className="paragraph_1">
                            By now, we going to start talking about Parkinson’s, what it means for patient, what’s the role of a specialist, be clear of the limits, pains, opportunities and frustrations.
                        </p>
                    </div>
                </article>
                <article className="cognosis__project-discover">
                    <div className="text-container text-centered column spacing-5vh">
                        <div className="line-a"></div>
                        <p className="heading_list">Discover<br /><span role="img" aria-label="Magnifying glass">🔎</span></p>
                    </div>
                    <div className="text-container text-centered column spacing-5vh">
                        <p className="paragraph_1">
                            As many of you will already know, Parkinson’s is a neurodegenerative disease. In other words, the disease damages the brain progressively and generating a series of motor, non-motor, cognitive and psychological symptoms.
                        </p>
                        <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_damage.png"} alt="Brain damage over time" />
                        <p className="paragraph_1">
                            Being such a large and massive disease, we decided to focus mainly on cognitive symptom, such as: loss of orientation, short-term memory loss, recognition failure and among others that affects patient’s daily life.
                        </p>
                    </div>

                    <div className="text-container text-centered column spacing-5vh">
                        <p className="paragraph_1 spacing-5vh-bottom">
                            It’s here where the specialist comes into the game. This one is in charge of diagnosing the advance of the disease and reposibly of create a treatment to reduce (Sadly, there’s no cure for Parkinson’s) the symptoms and extends the patient’s life quality for a while.
                        </p>
                        <h5>So, for a doctor, how the diagnostic it’s made?</h5>
                        <p className="paragraph_1 spacing-10vh-top">
                            Like every disease, Parkinson’s requires standards that establish ranges and limits within the pathology.
                            <br />
                            <br />
                            By this precept, different medical organizations have created specific tools for diagnostics of multiple symptoms to ensure the correct measurement and precise treatment such as PD-CFRS, PD-NMS Q, Yesavage, MD-PQRS, MoCA, among others.
                            <br />
                            <br />
                            Well, depending on the symptoms, there are a large number of tests, in this case we are focusing mainly on cognitive symptoms and to evaluate them we have this.
                        </p>
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_tests.png"} alt="Tests used for diagnostic Parkinson's" />
                    <div className="text-container text-centered column spacing-5vh">
                        <p className="paragraph_1">
                            There’s something in common in all these tests and that is their inefficiency.
                            <br />
                            <br />
                            You can barely imagine a doctor asking a patient 76+ questions, using all the time they meet trying to solve one of those test. The information that you get it’s quite important, but if you have to do it in three or four sessions with your doctor something it’s not working fine.
                        </p>
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_journey-map.png"} alt="Double Diamond diagram" />
                    <div className="text-container text-centered column spacing-5vh">
                        <p className="paragraph_1">
                            This is a brief image of what’s going on inside a doctor’s appointment. A combined perception between doctor and patient.
                        </p>
                        <p className="paragraph_1">
                            After the ABC’s of Parkinson’s disease It’s time to tell you what we’ve discovered in a year working on this project.
                        </p>
                    </div>
                    <div className="text-container text-centered column spacing-5vh">
                        <p className="paragraph_1">
                            First of all, defining What?, Why? and Where?. <br />
                            Three “simple questions” that gonna guide us into the real user, context and purpose.
                        </p>
                    </div>
                    <div className="cognosis__project-information wide-90 column">
                        <div className="cognosis__project-info a spacing-5vh">
                            <h2>What?</h2>
                            <p className="paragraph_list sca-75">
                                The Tests, that’s the core of a big interaction problem, a communication tool and a system to diagnostic the disease.
                            </p>
                        </div>
                        <div className="cognosis__project-info b spacing-5vh">
                            <h2>Why?</h2>
                            <p className="paragraph_list sca-75">
                                For doctors, time is the most important variable. A little bit late and there’s no much you can do.
                                <br />
                                <br />
                                For patients, it’s quite important understand what’s happening in their body, understanding the complexity of a disease and giving solutions that can improve lightly (Due Parkinson’s it’s a catastrophic illness) their life quality.

                            </p>
                        </div>
                        <img src="" alt="" />
                        <div className="cognosis__project-info c spacing-5vh">
                            <h2>Where?</h2>
                            <p className="paragraph_list sca-75">
                                To give you some context, we’re working with a group of doctors, engineers, designers and a Patient support group called <strong><a href="https://www.facebook.com/alianzaparkinsoncali/" target="blank">“Alianza Parkinson Cali”</a></strong>.
                                <br />
                                <br />
                                Together, we’re trying to give solutions to the everyday life problems and tasks of a Parkinson’s patients and create solutions to fast and easily evaluate the progression of the illness.
                            </p>
                        </div>
                    </div>
                    <div className="text-container text-centered column spacing-5vh">
                        <p className="paragraph_1">
                            One of the most important things we discovered was that patients just want a slightly better life quality, being independent and feel completely useful for themselves and their families.
                        </p>
                        <p className="paragraph_1">
                            This is a powerful insight, but at the same time our biggest frustration.
                        </p>
                    </div>
                    <div className="half-container sapcing-5vh">
                        <div className="left centered">
                            <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_group.jpg"} alt="Parkinson's patients sharing time together" />
                        </div>
                        <div className="right">
                            <p className="paragraph_1 text-left wide-90 spacing-5vh-left">
                                The sense of community that exists around the disease it’s stunning.
                                Each month Alianza Parkinson Cali makes an event where over 70+ patients and their families talk, share, research, exercise, dance tango (It’s recognized as a therapy for Parkinson’s) and meet with people that are in the same place, trying to overcome the illness and making their life easier and happier.
                            </p>
                            <p className="paragraph_1 text-left wide-90 spacing-5vh-left">
                                This space was the perfect opportunity for us to research, to learn more about the patients, the disease, how they live with the illness and how they feel about it.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="cognosis__project-define">
                    <div className="text-container spacing-5vh text-centered column">
                        <div className="line-b"></div>
                        <p className="heading_list">Define<br /><span role="img" aria-label="Vote">🗳️</span></p>
                        <p className="paragraph_1">
                            This time defining it’s very difficult, but the insights we got were pretty helpful.
                        </p>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">1</p>
                        <div className="text-container">
                            <h5>Satisfaction.<span role="img" aria-label="Relieved face">😌</span></h5>
                            <p className="paragraph_1 right">
                                It’s not just how many tests the doctor can make in one day, it’s the quality time they share with their patient, enjoy the evaluation process, being able to connect specialists and patients building trust and sense of care.
                            </p>
                        </div>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">2</p>
                        <div className="text-container">
                            <h5>If it works don't touch it.<span role="img" aria-label="Grimacing face">😬</span></h5>
                            <p className="paragraph_1 right">
                                The tests works, the questions are the necessary to get the correct information. The problem is the form factor, hard to understand and pretty slow to apply.
                            </p>
                        </div>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">3</p>
                        <div className="text-container">
                            <h5>It’s 21st century!<span role="img" aria-label="Math">🧮</span></h5>
                            <p className="paragraph_1 right">
                                Why doctors needs to calculate each test? <br />
                                Well, you can think it’s just an addition…but there is 75+ questions, different evaluation formats as well as different outcomes to analyze.
                            </p>
                        </div>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">4</p>
                        <div className="text-container">
                            <h5>Time.<span role="img" aria-label="Clock">⏰</span></h5>
                            <p className="paragraph_1 right">
                                Sometimes to a doctor takes up to 6 medical sessions to completely evaluate a patient, <strong>6 SESSIONS!</strong>
                            </p>
                        </div>
                    </div>
                    <div className="mostly-container spacing-5vh-bottom">
                        <p className="heading_1 left text-centered">5</p>
                        <div className="text-container">
                            <h5>People want a better life.<span role="img" aria-label="Slightly happy face">🙂</span></h5>
                            <p className="paragraph_1 right">
                                That's It. Parkinson’s patients just want to feel useful, healthy and happy.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="cognosis__project-develop">
                    <div className="text-container spacing-5vh text-centered column">
                        <div className="line-c"></div>
                        <p className="heading_list">Develop<br /><span role="img" aria-label="Developer">👩‍💻</span></p>
                        <p className="paragraph_1">
                            Ideas, and ideas, testing, sharing and improving what we discuss.
                        </p>
                    </div>
                    <div className="text-container text-centered column spacing-5vh">
                        <p className="paragraph_1">
                            As we’ve talked before we have some partners and our works will be defined by the general guidelines.
                        </p>
                        <p className="paragraph_1">
                            <strong><a href="https://www.icesi.edu.co/i2t/teleco/index.php" target="blank">i2t Research Group</a></strong>, <strong><a href="https://valledellili.org" target="blank">Fundación Valle del Lili</a></strong> and <strong><a href="https://www.icesi.edu.co" target="blank">Universidad Icesi</a></strong>  have developed a robust evaluation system that provides information about the patients, such like Levodopa routines, intensify and rate of symptoms like freezing, balance and falls and among other features that helps in Parkinson’s diagnostic and provide the specialist a clear vision of what’s happening in the patient’s body.
                        </p>
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_cognosis.png"} alt="Projects distribution and impact" />
                    <div className="half-container spacing-5vh">
                        <div className="left spacing-5vh-left">
                            <h5>Cognosis™</h5>
                            <p className="paragraph_1 text-left wide-90">
                                Our work going to take place inside PDdaily, a mobile application designed for the use of Parkinson's patients or their caregivers that allows them to control the intake of their medications, record events such as tremor and dyskinesias, and share that information collected in real time with their respective doctors to through a web platform. It is made up of 6 functionalities:
                                <br />
                                <br />
                                <strong>1.</strong> It maintains the information of the person, condition and medical treatment.
                                <br />
                                <br />
                                <strong>2.</strong> Notifications of medication intake schedules.
                                <br />
                                <br />
                                <strong>3.</strong> Analysis and application of clinical tests and activities of daily living: tremor, dyskinesias, and falls.
                            </p>
                        </div>
                        <div className="right spacing-5vh-left">
                            <p className="paragraph_1 text-left wide-90">
                                <br />
                                <br />
                                <br />
                                <strong>4.</strong> Provide remote medical advice.
                                <br />
                                <br />
                                <strong>5.</strong> Quick access to contact family and / or caregiver, doctor or emergency call for help in an emergency.
                                <br />
                                <br />
                                <strong>6.</strong> To keep track of the person's geographic location.
                                <br />
                                <br />
                                We already know what we going to develop an App package that applies and evaluate an unified Parkinson’s disease form, created with our medical partners and simplifies big tests like MoCA and PD-CFRS.
                            </p>
                        </div>
                    </div>
                    <div className="text-container text-centered column">
                        <p className="paragraph_1">
                            This tests it’s divided in three big stages.
                        </p>
                    </div>
                    <div className="half-container">
                        <img className="img-left" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_map.png"} alt="Cognitve impairment map" />
                        <div className="right spacing-5vh-left centered">
                            <h5>Cognitive impairment Map.</h5>
                            <p className="paragraph_1">
                                Simple questions that suggest the specialist where’s the brain <span role="img" aria-label="Brain">🧠</span> damage.
                            </p>
                        </div>
                    </div>
                    <div className="half-container">
                        <div className="left spacing-5vh-left centered">
                            <h5>Question Form.</h5>
                            <p className="paragraph_1">
                                After applying in a patient the Cognitive impairment Map the doctor decide which form send to the patient.
                            </p>
                        </div>
                        <img className="img-right" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_forms.png"} alt="Forms used by doctors" />
                    </div>
                    <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_devices.png"} alt="iPad displaying Cognosis Forms" />
                    <div className="half-container spacing-10vh">
                        <img className="img-left" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_cognitive-tests.png"} alt="Cognitive tests" />
                        <div className="right spacing-5vh-left centered">
                            <p className="paragraph_1">
                                After the patient answer the questions, they receive feedback about their performance and the specialist receive this information online.
                            </p>
                            <h5>The final stage are the cognitive tests.</h5>
                            <p className="paragraph_1">
                                These “mini-games” are pretty important to evaluate and analyze tremor, dyskinesias, short-term memory, language and math solving tasks. This information it’s important and gives the specialist clues about the disease and the performance of the patient.
                            </p>
                            <img className="img-centered column" src={process.env.PUBLIC_URL + "/images/projects/cognosis/project/cognosis_project_devices-2.png"} alt="" />
                        </div>
                    </div>
                    <div className="half-container spacing-5vh">
                        <div className="left">
                            <p className="paragraph_1 wide-90">
                                We were developing the app and creating a branch for patient testing and … Everything goes wrong, the <strong>COVID-19 <span role="img" aria-label="Virus">🦠</span></strong> spreaded away.
                            </p>
                            <p className="paragraph_1 wide-90">
                                We’re in lockdown <span role="img" aria-label="House">🏠</span> and the Parkinson’s patients are a vulnerable group, so, testing it’s not a possibility.
                                <br />
                                <br />
                                We’re looking for some strategies that help us to test our developing process. Right now, we feel like being in Bird Box world.
                            </p>
                        </div>
                        <div className="right">
                            <p className="paragraph_1 wide-90">
                                By now, we still developing the App using our research as a guide. Our biggest concern is the Cognitive tests, we think it needs a lot of testing to ensure that the performance is at least the same as the traditional methods.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="cognosis__project-learning spacing-10vh">
                    <div className="half-container">
                        <div className="left">
                            <p className="heading_1">So, <br /><s>What I learned?</s><br /> What I'm learning <br /><span role="img" aria-label="Thinking face">🤔</span></p>
                        </div>
                        <div className="right">
                            <p className="paragraph_1">
                                It’s pretty powerful the feeling that Parkinson’s patients transmit. People that are trying their best to fight against something that every single day it’s worst or the same, but never better.
                                <br />
                                <br />
                                This process it’s not creating an app or giving a product. It’s understanding the limits, we cannot solve some things, but we can create tools for people, tools for doctors, provide elements that helps to simplify tasks and improving care.
                            </p>
                            <h5>Let me tell you about <a href="https://www.icesi.edu.co/i2t/teleco/" target="blank"><br /><span role="img" aria-label="Gear" className="heading_4">i2t Research Group ⚙️</span></a></h5>
                            <p className="paragraph_1">
                                Specially what we do.
                                <br />
                                <br />
                                i2t aims to contribute to global development through the implementation and participation in research and technological development in the field of information and communications technologies.
                                <br />
                                <br />
                                The challenges of a research and innovation in e-health are enormous because the definitions and the opportunities are quickly evolving, the use of technology as a tool for health care does not match its original purpose. In addition, their identification with health programs is not well known and the evidence on e-Health is new and is very limited in developing countries.
                                <br />
                                <br />
                                i2t has worked in research projects like: <strong><a href="https://www.icesi.edu.co/i2t/teleco/index.php/grupo-biomedica/44-uncategorised/73-e-motion-capture-system" target="blank"> e-Motion app project</a></strong>, <strong><a href="https://www.icesi.edu.co/i2t/teleco/index.php/grupo-biomedica/44-uncategorised/74-pdaily" target="blank">PDaily app project</a></strong>, <strong><a href="https://cnnespanol.cnn.com/2014/10/03/spectra-app-chikunguna/" target="blank">Spectra</a></strong> and among others.
                            </p>
                        </div>
                    </div>
                </article>
                <footer className="cognosis__project-greeting">
                    <div className="text-container text-centered column">
                        <p className="heading_1 spacing-none">
                            That's all folks! <br /> <i>for now</i>
                        </p>
                        <p className="paragraph_1">
                            Thanks for being here with me, <br /> I appreciate it.<span role="img" aria-label="Happy face">😊</span><br /><strong>#StayHome <span role="img" aria-label="Home">🏘️</span></strong>
                        </p>
                    </div>
                </footer>
                <div className="right text-right spacing-10vh-bottom">
                    <Link to="/projects/duino" className="header__scroll">
                        <h2>Check out this education project <span role="img" aria-label="Happy face">👽</span></h2>
                        <img className="img-small-vertical-right rotated" src={process.env.PUBLIC_URL + "/icons/arrow.svg"} alt="Blue Arrow" />
                    </Link>
                </div>
            </main>
        );
    }
}

export default Cognosis;