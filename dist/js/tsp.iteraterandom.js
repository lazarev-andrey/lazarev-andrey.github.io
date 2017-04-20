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