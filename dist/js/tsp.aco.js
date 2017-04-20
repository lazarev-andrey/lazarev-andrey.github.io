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