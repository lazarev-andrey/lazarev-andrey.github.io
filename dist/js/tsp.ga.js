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