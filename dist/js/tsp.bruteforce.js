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