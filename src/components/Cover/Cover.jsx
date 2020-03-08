import React, { Component } from "react";

class Cover extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        (function () {
            // Init
            var container = document.getElementById("container"),
                inner = document.getElementById("inner");

            // Mouse
            var mouse = {
                _x: 0,
                _y: 0,
                x: 0,
                y: 0,
                updatePosition: function (event) {
                    var e = event || window.event;
                    this.x = e.clientX - this._x;
                    this.y = (e.clientY - this._y) * -1;
                },
                setOrigin: function (event) {
                    this._x = event.offsetLeft + Math.floor(event.offsetWidth / 2);
                    this._y = event.offsetTop + Math.floor(event.offsetHeight / 2);
                },
                show: function () {
                    return "(" + this.x + ", " + this.y + ")";
                }
            };

            // Track the mouse position relative to the center of the container.
            mouse.setOrigin(container);

            //----------------------------------------------------

            var counter = 0;
            var refreshRate = 10;
            var isTimeToUpdate = function () {
                return counter++ % refreshRate === 0;
            };

            //----------------------------------------------------

            var onMouseEnterHandler = function (event) {
                update(event);
            };

            var onMouseLeaveHandler = function () {
                inner.style = "";
            };

            var onMouseMoveHandler = function (event) {
                if (isTimeToUpdate()) {
                    update(event);
                }
            };

            //----------------------------------------------------

            var update = function (event) {
                mouse.updatePosition(event);
                updateTransformStyle(
                    (mouse.y / inner.offsetHeight / 2).toFixed(2),
                    (mouse.x / inner.offsetWidth / 2).toFixed(2)
                );
            };

            var updateTransformStyle = function (x, y) {
                var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
                inner.style.transform = style;
                inner.style.webkitTransform = style;
                inner.style.mozTranform = style;
                inner.style.msTransform = style;
                inner.style.oTransform = style;
            };

            //--------------------------------------------------------

            container.onmousemove = onMouseMoveHandler;
            container.onmouseleave = onMouseLeaveHandler;
            container.onmouseenter = onMouseEnterHandler;
        })();
    }

    render() {
        return (
            <div id="container">
                <div id="inner" className="inner">
                    <img className="inner__image" src={process.env.PUBLIC_URL + "images/KeonsinKryte.svg"} alt="KeonsinKryte logo"/>
                    <div className="inner__blur"></div>
                </div>
            </div>
        );
    }
}

export default Cover;