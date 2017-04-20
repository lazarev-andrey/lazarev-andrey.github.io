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