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

var svg = d3.select('.real-plane').append('svg')
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

d3.select("#refresh").on("click", update);

function update(){
	xArray = [-5, -4.5, -4, -3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    yArray = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2];

	// for (var i = xArray[0], l = xArray.length; i<l; i++) {
	// 	yArray.push(Math.sin(i));
	// }
	// console.log(yArray);

  var realPointsValues = [
  n1 = {r: xArray[0], i: yArray[0]},
  n2 = {r: xArray[1], i: yArray[1]},
  n3 = {r: xArray[2], i: yArray[2]},
  n4 = {r: xArray[3], i: yArray[3]},
  n5 = {r: xArray[4], i: yArray[4]},
  n6 = {r: xArray[5], i: yArray[5]},
  n7 = {r: xArray[6], i: yArray[6]},
  n8 = {r: xArray[7], i: yArray[7]},
  n9 = {r: xArray[8], i: yArray[8]},
  n10 = {r: xArray[9], i: yArray[9]},
  n11 = {r: xArray[10], i: yArray[10]},
  n12 = {r: xArray[11], i: yArray[11]},
  n13 = {r: xArray[12], i: yArray[12]},
  n14 = {r: xArray[13], i: yArray[13]},
  n15 = {r: xArray[14], i: yArray[14]},
  n16 = {r: xArray[15], i: yArray[15]},
  n17 = {r: xArray[16], i: yArray[16]},
  n18 = {r: xArray[17], i: yArray[17]},
  n19 = {r: xArray[18], i: yArray[18]},
  n20 = {r: xArray[19], i: yArray[19]},
  n21 = {r: xArray[20], i: yArray[20]},
  n22 = {r: xArray[21], i: yArray[21]},
	];


	var realPointsData = [
    { p:n1, id:'n1' },
    { p:n2, id:'n2' },
    { p:n3, id:'n3' },
    { p:n4, id:'n4' },
    { p:n5, id:'n5' },
    { p:n6, id:'n6' },
    { p:n7, id:'n7' },
    { p:n8, id:'n8' },
    { p:n9, id:'n9' },
    { p:n10, id:'n10' },
    { p:n11, id:'n11' },
    { p:n12, id:'n12' },
    { p:n13, id:'n13' },
    { p:n14, id:'n14' },
    { p:n15, id:'n15' },
    { p:n16, id:'n16' },
    { p:n17, id:'n17' },
    { p:n18, id:'n18' },
    { p:n19, id:'n19' },
    { p:n20, id:'n20' },
    { p:n21, id:'n21' },
    { p:n22, id:'n22' },
	];

	points.selectAll('circle').data(realPointsData, function(d){return d.id})
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
})();

