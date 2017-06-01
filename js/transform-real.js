(function(){
var extent = 5,
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

var svg = d3.select('.real-plane-result').append('svg')
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
document.getElementById('refresh').onclick = function() {
   update();
};


function update(){

    fourier2DArray = fourier.dft(xArray, yArray);
    fourier1DArray = Array.prototype.concat.apply([], fourier2DArray);

(function(){
    m = document.getElementById('mrange').value;
    zeroedXarray = fourier1DArray.slice(0, 22),
    zeroedYarray = fourier1DArray.slice(22),
    xTemp = zeroedXarray
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(zeroedXarray[a]) - Math.abs(zeroedXarray[b]); })

    yTemp = zeroedYarray
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(zeroedYarray[a]) - Math.abs(zeroedYarray[b]); })

        while (m--) {
            zeroedXarray[xTemp[m]] = 0;
            zeroedYarray[yTemp[m]] = 0;
        }
})();

var restored2DArray = fourier.idft(zeroedXarray, zeroedYarray);
var restored1DArray = Array.prototype.concat.apply([], restored2DArray);
var restoredxArray = restored1DArray.slice(0, 22);
var restoredyArray = restored1DArray.slice(22);
var transformedRealPointsValues = [
    g1 = {r: restoredxArray[0], i: restoredyArray[0]},
    g2 = {r: restoredxArray[1], i: restoredyArray[1]},
    g3 = {r: restoredxArray[2], i: restoredyArray[2]},
    g4 = {r: restoredxArray[3], i: restoredyArray[3]},
    g5 = {r: restoredxArray[4], i: restoredyArray[4]},
    g6 = {r: restoredxArray[5], i: restoredyArray[5]},
    g7 = {r: restoredxArray[6], i: restoredyArray[6]},
    g8 = {r: restoredxArray[7], i: restoredyArray[7]},
    g9 = {r: restoredxArray[8], i: restoredyArray[8]},
    g10 = {r: restoredxArray[9], i: restoredyArray[9]},
    g11 = {r: restoredxArray[10], i: restoredyArray[10]},
    g12 = {r: restoredxArray[11], i: restoredyArray[11]},
    g13 = {r: restoredxArray[12], i: restoredyArray[12]},
    g14 = {r: restoredxArray[13], i: restoredyArray[13]},
    g15 = {r: restoredxArray[14], i: restoredyArray[14]},
    g16 = {r: restoredxArray[15], i: restoredyArray[15]},
    g17 = {r: restoredxArray[16], i: restoredyArray[16]},
    g18 = {r: restoredxArray[17], i: restoredyArray[17]},
    g19 = {r: restoredxArray[18], i: restoredyArray[18]},
    g20 = {r: restoredxArray[19], i: restoredyArray[19]},
    g21 = {r: restoredxArray[20], i: restoredyArray[20]},
    g22 = {r: restoredxArray[21], i: restoredyArray[21]},
  ]



	var transformedRealPointsData = [
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

  console.log(transformedRealPointsData[0]);
  console.log(transformedRealPointsData.length);

	points.selectAll('circle').data(transformedRealPointsData, function(d){return d.id})
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
}

d3.select(self.frameElement).style("height", d3.select('.content').node().getBoundingClientRect().height + "px");

})();