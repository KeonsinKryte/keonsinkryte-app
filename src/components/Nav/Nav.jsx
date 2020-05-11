import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Events, animateScroll as scroll, scroller } from 'react-scroll'

class Nav extends Component {
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
        return (
            <nav className="nav">
                <div className="nav__container">
                    <article className="nav__left">
                        <Link to="/" onClick={() => scroll.scrollTo(0)}>
                            <h2>Mauricio Botero Vallejo</h2>
                            <p>UX Researcher & Design Strategist</p>
                        </Link>
                    </article>
                    <article className="nav__right">
                        <a href="mailto:mauro@keonsinkryte.com">
                            {/*"Icon made by Pixel perfect from www.flaticon.com"*/}
                            <img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODQsMTI4SDEyOGMtMTEuMTA0LDAtMjEuNjk2LDEuODU2LTMyLDQuNTQ0Vjk2aDExMmM4LjgzMiwwLDE2LTcuMTY4LDE2LTE2VjE2YzAtOC44MzItNy4xNjgtMTYtMTYtMTZIODAgICAgYy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2djEyOS43OTJDMjUuOTIsMTY4LDAsMjA4LjgzMiwwLDI1NnYxNzZjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNmgyNzJ2NDhjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNmgzMiAgICBjOC44MzIsMCwxNi03LjE2OCwxNi0xNnYtNDhoMTQ0YzguODMyLDAsMTYtNy4xNjgsMTYtMTZWMjU2QzUxMiwxODUuMzEyLDQ1NC42ODgsMTI4LDM4NCwxMjh6IE0yMjQsNDE2SDMyVjI1NiAgICBjMC01Mi45MjgsNDMuMDcyLTk2LDk2LTk2YzUyLjkyOCwwLDk2LDQzLjA3Miw5Niw5NlY0MTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMDA1NEZGIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="Contact me via e-mail" />
                        </a>
                    </article>
                </div>
            </nav>
        );
    }
}

export default Nav;