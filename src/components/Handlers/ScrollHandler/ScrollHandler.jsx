import React, { Component } from 'react';
import { Events, animateScroll as scroll, scroller } from 'react-scroll'

class ScrollHandler extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    render() {
        const title = this.props.title;
        const target = this.props.target;

        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-4 scrollhandler">
                        <a onClick={() => scroll.scrollTo(target)} className="row scrollhandler__container">
                            <h5>{title}</h5>
                            <img className="scrollhandler__img" src={process.env.PUBLIC_URL + "/icons/arrow.svg"} alt="Blue Arrow" />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default ScrollHandler;