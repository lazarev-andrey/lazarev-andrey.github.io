(function(){
var extent = 25,
	width = 450, height = 450,
	margin = {top:10, left:10, bottom:10, right:10},
	plotWidth = width-(margin.left+margin.right),
	plotHeight = height-(margin.top+margin.bottom);

var scaleX = d3.scale.linear()
	.domain([-extent, +extent])
	.range([0, plotWidth]);

var scaleY = d3.scale.linear()
	.domain([extent, -extent])
	.range([0, plotWidth]);

var xAxis = d3.svg.axis().scale(scaleX)
				.orient('bottom');
var yAxis = d3.svg.axis().scale(scaleY)
				.orient('left');

var svg = d3.select('.complex-plane-result').append('svg')
	.attr({
		width:450,
		height:450
	})
	.append('g')
	.attr('transform','translate('+margin.left+','+margin.top+')');

svg.append('g').attr({
		'class':'x axis',
		'transform':'translate(0,'+plotWidth/2+')'
	}).call(xAxis);

svg.append('g').attr({
		'class':'y axis',
		'transform':'translate('+plotHeight/2+',0)'
	}).call(yAxis);

var points = svg.append('g');

update();

//synchronize updates
document.getElementById('update').onclick = function() {
   update();
};

d3.select("#updateTransform").on("click", update);

function update(){
    var fourier2DArray = fourier.dftSimple(realArray, imagArray);
    var fourier1DArray = Array.prototype.concat.apply([], fourier2DArray);

(function(){
    n = document.getElementById('nrange').value;

    fourierReal = fourier1DArray.slice(0, 50),
    fourierImag = fourier1DArray.slice(50),
    realTemp = fourierReal
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(fourierReal[a]) - Math.abs(fourierReal[b]); })

    fourierImag = fourier1DArray.slice(50),
    imagTemp = fourierImag
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(fourierImag[a]) - Math.abs(fourierImag[b]); })

        while (n--) {
            fourierReal[realTemp[n]] = 0;
            fourierImag[imagTemp[n]] = 0;
        }
})();

var restored2DArray = fourier.idft(fourierReal, fourierImag),
    restored1DArray = Array.prototype.concat.apply([], restored2DArray);
    restoredRealArray = restored1DArray.slice(0, 50),
    restoredImagArray = restored1DArray.slice(50);

// var len = restoredRealArray.length;
// for (var i = 0; i < len; i++) {
//   transformedComplexPointsValues['g' + (i + 1)] = {
//     r: restoredRealArray[i],
//     i: restoredImagArray[i],
//   };
// }

var transformedComplexPointsValues = [
    g1 = {r: restoredRealArray[0], i: restoredImagArray[0]},
    g2 = {r: restoredRealArray[1], i: restoredImagArray[1]},
    g3 = {r: restoredRealArray[2], i: restoredImagArray[2]},
    g4 = {r: restoredRealArray[3], i: restoredImagArray[3]},
    g5 = {r: restoredRealArray[4], i: restoredImagArray[4]},
    g6 = {r: restoredRealArray[5], i: restoredImagArray[5]},
    g7 = {r: restoredRealArray[6], i: restoredImagArray[6]},
    g8 = {r: restoredRealArray[7], i: restoredImagArray[7]},
    g9 = {r: restoredRealArray[8], i: restoredImagArray[8]},
    g10 = {r: restoredRealArray[9], i: restoredImagArray[9]},

    g11 = {r: restoredRealArray[10], i: restoredImagArray[10]},
    g12 = {r: restoredRealArray[11], i: restoredImagArray[11]},
    g13 = {r: restoredRealArray[12], i: restoredImagArray[12]},
    g14 = {r: restoredRealArray[13], i: restoredImagArray[13]},
    g15 = {r: restoredRealArray[14], i: restoredImagArray[14]},
    g16 = {r: restoredRealArray[15], i: restoredImagArray[15]},
    g17 = {r: restoredRealArray[16], i: restoredImagArray[16]},
    g18 = {r: restoredRealArray[17], i: restoredImagArray[17]},
    g19 = {r: restoredRealArray[18], i: restoredImagArray[18]},
    g20 = {r: restoredRealArray[19], i: restoredImagArray[19]},

    g21 = {r: restoredRealArray[20], i: restoredImagArray[20]},
    g22 = {r: restoredRealArray[21], i: restoredImagArray[21]},
    g23 = {r: restoredRealArray[22], i: restoredImagArray[22]},
    g24 = {r: restoredRealArray[23], i: restoredImagArray[23]},
    g25 = {r: restoredRealArray[24], i: restoredImagArray[24]},
    g26 = {r: restoredRealArray[25], i: restoredImagArray[25]},
    g27 = {r: restoredRealArray[26], i: restoredImagArray[26]},
    g28 = {r: restoredRealArray[27], i: restoredImagArray[27]},
    g29 = {r: restoredRealArray[28], i: restoredImagArray[28]},
    g30 = {r: restoredRealArray[29], i: restoredImagArray[29]},

    g31 = {r: restoredRealArray[30], i: restoredImagArray[30]},
    g32 = {r: restoredRealArray[31], i: restoredImagArray[31]},
    g33 = {r: restoredRealArray[32], i: restoredImagArray[32]},
    g34 = {r: restoredRealArray[33], i: restoredImagArray[33]},
    g35 = {r: restoredRealArray[34], i: restoredImagArray[34]},
    g36 = {r: restoredRealArray[35], i: restoredImagArray[35]},
    g37 = {r: restoredRealArray[36], i: restoredImagArray[36]},
    g38 = {r: restoredRealArray[37], i: restoredImagArray[37]},
    g39 = {r: restoredRealArray[38], i: restoredImagArray[38]},
    g40 = {r: restoredRealArray[39], i: restoredImagArray[39]},

    g41 = {r: restoredRealArray[40], i: restoredImagArray[40]},
    g42 = {r: restoredRealArray[41], i: restoredImagArray[41]},
    g43 = {r: restoredRealArray[42], i: restoredImagArray[42]},
    g44 = {r: restoredRealArray[43], i: restoredImagArray[43]},
    g45 = {r: restoredRealArray[44], i: restoredImagArray[44]},
    g46 = {r: restoredRealArray[45], i: restoredImagArray[45]},
    g47 = {r: restoredRealArray[46], i: restoredImagArray[46]},
    g48 = {r: restoredRealArray[47], i: restoredImagArray[47]},
    g49 = {r: restoredRealArray[48], i: restoredImagArray[48]},
    g50 = {r: restoredRealArray[49], i: restoredImagArray[49]},

  ]

// var transformedComplexPointsData = {};
// var len = realArray.length;
// for (var i = 0; i < len; i++) {
//   transformedComplexPointsData[i] = {
//     p: 'g' + (i + 1),
//     id: 'n' + (i + 1),
//   };
// }

	var transformedComplexPointsData = [
    { p:g1, id:'n1' },
    { p:g2, id:'n2' },
    { p:g3, id:'n3' },
    { p:g4, id:'n4' },
    { p:g5, id:'n5' },
    { p:g6, id:'n6' },
    { p:g7, id:'n7' },
    { p:g8, id:'n8' },
    { p:g9, id:'n9' },
    { p:g10, id:'n10' },

    { p:g11, id:'n11' },
    { p:g12, id:'n12' },
    { p:g13, id:'n13' },
    { p:g14, id:'n14' },
    { p:g15, id:'n15' },
    { p:g16, id:'n16' },
    { p:g17, id:'n17' },
    { p:g18, id:'n18' },
    { p:g19, id:'n19' },
    { p:g20, id:'n20' },

    { p:g21, id:'n21' },
    { p:g22, id:'n22' },
    { p:g23, id:'n23' },
    { p:g24, id:'n24' },
    { p:g25, id:'n25' },
    { p:g26, id:'n26' },
    { p:g27, id:'n27' },
    { p:g28, id:'n28' },
    { p:g29, id:'n29' },
    { p:g30, id:'n30' },

    { p:g31, id:'n31' },
    { p:g32, id:'n32' },
    { p:g33, id:'n33' },
    { p:g34, id:'n34' },
    { p:g35, id:'n35' },
    { p:g36, id:'n36' },
    { p:g37, id:'n37' },
    { p:g38, id:'n38' },
    { p:g39, id:'n39' },
    { p:g40, id:'n40' },

    { p:g41, id:'n41' },
    { p:g42, id:'n42' },
    { p:g43, id:'n43' },
    { p:g44, id:'n44' },
    { p:g45, id:'n45' },
    { p:g46, id:'n46' },
    { p:g47, id:'n47' },
    { p:g48, id:'n48' },
    { p:g49, id:'n49' },
    { p:g50, id:'n50' }
	];

	points.selectAll('circle').data(transformedComplexPointsData, function(d){return d.id})
		.enter()
			.append('circle')
			.attr({
				'id':function(d){ return 'n' },
				'r':3
			}).filter(function(d){
				return d.id != 'result';
			})

	points.selectAll('circle')
		.attr({
			'cx':function(d){ return scaleX(d.p.r); },
			'cy':function(d){ return scaleY(d.p.i); }
	});

};
})();

