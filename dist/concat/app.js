'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    var Canvas = function () {
        function Canvas(canvasHolder, width, height) {
            _classCallCheck(this, Canvas);

            var canvasId = 'aoc-graph';

            this._canvasSize = {
                'width': width,
                'height': height
            };

            $(canvasHolder).css('maxWidth', this._canvasSize.width);
            $(canvasHolder).append('<canvas id="' + canvasId + '" width="' + this._canvasSize.width + '" height="' + this._canvasSize.height + '" style="width:100%;"></canvas>');

            this._canvasEle = $('#' + canvasId)[0];
            this._canvas = this._canvasEle.getContext('2d');
            this._canvasPos = this._canvasEle.getBoundingClientRect();
            this._mousePos = {
                'x': 0,
                'y': 0
            };

            $(this._canvasEle).click(this._click.bind(this));
            $(this._canvasEle).mousemove(this._move.bind(this));

            this._clickHook = null;
            this._mouseMoveHook = null;
        }

        _createClass(Canvas, [{
            key: 'getMouseX',
            value: function getMouseX() {
                return this._mousePos.x;
            }
        }, {
            key: 'getMouseY',
            value: function getMouseY() {
                return this._mousePos.y;
            }
        }, {
            key: 'getWidth',
            value: function getWidth() {
                return this._canvasSize.width;
            }
        }, {
            key: 'getHeight',
            value: function getHeight() {
                return this._canvasSize.height;
            }
        }, {
            key: 'getContext',
            value: function getContext() {
                return this._canvas;
            }
        }, {
            key: '_click',
            value: function _click(mouseEvt) {
                this._updateMouseXY(mouseEvt);

                if (typeof this._clickHook === 'function') {
                    this._clickHook();
                }
            }
        }, {
            key: '_move',
            value: function _move(mouseEvt) {
                this._updateMouseXY(mouseEvt);

                if (typeof this._mouseMoveHook === 'function') {
                    this._mouseMoveHook();
                }
            }
        }, {
            key: 'click',
            value: function click(clickHook) {
                this._clickHook = clickHook;
            }
        }, {
            key: 'mousemove',
            value: function mousemove(mouseMoveHook) {
                this._mouseMoveHook = mouseMoveHook;
            }
        }, {
            key: 'clear',
            value: function clear() {
                this._canvas.clearRect(0, 0, this._canvasSize.width, this._canvasSize.height);
            }
        }, {
            key: 'drawLine',
            value: function drawLine(fromX, fromY, toX, toY, params) {
                var color = '#000';
                var alpha = 1;
                var lineWidth = 1;

                if (params != undefined) {
                    if (params.color != undefined) {
                        color = params.color;
                    }
                    if (params.alpha != undefined) {
                        alpha = params.alpha;
                    }
                    if (params.width != undefined) {
                        lineWidth = params.width;
                    }
                }

                this._canvas.shadowBlur = 0;
                this._canvas.globalAlpha = alpha;
                this._canvas.strokeStyle = color;
                this._canvas.lineWidth = lineWidth;
                this._canvas.beginPath();
                this._canvas.moveTo(fromX, fromY);
                this._canvas.lineTo(toX, toY);
                this._canvas.stroke();
            }
        }, {
            key: 'drawCircle',
            value: function drawCircle(x, y, params) {
                var size = 1;
                var color = '#000';
                var alpha = 1;

                if (params != undefined) {
                    if (params.size != undefined) {
                        size = params.size;
                    }
                    if (params.color != undefined) {
                        color = params.color;
                    }
                    if (params.alpha != undefined) {
                        alpha = params.alpha;
                    }
                }

                this._canvas.shadowColor = '#666';
                this._canvas.shadowBlur = 15;
                this._canvas.shadowOffsetX = 0;
                this._canvas.shadowOffsetY = 0;

                this._canvas.globalAlpha = alpha;
                this._canvas.fillStyle = color;
                this._canvas.beginPath();
                //this._canvas.arc(x, y, size, 0,2 * Math.PI);
                this._canvas.fill();
            }
        }, {
            key: 'drawRectangle',
            value: function drawRectangle(pointA, pointB, pointC, pointD, params) {
                var fill = '#000';
                var alpha = 1;

                if (params != undefined) {
                    if (params.fill != undefined) {
                        fill = params.fill;
                    }
                    if (params.alpha != undefined) {
                        alpha = params.alpha;
                    }
                }

                this._canvas.shadowBlur = 0;

                this._canvas.globalAlpha = alpha;
                this._canvas.fillStyle = fill;
                this._canvas.fillRect(pointA, pointB, pointC, pointD);
            }
        }, {
            key: '_updateMouseXY',
            value: function _updateMouseXY(mouseEvt) {
                this._canvasPos = this._canvasEle.getBoundingClientRect();
                var mouseX = mouseEvt.clientX - this._canvasPos.left;
                var mouseY = mouseEvt.clientY - this._canvasPos.top;
                var widthScaled = $(this._canvasEle).width() / this._canvasSize.width;
                var heightScaled = $(this._canvasEle).height() / this._canvasSize.height;
                var x = Math.floor(mouseX / widthScaled);
                var y = Math.floor(mouseY / heightScaled);

                this._mousePos.x = x;
                this._mousePos.y = y;
            }
        }]);

        return Canvas;
    }();

    return Canvas;
}();

var ACArtist = function () {
    var ACArtist = function () {
        function ACArtist(ac, canvas) {
            _classCallCheck(this, ACArtist);

            this._ac = ac;
            this._canvas = canvas;

            this._canvas.click(this._click.bind(this));

            this._draw();

            this._animationIterator = null;
            this._animationSteps = 10;

            this._iterationHook = null;

            // Keep scope
            for (var i in this) {
                if (typeof this[i] === 'function') {
                    this[i] = this[i].bind(this);
                }
            }
        }

        _createClass(ACArtist, [{
            key: '_click',
            value: function _click() {
                var cities = this._ac.getGraph().getCities();
                for (var cityIndex in cities) {
                    var difference = 0;
                    difference += Math.abs(cities[cityIndex].getX() - this._canvas.getMouseX());
                    difference += Math.abs(cities[cityIndex].getY() - this._canvas.getMouseY());

                    if (difference < 30) {
                        return;
                    }
                }

                this._ac.getGraph().addCity(this._canvas.getMouseX(), this._canvas.getMouseY());
                this._ac.getGraph().createEdges();

                clearInterval(this._animationIterator);
                this._ac.reset();

                this._draw();
            }
        }, {
            key: '_draw',
            value: function _draw() {
                this._canvas.clear();
                this._drawBg();
                this._drawEdges();
                this._drawNodes();
                this._drawCurrentBest();
            }
        }, {
            key: '_drawCurrentBest',
            value: function _drawCurrentBest() {
                var ant = this._ac.getGlobalBest();
                if (ant == null || ant.getTour() == null) {
                    return;
                }

                var tour = ant.getTour();

                for (var tourIndex = 0; tourIndex < tour.size(); tourIndex++) {
                    if (tourIndex < tour.size() - 1) {
                        this._canvas.drawLine(tour.get(tourIndex).getX(), tour.get(tourIndex).getY(), tour.get(tourIndex + 1).getX(), tour.get(tourIndex + 1).getY(), { 'alpha': 0.9, 'color': '#0c6', 'width': 3 });
                    } else {
                        this._canvas.drawLine(tour.get(tourIndex).getX(), tour.get(tourIndex).getY(), tour.get(0).getX(), tour.get(0).getY(), { 'alpha': 0.9, 'color': '#0c6', 'width': 3 });
                    }
                }
            }
        }, {
            key: '_drawNodes',
            value: function _drawNodes() {
                var nodes = this._ac.getGraph().getCities();

                for (var nodeIndex in nodes) {
                    this._canvas.drawCircle(nodes[nodeIndex].getX(), nodes[nodeIndex].getY(), { 'alpha': 0.8 });
                }
            }
        }, {
            key: '_drawEdges',
            value: function _drawEdges() {
                var edges = this._ac.getGraph().getEdges();

                var totalPheromone = 0;
                for (var edgeIndex in edges) {
                    totalPheromone += edges[edgeIndex].getPheromone();
                }

                for (var edgeIndex in edges) {
                    var alpha = 0.2;
                    if (this._ac.currentIteration() > 0) {
                        var width = Math.ceil(edges[edgeIndex].getPheromone() / totalPheromone * this._ac.getGraph().size() * 6);
                        alpha = edges[edgeIndex].getPheromone() / totalPheromone * this._ac.getGraph().size() + 0.03;
                        if (alpha > 1) {
                            alpha = 1;
                        }
                    }

                    this._canvas.drawLine(edges[edgeIndex].pointA().x, edges[edgeIndex].pointA().y, edges[edgeIndex].pointB().x, edges[edgeIndex].pointB().y, { 'alpha': alpha, 'color': '#06f', 'width': width });
                }
            }
        }, {
            key: '_drawBg',
            value: function _drawBg() {
                var grd = this._canvas.getContext().createLinearGradient(0, 0, 0, this._canvas.getHeight());
                grd.addColorStop(0, "#fcfcfc");
                grd.addColorStop(0.4, "#fcfcfc");
                grd.addColorStop(1, "#fcfcfc");

                this._canvas.drawRectangle(0, 0, this._canvas.getWidth(), this._canvas.getHeight(), { 'fill': grd });
            }
        }, {
            key: 'stop',
            value: function stop() {
                clearInterval(this._animationIterator);
                this._ac.reset();
                this._draw();
            }
        }, {
            key: 'clearGraph',
            value: function clearGraph() {
                this.stop();
                this._ac.getGraph().clear();
                this._draw();
            }
        }, {
            key: 'runAC',
            value: function runAC(iterationHook) {
                if (!this._ac.ready()) {
                    return;
                }

                if (typeof iterationHook == 'function') {
                    this._iterationHook = iterationHook;
                }

                clearInterval(this._animationIterator);
                this._ac.reset();
                this._step();
            }
        }, {
            key: '_step',
            value: function _step(iterationHook) {
                if (this._ac.currentIteration() >= this._ac.maxIterations()) {
                    this._draw();
                    this._ac.resetAnts();
                    return;
                }

                // Run a few steps at a time so it doesn't take too long
                for (var i = 0; i < 3; i++) {
                    this._ac.step();
                }
                this._animateAnts();

                if (typeof this._iterationHook == 'function') {
                    this._iterationHook();
                }
            }
        }, {
            key: '_moveAnt',
            value: function _moveAnt(ant, tourIndex, animationStep) {
                // Get last move
                var tourSize = ant.getTour().size();
                var fromCity = ant.getTour().get(tourIndex - 1);
                var toCity = ant.getTour().get(tourIndex);

                var xOffset = (toCity.getX() - fromCity.getX()) * (1 / this._animationSteps * animationStep);
                var yOffset = (toCity.getY() - fromCity.getY()) * (1 / this._animationSteps * animationStep);

                var antXPos = fromCity.getX() + xOffset;
                var antYPos = fromCity.getY() + yOffset;

                this._drawAnt(antXPos, antYPos);
            }
        }, {
            key: '_drawAnt',
            value: function _drawAnt(x, y) {
                this._canvas.drawRectangle(x - 2, y - 2, 4, 4, { 'alpha': 0.5 });
            }
        }, {
            key: '_animateAnts',
            value: function _animateAnts() {
                var _this = this;

                var animationIndex = 2;
                this._animationIterator = setInterval(function () {
                    _this._draw();
                    var ants = _this._ac.getAnts();
                    for (var antIndex in ants) {
                        _this._moveAnt(ants[antIndex], 1, animationIndex);
                    }
                    animationIndex++;
                    if (animationIndex >= _this._animationSteps) {
                        clearInterval(_this._animationIterator);
                        _this._step();
                    }
                }, 20);
            }
        }]);

        return ACArtist;
    }();

    return ACArtist;
}();

var Graph = function () {
    var Graph = function () {
        function Graph() {
            _classCallCheck(this, Graph);

            this._cities = [];
            this._edges = {};
        }

        _createClass(Graph, [{
            key: 'getEdges',
            value: function getEdges() {
                return this._edges;
            }
        }, {
            key: 'getEdgeCount',
            value: function getEdgeCount() {
                return Object.keys(this._edges).length;
            }
        }, {
            key: 'getCity',
            value: function getCity(cityIndex) {
                return this._cities[cityIndex];
            }
        }, {
            key: 'getCities',
            value: function getCities() {
                return this._cities;
            }
        }, {
            key: 'size',
            value: function size() {
                return this._cities.length;
            }
        }, {
            key: 'addCity',
            value: function addCity(x, y) {
                this._cities.push(new City(x, y));
            }
        }, {
            key: '_addEdge',
            value: function _addEdge(cityA, cityB) {
                this._edges[cityA.toString() + '-' + cityB.toString()] = new Edge(cityA, cityB);
            }
        }, {
            key: 'getEdge',
            value: function getEdge(cityA, cityB) {
                if (this._edges[cityA.toString() + '-' + cityB.toString()] != undefined) {
                    return this._edges[cityA.toString() + '-' + cityB.toString()];
                }
                if (this._edges[cityB.toString() + '-' + cityA.toString()] != undefined) {
                    return this._edges[cityB.toString() + '-' + cityA.toString()];
                }
            }
        }, {
            key: 'createEdges',
            value: function createEdges() {
                this._edges = {};

                for (var cityIndex = 0; cityIndex < this._cities.length; cityIndex++) {
                    for (var connectionIndex = cityIndex; connectionIndex < this._cities.length; connectionIndex++) {
                        this._addEdge(this._cities[cityIndex], this._cities[connectionIndex]);
                    }
                }
            }
        }, {
            key: 'resetPheromone',
            value: function resetPheromone() {
                for (var edgeIndex in this._edges) {
                    this._edges[edgeIndex].resetPheromone();
                }
            }
        }, {
            key: 'clear',
            value: function clear() {
                this._cities = [];
                this._edges = {};
            }
        }]);

        return Graph;
    }();

    return Graph;
}();

var City = function () {
    var City = function () {
        function City(x, y) {
            _classCallCheck(this, City);

            this._x = x;
            this._y = y;
        }

        _createClass(City, [{
            key: 'getX',
            value: function getX() {
                return this._x;
            }
        }, {
            key: 'getY',
            value: function getY() {
                return this._y;
            }
        }, {
            key: 'toString',
            value: function toString() {
                return this._x + ',' + this._y;
            }
        }, {
            key: 'isEqual',
            value: function isEqual(city) {
                if (this._x == city._x && this._y == city._y) {
                    return true;
                }
                return false;
            }
        }]);

        return City;
    }();

    return City;
}();

var Edge = function () {
    var Edge = function () {
        function Edge(cityA, cityB) {
            _classCallCheck(this, Edge);

            this._cityA = cityA;
            this._cityB = cityB;
            this._initPheromone = 1;
            this._pheromone = this._initPheromone;

            // Calculate edge distance
            var deltaXSq = Math.pow(cityA.getX() - cityB.getX(), 2);
            var deltaYSq = Math.pow(cityA.getY() - cityB.getY(), 2);
            this._distance = Math.sqrt(deltaXSq + deltaYSq);
        }

        _createClass(Edge, [{
            key: 'pointA',
            value: function pointA() {
                return { 'x': this._cityA.getX(), 'y': this._cityA.getY() };
            }
        }, {
            key: 'pointB',
            value: function pointB() {
                return { 'x': this._cityB.getX(), 'y': this._cityB.getY() };
            }
        }, {
            key: 'getPheromone',
            value: function getPheromone() {
                return this._pheromone;
            }
        }, {
            key: 'getDistance',
            value: function getDistance() {
                return this._distance;
            }
        }, {
            key: 'contains',
            value: function contains(city) {
                if (this._cityA.getX() == city.getX()) {
                    return true;
                }
                if (this._cityB.getX() == city.getX()) {
                    return true;
                }
                return false;
            }
        }, {
            key: 'setInitialPheromone',
            value: function setInitialPheromone(pheromone) {
                this._initPheromone = pheromone;
            }
        }, {
            key: 'setPheromone',
            value: function setPheromone(pheromone) {
                this._pheromone = pheromone;
            }
        }, {
            key: 'resetPheromone',
            value: function resetPheromone() {
                this._pheromone = this._initPheromone;
            }
        }]);

        return Edge;
    }();

    return Edge;
}();

var AntColony = function () {
    var AntColony = function () {
        function AntColony(params) {
            _classCallCheck(this, AntColony);

            this._graph = new Graph();
            this._colony = [];

            // Set default params
            this._colonySize = 20;
            this._alpha = 1;
            this._beta = 3;
            this._rho = 0.1;
            this._q = 1;
            this._initPheromone = this._q;
            this._type = 'acs';
            this._elitistWeight = 0;
            this._maxIterations = 250;
            this._minScalingFactor = 0.001;

            this.setParams(params);

            this._iteration = 0;
            this._minPheromone = null;
            this._maxPheromone = null;

            this._iterationBest = null;
            this._globalBest = null;

            this._createAnts();
        }

        _createClass(AntColony, [{
            key: 'getGraph',
            value: function getGraph() {
                return this._graph;
            }
        }, {
            key: 'getAnts',
            value: function getAnts() {
                return this._colony;
            }
        }, {
            key: 'size',
            value: function size() {
                return this._colony.length;
            }
        }, {
            key: 'currentIteration',
            value: function currentIteration() {
                return this._iteration;
            }
        }, {
            key: 'maxIterations',
            value: function maxIterations() {
                return this._maxIterations;
            }
        }, {
            key: '_createAnts',
            value: function _createAnts() {
                this._colony = [];
                for (var antIndex = 0; antIndex < this._colonySize; antIndex++) {
                    this._colony.push(new Ant(this._graph, {
                        'alpha': this._alpha,
                        'beta': this._beta,
                        'q': this._q
                    }));
                }
            }
        }, {
            key: 'setParams',
            value: function setParams(params) {
                if (params != undefined) {
                    if (params.colonySize != undefined) {
                        this._colonySize = params.colonySize;
                    }
                    if (params.alpha != undefined) {
                        this._alpha = params.alpha;
                    }
                    if (params.beta != undefined) {
                        this._beta = params.beta;
                    }
                    if (params.rho != undefined) {
                        this._rho = params.rho;
                    }
                    if (params.iterations != undefined) {
                        this._maxIterations = params.iterations;
                    }
                    if (params.q != undefined) {
                        this._q = params.q;
                    }
                    if (params.initPheromone != undefined) {
                        this._initPheromone = params.initPheromone;
                    }
                    if (params.type != undefined) {
                        if (params.type == 'elitist') {
                            if (params.elitistWeight != undefined) {
                                this._elitistWeight = params.elitistWeight;
                                this._type = 'elitist';
                            }
                        } else if (params.type == 'maxmin') {
                            this._type = 'maxmin';
                        } else {
                            this._type = 'acs';
                        }
                    }
                    if (params.minScalingFactor != undefined) {
                        this._minScalingFactor = params.minScalingFactor;
                    }
                }
            }
        }, {
            key: 'reset',
            value: function reset() {
                this._iteration = 0;
                this._globalBest = null;
                this.resetAnts();
                this.setInitialPheromone(this._initPheromone);
                this._graph.resetPheromone();
            }
        }, {
            key: 'setInitialPheromone',
            value: function setInitialPheromone() {
                var edges = this._graph.getEdges();
                for (var edgeIndex in edges) {
                    edges[edgeIndex].setInitialPheromone(this._initPheromone);
                }
            }
        }, {
            key: 'resetAnts',
            value: function resetAnts() {
                this._createAnts();
                this._iterationBest = null;
            }
        }, {
            key: 'ready',
            value: function ready() {
                if (this._graph.size() <= 1) {
                    return false;
                }
                return true;
            }
        }, {
            key: 'run',
            value: function run() {
                if (!this.ready()) {
                    return;
                }

                this._iteration = 0;
                while (this._iteration < this._maxIterations) {
                    this.step();
                }
            }
        }, {
            key: 'step',
            value: function step() {
                if (!this.ready() || this._iteration >= this._maxIterations) {
                    return;
                }

                this.resetAnts();

                for (var antIndex in this._colony) {
                    this._colony[antIndex].run();
                }

                this.getGlobalBest();
                this.updatePheromone();

                this._iteration++;
            }
        }, {
            key: 'updatePheromone',
            value: function updatePheromone() {
                var edges = this._graph.getEdges();
                for (var edgeIndex in edges) {
                    var pheromone = edges[edgeIndex].getPheromone();
                    edges[edgeIndex].setPheromone(pheromone * (1 - this._rho));
                }

                if (this._type == 'maxmin') {
                    if (this._iteration / this._maxIterations > 0.75) {
                        var best = this.getGlobalBest();
                    } else {
                        var best = this.getIterationBest();
                    }

                    // Set maxmin
                    this._maxPheromone = this._q / best.getTour().distance();
                    this._minPheromone = this._maxPheromone * this._minScalingFactor;

                    best.addPheromone();
                } else {
                    for (var antIndex in this._colony) {
                        this._colony[antIndex].addPheromone();
                    }
                }

                if (this._type == 'elitist') {
                    this.getGlobalBest().addPheromone(this._elitistWeight);
                }

                if (this._type == 'maxmin') {
                    for (var edgeIndex in edges) {
                        var pheromone = edges[edgeIndex].getPheromone();
                        if (pheromone > this._maxPheromone) {
                            edges[edgeIndex].setPheromone(this._maxPheromone);
                        } else if (pheromone < this._minPheromone) {
                            edges[edgeIndex].setPheromone(this._minPheromone);
                        }
                    }
                }
            }
        }, {
            key: 'getIterationBest',
            value: function getIterationBest() {
                if (this._colony[0].getTour() == null) {
                    return null;
                }

                if (this._iterationBest == null) {
                    var best = this._colony[0];

                    for (var antIndex in this._colony) {
                        if (best.getTour().distance() >= this._colony[antIndex].getTour().distance()) {
                            this._iterationBest = this._colony[antIndex];
                        }
                    }
                }

                return this._iterationBest;
            }
        }, {
            key: 'getGlobalBest',
            value: function getGlobalBest() {
                var bestAnt = this.getIterationBest();
                if (bestAnt == null && this._globalBest == null) {
                    return null;
                }

                if (bestAnt != null) {
                    if (this._globalBest == null || this._globalBest.getTour().distance() >= bestAnt.getTour().distance()) {
                        this._globalBest = bestAnt;
                    }
                }

                return this._globalBest;
            }
        }]);

        return AntColony;
    }();

    return AntColony;
}();

var Ant = function () {
    var Ant = function () {
        function Ant(graph, params) {
            _classCallCheck(this, Ant);

            this._graph = graph;

            this._alpha = params.alpha;
            this._beta = params.beta;
            this._q = params.q;
            this._tour = null;
        }

        _createClass(Ant, [{
            key: 'reset',
            value: function reset() {
                this._tour = null;
            }
        }, {
            key: 'init',
            value: function init() {
                this._tour = new Tour(this._graph);
                var randCityIndex = Math.floor(Math.random() * this._graph.size());
                this._currentCity = this._graph.getCity(randCityIndex);
                this._tour.addCity(this._currentCity);
            }
        }, {
            key: 'getTour',
            value: function getTour() {
                return this._tour;
            }
        }, {
            key: 'makeNextMove',
            value: function makeNextMove() {
                if (this._tour == null) {
                    this.init();
                }

                var rouletteWheel = 0.0;
                var cities = this._graph.getCities();

                var cityProbabilities = [];
                for (var cityIndex in cities) {
                    if (!this._tour.contains(cities[cityIndex])) {
                        var edge = this._graph.getEdge(this._currentCity, cities[cityIndex]);
                        if (this._alpha == 1) {
                            var finalPheromoneWeight = edge.getPheromone();
                        } else {
                            var finalPheromoneWeight = Math.pow(edge.getPheromone(), this._alpha);
                        }
                        cityProbabilities[cityIndex] = finalPheromoneWeight * (1.0 / Math.pow(edge.getDistance(), this._beta));
                        rouletteWheel += cityProbabilities[cityIndex];
                    }
                }

                var wheelTarget = rouletteWheel * Math.random();

                var wheelPosition = 0.0;
                for (var cityIndex in cities) {
                    if (!this._tour.contains(cities[cityIndex])) {
                        wheelPosition += cityProbabilities[cityIndex];
                        if (wheelPosition >= wheelTarget) {
                            this._currentCity = cities[cityIndex];
                            this._tour.addCity(cities[cityIndex]);
                            return;
                        }
                    }
                }
            }
        }, {
            key: 'tourFound',
            value: function tourFound() {
                if (this._tour == null) {
                    return false;
                }
                return this._tour.size() >= this._graph.size();
            }
        }, {
            key: 'run',
            value: function run(callback) {
                this.reset();
                while (!this.tourFound()) {
                    this.makeNextMove();
                }
            }
        }, {
            key: 'addPheromone',
            value: function addPheromone(weight) {
                if (weight == undefined) {
                    weight = 1;
                }

                var extraPheromone = this._q * weight / this._tour.distance();
                for (var tourIndex = 0; tourIndex < this._tour.size(); tourIndex++) {
                    if (tourIndex >= this._tour.size() - 1) {
                        var fromCity = this._tour.get(tourIndex);
                        var toCity = this._tour.get(0);
                        var edge = this._graph.getEdge(fromCity, toCity);
                        var pheromone = edge.getPheromone();
                        edge.setPheromone(pheromone + extraPheromone);
                    } else {
                        var fromCity = this._tour.get(tourIndex);
                        var toCity = this._tour.get(tourIndex + 1);
                        var edge = this._graph.getEdge(fromCity, toCity);
                        var pheromone = edge.getPheromone();
                        edge.setPheromone(pheromone + extraPheromone);
                    }
                }
            }
        }]);

        return Ant;
    }();

    return Ant;
}();

var Tour = function () {
    var Tour = function () {
        function Tour(graph) {
            _classCallCheck(this, Tour);

            this._graph = graph;
            this._tour = [];
            this._distance = null;
        }

        _createClass(Tour, [{
            key: 'size',
            value: function size() {
                return this._tour.length;
            }
        }, {
            key: 'contains',
            value: function contains(city) {
                for (var tourIndex in this._tour) {
                    if (city.isEqual(this._tour[tourIndex])) {
                        return true;
                    }
                }

                return false;
            }
        }, {
            key: 'addCity',
            value: function addCity(city) {
                this._distance = null;
                this._tour.push(city);
            }
        }, {
            key: 'get',
            value: function get(tourIndex) {
                return this._tour[tourIndex];
            }
        }, {
            key: 'distance',
            value: function distance() {
                if (this._distance == null) {
                    var distance = 0.0;

                    for (var tourIndex = 0; tourIndex < this._tour.length; tourIndex++) {
                        if (tourIndex >= this._tour.length - 1) {
                            var edge = this._graph.getEdge(this._tour[tourIndex], this._tour[0]);
                            distance += edge.getDistance();
                        } else {
                            var edge = this._graph.getEdge(this._tour[tourIndex], this._tour[tourIndex + 1]);
                            distance += edge.getDistance();
                        }
                    }

                    this._distance = distance;
                }

                return this._distance;
            }
        }]);

        return Tour;
    }();

    return Tour;
}();

$(document).ready(function () {
    var antCanvas = new Canvas('#aco-canvas', 940, 600);
    var ac = new AntColony();
    var acArtist = new ACArtist(ac, antCanvas);

    $('#aco-params select').change(function () {
        acArtist.stop();
        setParams();
    });

    $('#aco-mode').change(function () {
        $('#elitist-weight-input').hide();
        $('.maxmin-params').hide();
        if ($(this).val() == 'elitist') {
            $('#elitist-weight-input').show();
        } else if ($(this).val() == 'maxmin') {
            $('.maxmin-params').show();
        }
    });

    function setParams() {
        var params = {
            'type': $('#aco-mode').val(),
            'colonySize': $('#colony-size').val(),
            'alpha': $('#alpha').val(),
            'beta': $('#beta').val(),
            'rho': $('#rho').val(),
            'iterations': $('#max-iterations').val(),
            'elitistWeight': $('#elitist-weight').val(),
            'initPheromone': $('#init-pheromone').val(),
            'q': $('#pheromone-deposit-weight').val(),
            'minScalingFactor': $('#min-scalar').val()
        };

        ac.setParams(params);
    }

    setParams();

    $('#start-search-btn').click(function () {
        if (!ac.ready()) {
            loadPopup({ msg: 'Please add at least two destination nodes' });
        }

        $('.aco-info').show();
        $('#iteration-info').html('0/' + ac.maxIterations());
        $('#best-distance').html('-');
        acArtist.runAC(function () {
            $('#iteration-info').html(ac.currentIteration() + '/' + ac.maxIterations());
            $('#best-distance').html(ac.getGlobalBest().getTour().distance().toFixed(2));
        });
    });
    $('#clear-graph').click(acArtist.clearGraph);
});
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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (algFunc) {
    var NearestNeighbor = function () {
        function NearestNeighbor(solver) {
            _classCallCheck(this, NearestNeighbor);

            this.solver = solver;
            this.done = false;
            this.shortest = Number.MAX_VALUE;
            this.index = 0;
        }

        _createClass(NearestNeighbor, [{
            key: 'solve',
            value: function solve() {

                if (this.index >= this.solver.points.length - 1) this.done = true;

                var candidate = this.nearestNeighborPath();

                var length = this.solver.pathDistance(candidate);
                if (length < this.shortest) {
                    this.shortest = length;
                    this.best = candidate;
                }

                this.index++;
                return this.best;
            }
        }]);

        return NearestNeighbor;
    }();

    var nearestNeighborPath = function nearestNeighborPath() {

        var distance = algFunc.distance;
        var possible = this.solver.getPossible();
        var pts = this.solver.points;
        var candidate = [possible[this.index]];
        possible.splice(this.index, 1);

        while (possible.length > 0) {
            var min = Number.MAX_VALUE;
            var minIndex = 0;
            var compareIndex = candidate[candidate.length - 1];
            for (var i = 0; i < possible.length; i++) {
                var d = distance(pts[compareIndex], pts[possible[i]]);
                if (d < min) {
                    min = d;
                    minIndex = i;
                }
            }
            candidate.push(possible[minIndex]);
            possible.splice(minIndex, 1);
        }

        return candidate;
    };

    NearestNeighbor.prototype.nearestNeighborPath = nearestNeighborPath;

    algFunc.register({
        name: 'Nearest Neighbor',
        NearestNeighbor: NearestNeighbor
    });
})(TSP);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (algFunc) {
    var BruteForce = function () {
        function BruteForce(solver) {
            _classCallCheck(this, BruteForce);

            this.init(solver);
            this.setUpCandidates();
        }

        _createClass(BruteForce, [{
            key: 'init',
            value: function init(solver) {
                this.solver = solver;
                this.possible = solver.getPossible();
                this.solution = [this.possible[0]];
                this.candidates = [];
                this.distances = [];
                this.depth = 0;
                this.currentDistance = 0.0;
                this.bestDistance = Number.MAX_VALUE;
                this.best = [];
            }
        }, {
            key: 'setUpCandidates',
            value: function setUpCandidates() {
                this.candidates.push(this.possible.filter(function (item) {
                    return !this.solution.includes(item);
                }, this));
            }
        }, {
            key: 'solve',
            value: function solve() {
                var count = 0;
                var pts = this.solver.points;
                var solution = this.solution;
                var d = 0.0;
                var candidates = void 0;
                var c = void 0;

                while (count++ < 1000) {

                    candidates = this.candidates[this.candidates.length - 1];

                    // no more options at this depth
                    if (candidates.length === 0) {
                        this.backup();
                        if (this.depth < 0) {
                            this.done = true;
                            break;
                        }
                    } else if (this.depth === pts.length - 2) {
                        // leaf node

                        c = candidates[0];

                        d = algFunc.distance(pts[solution[solution.length - 1]], pts[c]) + algFunc.distance(pts[solution[0]], pts[c]);

                        if (d + this.currentDistance < this.bestDistance) {
                            this.bestDistance = d + this.currentDistance;
                            this.best = solution.slice();
                            this.best.push(c);
                        }

                        this.backup();
                    } else {

                        c = candidates.pop();

                        d = algFunc.distance(pts[solution[solution.length - 1]], pts[c]);
                        solution.push(c);
                        this.currentDistance += d;

                        var lowerBound = this.getLowerBound(candidates);

                        if (this.currentDistance + lowerBound >= this.bestDistance) {
                            this.currentDistance -= d;
                            solution.pop();
                        } else {
                            this.distances.push(d);
                            this.depth++;
                            this.setUpCandidates();
                        }
                    }
                }

                return this.best;
            }
        }, {
            key: 'backup',
            value: function backup() {
                this.depth--;
                if (this.depth >= 0) {
                    this.candidates.pop();
                    this.solution.pop();
                    this.currentDistance -= this.distances.pop();
                }
            }
        }, {
            key: 'getLowerBound',
            value: function getLowerBound() {
                return 0.0;
            }
        }]);

        return BruteForce;
    }();

    algFunc.register({
        name: 'Brute Force',
        BruteForce: BruteForce
    });
})(TSP);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (alg) {
    var BranchNBound = function () {
        function BranchNBound(solver) {
            _classCallCheck(this, BranchNBound);

            this.init(solver);
            this.initCachedDistances();
            this.setUpCandidates();
        }

        _createClass(BranchNBound, [{
            key: 'initCachedDistances',
            value: function initCachedDistances() {
                this.cachedDistances = [];
                var pts = this.solver.points;
                for (var i = 0; i < pts.length; i++) {
                    this.cachedDistances[i] = [];
                    for (var j = i + 1; j < pts.length; j++) {
                        this.cachedDistances[i][j - i - 1] = alg.distance(pts[i], pts[j]);
                    }
                }
            }
        }, {
            key: 'setUpCandidates',
            value: function setUpCandidates() {
                var parent = this.solution[this.solution.length - 1];
                var sortable = this.possible.filter(function (i) {
                    return !this.solution.includes(i);
                }, this).map(function (i) {
                    return {
                        index: i,
                        distance: this.lookupDistance(parent, i)
                    };
                }, this);
                sortable.sort(sortDistanceDesc);
                this.candidates.push(sortable.map(function (i) {
                    return i.index;
                }));
            }
        }, {
            key: 'lookupDistance',
            value: function lookupDistance(index1, index2) {
                var first = Math.min(index1, index2);
                var second = Math.max(index1, index2);
                return this.cachedDistances[first][second - first - 1];
            }
        }, {
            key: 'getLowerBound',
            value: function getLowerBound(candidates) {
                var lowerBound = 0.0;
                var minFirstHop = Number.MAX_VALUE;
                var minLastHop = Number.MAX_VALUE;
                var firstIndex = this.solution[0];
                var lastIndex = this.solution[this.solution.length - 1];
                var maxDistance = 0.0;
                var minDistance = Number.MAX_VALUE;

                candidates.forEach(function (i) {

                    minFirstHop = Math.min(minFirstHop, this.lookupDistance(firstIndex, i));
                    minLastHop = Math.min(minLastHop, this.lookupDistance(lastIndex, i));

                    minDistance = Number.MAX_VALUE;
                    candidates.forEach(function (j) {
                        if (i !== j) {
                            minDistance = Math.min(minDistance, this.lookupDistance(i, j));
                        }
                    }, this);

                    if (minDistance < maxDistance) {
                        lowerBound += minDistance;
                    } else {
                        lowerBound += maxDistance;
                        maxDistance = minDistance;
                    }
                }, this);

                return lowerBound + minFirstHop + minLastHop;
            }
        }]);

        return BranchNBound;
    }();

    alg.extendAlgorithm(BranchNBound, 'BruteForce', 'init');
    alg.extendAlgorithm(BranchNBound, 'BruteForce', 'solve');
    alg.extendAlgorithm(BranchNBound, 'BruteForce', 'backup');

    var sortDistanceDesc = function sortDistanceDesc(a, b) {
        return b.distance - a.distance;
    };

    alg.register({
        name: 'Branch & Bound',
        BranchNBound: BranchNBound
    });
})(TSP);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (algFunc) {
    var GA = function () {
        function GA(solver) {
            _classCallCheck(this, GA);

            this.solver = solver;

            var population = [];
            for (var i = 0; i < 100; i++) {
                population.push(this.randomIndividual());
            }population.sort(this.sortDistance);

            this.population = population;
        }

        _createClass(GA, [{
            key: 'sortDistance',
            value: function sortDistance(a, b) {
                return a.distance - b.distance;
            }
        }, {
            key: 'randomIndividual',
            value: function randomIndividual() {
                var individual = { gene: this.randomSolution() };
                individual.distance = this.solver.pathDistance(individual.gene);
                return individual;
            }
        }, {
            key: 'getSurvivors',
            value: function getSurvivors(lotteryNumbers) {
                var survivors = [];
                for (var i = 0; i < lotteryNumbers.length; i++) {
                    survivors.push(this.population[lotteryNumbers[i]]);
                }return survivors;
            }
        }, {
            key: 'mutate',
            value: function mutate(individual, mutationCount) {
                var gene = individual.gene.slice(0);
                for (var i = 0; i < mutationCount; i++) {
                    var mutateIndex = algFunc.randomInt(gene.length - 1);
                    var index = gene[mutateIndex];
                    gene.splice(mutateIndex, 1);
                    gene.splice(algFunc.randomInt(gene.length - 1), 0, index);
                }
                var mutant = { gene: gene };
                mutant.distance = this.solver.pathDistance(mutant.gene);
                return mutant;
            }
        }, {
            key: 'crossover',
            value: function crossover(parent1, parent2) {

                var gene = [];
                var gl = parent1.gene.length;
                var remains = parent2.gene.slice(0);

                var start = algFunc.randomInt(gl - 1);
                var end = algFunc.randomInt(gl - 1);
                while (start === end) {
                    end = algFunc.randomInt(gl - 1);
                }while (start !== end) {
                    var index = parent1.gene[start];
                    gene.push(index);
                    remains.splice(remains.indexOf(index), 1);
                    if (++start === gl) start = 0;
                }

                for (var i = 0; i < remains.length; i++) {
                    gene.push(remains[i]);
                }var child = { gene: gene };
                child.distance = this.solver.pathDistance(gene);
                return child;
            }
        }, {
            key: 'solve',
            value: function solve() {
                var survivors = this.getSurvivors([0, 1, 2, 4, 10, 25, 35, 55, 95]);
                var sl = survivors.length;
                var i = 0;
                var j = 0;
                var child = void 0;

                for (i = 0; i < sl; i++) {
                    for (j = 0; j < sl; j++) {
                        if (i !== j) {
                            child = this.crossover(survivors[i], survivors[j]);
                            child = this.mutate(child, algFunc.randomInt(2));
                            survivors.push(child);
                        }
                    }
                }

                while (survivors.length < 100) {
                    survivors.push(this.randomIndividual());
                }survivors.sort(this.sortDistance);
                this.population = survivors;
                return survivors[0].gene;
            }
        }]);

        return GA;
    }();

    algFunc.extendAlgorithm(GA, 'OneRandom', 'randomSolution');

    algFunc.register({
        name: 'Genetic Algorithm',
        GA: GA
    });
})(TSP);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (algFunc) {
    var OneRandom = function () {
        function OneRandom(solver) {
            _classCallCheck(this, OneRandom);

            this.solver = solver;
            this.done = true;
        }

        _createClass(OneRandom, [{
            key: 'randomSolution',
            value: function randomSolution() {
                var result = [];
                var possible = this.solver.getPossible();
                while (possible.length > 0) {
                    var index = algFunc.randomInt(possible.length - 1);
                    result.push(possible[index]);
                    possible.splice(index, 1);
                }
                return result;
            }
        }, {
            key: 'solve',
            value: function solve() {
                return this.randomSolution();
            }
        }]);

        return OneRandom;
    }();

    algFunc.register({
        name: 'One Random Solution',
        OneRandom: OneRandom
    });
})(TSP);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (algFunc) {
    var IterateRandom = function () {
        function IterateRandom(solver) {
            _classCallCheck(this, IterateRandom);

            this.solver = solver;
        }

        _createClass(IterateRandom, [{
            key: 'solve',
            value: function solve() {
                return this.randomSolution();
            }
        }]);

        return IterateRandom;
    }();

    algFunc.extendAlgorithm(IterateRandom, 'OneRandom', 'randomSolution');

    algFunc.register({
        name: 'Iterate Random Solutions',
        IterateRandom: IterateRandom
    });
})(TSP);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (algFunc) {
    var TwoOptBest = function () {
        function TwoOptBest(solver) {
            _classCallCheck(this, TwoOptBest);

            this.solver = solver;
            this.done = false;
            this.best = this.randomSolution();
        }

        _createClass(TwoOptBest, [{
            key: 'solve',
            value: function solve() {

                var pts = this.solver.points;
                var pl = pts.length;
                var largestDelta = 0.0;
                var path = this.best;
                var distance = algFunc.distance;

                for (var i = 0; i < pl; i++) {

                    var after = i + 1;
                    if (after === pl) after = 0;

                    var iDistance = distance(pts[path[i]], pts[path[after]]);

                    for (var j = i + 1; j < pl; j++) {

                        var jAfter = j + 1;
                        if (j === pl - 1) jAfter = 0;

                        var edgeDistance = iDistance + distance(pts[path[j]], pts[path[jAfter]]);

                        var changedDistance = distance(pts[path[i]], pts[path[j]]) + distance(pts[path[after]], pts[path[jAfter]]);

                        var delta = edgeDistance - changedDistance;

                        if (delta > largestDelta) {

                            largestDelta = delta;

                            var candidate = [];
                            var a = after;
                            while (a % pl !== jAfter) {
                                candidate.push(path[a % pl]);
                                a++;
                            }

                            a = i;
                            while (a % pl !== j) {
                                candidate.push(path[a % pl]);
                                a--;
                                if (a < 0) a = pl - 1;
                            }
                            this.best = candidate;
                        }
                    }
                }

                if (largestDelta <= 0.0) this.done = true;

                return this.best;
            }
        }]);

        return TwoOptBest;
    }();

    algFunc.extendAlgorithm(TwoOptBest, 'OneRandom', 'randomSolution');

    algFunc.register({
        name: '2-Optimization Algorithm',
        TwoOptBest: TwoOptBest
    });
})(TSP);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (TSP) {
    var CIRCLE_RADIUS = 1.0;
    var LINE_COLOR = '#06f';
    var LINE_WIDTH = 0.5;
    var FULL_CIRCLE = Math.PI * 2.0;

    var UI = function () {
        function UI(canvas, notify) {
            _classCallCheck(this, UI);

            if (typeof notify !== "function") notify = function notify() {};

            var ui = this;
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');

            var uiNotify = function uiNotify() {
                // only draw if things have improved.
                if (ui.improvements !== ui.solver.improvements) {
                    ui.draw();
                    ui.improvements = ui.solver.improvements;
                }
                notify({
                    distance: ui.solver.distance,
                    iteration: ui.solver.iteration,
                    improvements: ui.solver.improvements
                });
            };
            this.solver = new TSP.Solver(uiNotify);

            canvas.addEventListener('mousedown', function (e) {
                var x = e.clientX - this.offsetLeft + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft);
                var y = e.clientY - this.offsetTop + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
                ui.solver.solution = [];
                ui.solver.addPoint(x, y);
                ui.draw();
            });
        }

        _createClass(UI, [{
            key: 'draw',
            value: function draw() {
                var pts = this.solver.points;
                var pl = pts.length;
                var solution = this.solver.solution;
                var ctx = this.ctx;
                var i = 0;

                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                for (i = 0; i < pl; i++) {
                    ctx.beginPath();
                    ctx.arc(pts[i].x, pts[i].y, CIRCLE_RADIUS, 0, FULL_CIRCLE, true);
                    ctx.fill();
                }

                if (pl > 1 && solution.length > 1) {
                    ctx.save();
                    ctx.strokeStyle = LINE_COLOR;
                    ctx.lineWidth = LINE_WIDTH;
                    ctx.moveTo(pts[solution[0]].x, pts[solution[0]].y);
                    for (i = 1; i < pl; i++) {
                        ctx.lineTo(pts[solution[i]].x, pts[solution[i]].y);
                    }ctx.lineTo(pts[solution[0]].x, pts[solution[0]].y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }, {
            key: 'addRandom',
            value: function addRandom(n) {
                var count = parseInt(n, 10);
                var pts = this.solver.points;
                var i = 0;

                this.solver.solution = [];

                if (!isNaN(count)) {
                    for (; i < count; i++) {
                        this.solver.addPoint(TSP.randomInt(this.canvas.width), TSP.randomInt(this.canvas.height));
                    }
                    this.draw();
                }
            }
        }, {
            key: 'solve',
            value: function solve(algo) {
                this.improvements = 0;
                this.solver.solve(algo);
            }
        }, {
            key: 'clear',
            value: function clear() {
                this.solver.clear();
                this.draw();
            }
        }, {
            key: 'stop',
            value: function stop() {
                this.solver.stop();
            }
        }]);

        return UI;
    }();

    TSP.UI = UI;
})(TSP);
'use strict';

(function () {
    var byId = function byId(id) {
        return document.getElementById(id);
    };

    var thecanvas = byId('thecanvas');
    var spnDistance = byId('spnDistance');
    var spnIteration = byId('spnIteration');
    var spnImprovement = byId('spnImprovement');
    var spnPointCount = byId('spnPointCount');
    var ddlAlg = byId('ddlAlg');

    var notify = function notify(data) {
        spnDistance.innerHTML = data.distance;
        spnIteration.innerHTML = data.iteration;
        spnImprovement.innerHTML = data.improvements;
        spnTime.innerHTML = data.time;
    };

    var ui = new TSP.UI(thecanvas, notify);
    for (var key in TSP.algorithms) {
        ddlAlg.appendChild(new Option(TSP.algorithms[key].name, key));
    }
    byId('btnAddRandom').addEventListener('click', function () {
        ui.addRandom(byId('txtAddCount').value);
        spnPointCount.innerHTML = ui.solver.points.length;
    });
    byId('btnClear').addEventListener('click', function () {
        ui.clear();
    });
    byId('btnGo').addEventListener('click', function () {
        ui.solve(ddlAlg.value);
    });
    byId('btnStop').addEventListener('click', function () {
        ui.stop();
    });
    thecanvas.addEventListener('mousedown', function () {
        setTimeout(function () {
            spnPointCount.innerHTML = ui.solver.points.length;
        }, 0);
    });
})();