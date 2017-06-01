(function(){
var extent = 17,
	width = 400, height = 400,
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
		width:400,
		height:400
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

function update(){
    var fourier2DArray = fourier.dft(realArray, imagArray);
    var fourier1DArray = Array.prototype.concat.apply([], fourier2DArray);

(function(){
    // n = 12;
    n = document.getElementById('nrange').value;

    fourierReal = fourier1DArray.slice(0, 22),
    fourierImag = fourier1DArray.slice(22),
    realTemp = fourierReal
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(fourierReal[a]) - Math.abs(fourierReal[b]); })

    fourierImag = fourier1DArray.slice(22),
    imagTemp = fourierImag
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(fourierImag[a]) - Math.abs(fourierImag[b]); })

        while (n--) {
            fourierReal[realTemp[n]] = 0;
            fourierImag[imagTemp[n]] = 0;
        }
})();

var restored2DArray = fourier.idft(fourierReal, fourierImag);
var restored1DArray = Array.prototype.concat.apply([], restored2DArray);
var restoredRealArray = restored1DArray.slice(0, 22);
var restoredImagArray = restored1DArray.slice(22);
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
  ]

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
	];

  console.log(transformedComplexPointsData[0]);
  console.log(transformedComplexPointsData.length);

	points.selectAll('circle').data(transformedComplexPointsData, function(d){return d.id})
		.enter()
			.append('circle')
			.attr({
				'id':function(d){ return d.id + '-p'; },
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

