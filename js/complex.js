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

var svg = d3.select('.complex-plane').append('svg')
	.attr({
		width:400,
		height:400
	})
	.append('g')
	.attr('transform','translate('+margin.left+','+margin.top+')')
	

svg.append('g').attr({
		'class':'x axis',
		'transform':'translate(0,'+plotWidth/2+')'
	}).call(xAxis);

svg.append('g').attr({
		'class':'y axis',
		'transform':'translate('+plotHeight/2+',0)'
	}).call(yAxis);

var points = svg.append('g')

update();

d3.select("#update").on("click", update);

function update(){

	realArray = [];
	imagArray = [];

  for (var i=0, t=22; i<t; i++) {
    realArray.push(Math.floor(Math.random() * t) - 11);
    imagArray.push(Math.floor(Math.random() * t) - 11);
  };

// var result = [];

// var len = realArray.length;

// for (var i = 0; i < len; i++) {
//   complexPointsValues = {
//     r: realArray[i],
//     i: imagArray[i],
//   };
// }

  var complexPointsValues = [
  n1 = {r: realArray[0], i: imagArray[0]},
  n2 = {r: realArray[1], i: imagArray[1]},
  n3 = {r: realArray[2], i: imagArray[2]},
  n4 = {r: realArray[3], i: imagArray[3]},
  n5 = {r: realArray[4], i: imagArray[4]},
  n6 = {r: realArray[5], i: imagArray[5]},
  n7 = {r: realArray[6], i: imagArray[6]},
  n8 = {r: realArray[7], i: imagArray[7]},
  n9 = {r: realArray[8], i: imagArray[8]},
  n10 = {r: realArray[9], i: imagArray[9]},
  n11 = {r: realArray[10], i: imagArray[10]},
  n12 = {r: realArray[11], i: imagArray[11]},
  n13 = {r: realArray[12], i: imagArray[12]},
  n14 = {r: realArray[13], i: imagArray[13]},
  n15 = {r: realArray[14], i: imagArray[14]},
  n16 = {r: realArray[15], i: imagArray[15]},
  n17 = {r: realArray[16], i: imagArray[16]},
  n18 = {r: realArray[17], i: imagArray[17]},
  n19 = {r: realArray[18], i: imagArray[18]},
  n20 = {r: realArray[19], i: imagArray[19]},
  n21 = {r: realArray[20], i: imagArray[20]},
  n22 = {r: realArray[21], i: imagArray[21]},
	];

	var complexPointsData = [
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

	points.selectAll('circle').data(complexPointsData, function(d){return d.id})
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