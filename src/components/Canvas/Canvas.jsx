import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

class PerlinCircle {
    constructor(p, subX, subY, minSize, maxSixe, hue) {
        this.p = p;
        this.segments = 50;
        this.anglesNumber = (Math.PI * 2) / this.segments;
        this.noiseScale = 0.5;
        this.timeScale = 0.01;
        this.timeDifference = 1000;

        this.alphaX = 0;
        this.alphaY = 0;

        this.timeUnique = Math.random(this.timeDifference);
        this.x = subX;
        this.y = subY;
        this.minRadious = minSize;
        this.maxRadious = maxSixe;
        this.hue = hue;

        this.render = function (p) {
            p.translate(this.x, this.y);
            p.colorMode(p.HSB, 360, 100, 100, 100);
            p.fill(this.hue % 360, 100, 100, 100);

            console.log("Hola");

            this.findNextCoords(p, 0);
            var pX = this.alphaX;
            var pY = this.alphaY;
            var i = 0;

            while (i++ !== this.segments) {
                this.findNextCoords(p, i);
                p.vertex(pX, pY);

                pX = this.alphaX;
                pY = this.alphaY;
            }

            p.endShape(p.CLOSE);
            p.resetMatrix();
        };

        this.findNextCoords = function (p, seg) {
            var angle = this.anglesNumber * seg;
            var cosAngle = Math.cos(angle);
            var sinAngle = Math.sin(angle);
            var time = this.timeScale * p.frameCount + this.timeUnique;

            var noiseValue = p.noise(
                this.noiseScale * cosAngle + this.noiseScale,
                this.noiseScale * sinAngle + this.noiseScale, time);

            var rad = this.maxRadious * noiseValue + this.minRadious;

            this.dx = rad * cosAngle;
            this.dy = rad * sinAngle;
        };
    }
}

class Shape {
    constructor(p, index, minSize, maxSize, hue) {
        this.p = p;
        this.circlesNumber = Math.floor(Math.random(16));
        this.circles = [];

        this.x = maxSize * 1.5 * (index % 4) + maxSize * 1.5;
        this.y = maxSize * 1.5 * Math.floor(index / 4) + maxSize * 1.5;

        this.setShapes = function (p) {
            for (var i = 0; i < this.circlesNumber; i++) {
                this.circles.push(new PerlinCircle(p, this.x, this.y, minSize, maxSize, hue));
            }
        }

        this.drawShapes = function (p) {
            for (var i = 0; i < this.circlesNumber; i++) {
                this.circles[i].render(p);
            }
        }
    }
}

class Canvas extends Component {
    constructor() {
        super();

        this.sketch = this.sketch.bind(this);
    }

    sketch(p) {
        var shapesNumber = 16;
        var shapes = [];

        p.setup = () => {
            p.createCanvas(600, 600);
            p.noStroke();

            for (var i = 0; i < shapesNumber; i++) {
                shapes.push(new Shape(p, i, 50, 80, Math.random(360)));
                shapes[i].setShapes(p);
            }
        }

        p.draw = () => {
            p.blendMode(p.BLEND);
            p.colorMode(p.RGB, 255, 255, 255, 100);
            p.background(255, 255, 255);
            p.blendMode(p.DIFFERENCE);

            for (var i = 0; i < shapesNumber; i++) {
                shapes[i].drawShapes(p);
            }
        }
    }

    render() {
        return (
            <div>
                <P5Wrapper sketch={this.sketch.bind(this)}></P5Wrapper>
            </div>
        );
    }
}

export default Canvas;