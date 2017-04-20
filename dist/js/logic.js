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