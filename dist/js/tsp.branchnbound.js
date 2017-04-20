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