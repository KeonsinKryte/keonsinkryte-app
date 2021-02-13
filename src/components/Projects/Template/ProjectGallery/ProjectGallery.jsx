import React, { Component } from 'react';
import ScrollHandler from '../../../Handlers/ScrollHandler/ScrollHandler';
import ProjectCard from '../ProjectCard/ProjectCard';

class ProjectGallery extends Component {
    render() {
        return (
            <section className="container-fluid gallery">
                <div className="row">
                    <article className="col-6 gallery__block">
                        <ProjectCard tittle={"Improving efficiency on neurological tests in Parkinson's disease patients"} height={35} emoji={"🧠"} arialabel={"Brain"} description={"Incognitus™ | 2019 - 2021"} route={'/projects/incognitus'} background_image={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/incognitus_gradient.jpg)'}></ProjectCard>
                        <ProjectCard tittle={"Banking for Millennials"} height={25} emoji={"💸"} arialabel={"Money"} description={"Semillero Bancoomeva™ | 2018"} route={'/projects/bancoomeva'} background_image={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/bancoomeva_gradient.jpg)'}></ProjectCard>
                    </article>
                    <article className="col-6 gallery__block">
                        <ProjectCard tittle={"Duino, an alien who teaches electronics in kids. New ways of learning"} height={17.5} emoji={"👽"} arialabel={"Alien"} description={"Universo de Duino | 2017 - 2020"} route={'/projects/duino'} background_image={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/duino_gradient.jpg)'}></ProjectCard>
                        <ProjectCard tittle={"The integrated platform for employees and job applicants for Eficacia"} height={25} emoji={"👔"} arialabel={"Work"} description={"Eficacia™ Intranet | 2019"} route={'/projects/eficacia'} background_image={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/eficacia_gradient.jpg)'}></ProjectCard>
                        <ProjectCard tittle={"Yu´a Atsa Piya´a The preservation of an indigenous language"} height={17.5} emoji={"📚"} arialabel={"School books"} description={"Yu´a Atsa Piya´a | 2017"} route={'/projects/nasa'} background_image={'url(' + process.env.PUBLIC_URL + '/images/projects/gradients/nasa_gradient.jpg)'}></ProjectCard>
                    </article>
                </div>
                <ScrollHandler title={"About me!"} target={2100}></ScrollHandler>
            </section>
        );
    }
}

export default ProjectGallery;