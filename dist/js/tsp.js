"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TSP = function () {
    var TSP = {
        Point: function Point(x, y) {
            this.x = x;
            this.y = y;
        },
        randomInt: function randomInt(u) {
            return Math.floor(Math.random() * (u + 1));
        },
        distance: function distance(pt1, pt2) {
            var xDelta = pt1.x - pt2.x;
            var yDelta = pt1.y - pt2.y;
            return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
        },


        algorithms: {},

        extensions: [],

        register: function register(algo) {
            for (var key in algo) {
                if (algo.hasOwnProperty(key) && key !== "name" && key !== "key") {
                    algo.key = key;
                    this.algorithms[key] = algo;
                    break;
                }
            }
        },
        getAlgorithm: function getAlgorithm(key) {
            var algo = this.algorithms[key];
            if (algo !== undefined) return algo[algo.key]; // return the constructor
        },
        extendAlgorithm: function extendAlgorithm(destination, srcKey, propertyKey) {
            this.extensions.push({
                destination: destination,
                srcKey: srcKey,
                propertyKey: propertyKey
            });
        },
        processExtensions: function processExtensions() {
            var ext = void 0;
            var i = void 0;
            var algo = void 0;
            while (ext = this.extensions.pop()) {
                algo = this.getAlgorithm(ext.srcKey);
                if (algo !== undefined) {
                    ext.destination.prototype[ext.propertyKey] = algo.prototype[ext.propertyKey];
                }
            }
        }
    };

    var Solver = function () {
        function Solver(notify) {
            _classCallCheck(this, Solver);

            this.notify = notify;
            this.points = [];
            this.solution = [];
            this.timeout = 0;
        }

        _createClass(Solver, [{
            key: "addPoint",
            value: function addPoint(x, y) {
                this.points.push(new TSP.Point(x, y));
            }
        }, {
            key: "solve",
            value: function solve(algoKey) {
                if (this.timeout > 0 || this.points.length == 0) return;

                this.iteration = 0;
                this.improvements = 0;
                this.distance = Number.MAX_VALUE;
                this.time = 0;
                TSP.processExtensions();

                var algo = TSP.getAlgorithm(algoKey);
                var tsp = this;

                if (algo === undefined) {
                    throw "Algorithm [" + algoKey + "] not found.";
                } else {
                    this.algo = new algo(this);
                    this.timeout = setTimeout(function () {
                        tsp.iterate();
                    }, 0);
                }
            }
        }, {
            key: "iterate",
            value: function iterate() {
                var solution = this.algo.solve();
                var distance = this.pathDistance(solution);
                var tsp = this;

                if (distance < this.distance) {
                    this.distance = distance;
                    this.solution = solution;
                    this.improvements++;
                }
                this.iteration++;
                this.notify();
                if (!this.algo.done) {
                    this.timeout = setTimeout(function () {
                        tsp.iterate();
                    }, 0);
                } else {
                    this.timeout = 0;
                }
            }
        }, {
            key: "stop",
            value: function stop() {
                clearTimeout(this.timeout);
                this.timeout = 0;
            }
        }, {
            key: "clear",
            value: function clear() {
                this.stop();
                this.points = [];
                this.solution = [];
            }
        }, {
            key: "getPossible",
            value: function getPossible() {
                var result = [];
                var pl = this.points.length;
                var i = 0;

                for (; i < pl; i++) {
                    result.push(i);
                }
                return result;
            }
        }, {
            key: "pathDistance",
            value: function pathDistance(indexes) {
                var pts = this.points;
                var l = pts.length;
                var distance = TSP.distance;
                var d = distance(pts[indexes[0]], pts[indexes[l - 1]]);
                var i = 1;

                for (; i < l; i++) {
                    d += distance(pts[indexes[i]], pts[indexes[i - 1]]);
                }
                return d;
            }
        }]);

        return Solver;
    }();

    TSP.Solver = Solver;

    return TSP;
}();