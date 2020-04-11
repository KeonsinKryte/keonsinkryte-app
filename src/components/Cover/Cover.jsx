import React, { Component } from "react";

class Cover extends Component {
    componentDidMount() {
        /*(function ($) {
            var card = $(".container");
            card.on('mousemove', function (e) {
                var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
                var y = e.clientY - $(this).offset().top + $(window).scrollTop();

                var rY = map(x, 0, $(this).width(), -17, 17);
                var rX = map(y, 0, $(this).height(), -17, 17);

                $(this).children(".inner").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
            });

            card.on('mouseenter', function () {
                $(this).children(".inner").css({
                    transition: "all " + 0.05 + "s" + " linear",
                });
            });

            card.on('mouseleave', function () {
                $(this).children(".inner").css({
                    transition: "all " + 0.2 + "s" + " linear",
                });

                $(this).children(".inner").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
            });

            function map(x, in_min, in_max, out_min, out_max) {
                return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
            }
        })();*/


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

            window.onmousemove = onMouseMoveHandler;
            window.onmouseleave = onMouseLeaveHandler;
            window.onmouseenter = onMouseEnterHandler;
        })();
    }

    render() {
        return (
            <div id="container" className="container">
                <div id="inner" className="inner">
                    <img className="inner__image" src={process.env.PUBLIC_URL + "/icons/KeonsinKryte.svg"} alt="KeonsinKryte logo" />
                    <div className="inner__blur"></div>
                </div>
            </div>
        );
    }
}

export default Cover;