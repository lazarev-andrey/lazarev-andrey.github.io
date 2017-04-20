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