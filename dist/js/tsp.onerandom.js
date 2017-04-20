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