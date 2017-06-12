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

var svg = d3.select('.complex-plane').append('svg')
	.attr({
		width:450,
		height:450
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

  for (var i=0, t=50; i<t; i++) {
    realArray.push(Math.floor(Math.random() * t) - 25);
    imagArray.push(Math.floor(Math.random() * t) - 25);
  };


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
  n23 = {r: realArray[22], i: imagArray[22]},
  n24 = {r: realArray[23], i: imagArray[23]},
  n25 = {r: realArray[24], i: imagArray[24]},
  n26 = {r: realArray[25], i: imagArray[25]},
  n27 = {r: realArray[26], i: imagArray[26]},
  n28 = {r: realArray[27], i: imagArray[27]},
  n29 = {r: realArray[28], i: imagArray[28]},
  n30 = {r: realArray[29], i: imagArray[29]},

  n31 = {r: realArray[30], i: imagArray[30]},
  n32 = {r: realArray[31], i: imagArray[31]},
  n33 = {r: realArray[32], i: imagArray[32]},
  n34 = {r: realArray[33], i: imagArray[33]},
  n35 = {r: realArray[34], i: imagArray[34]},
  n36 = {r: realArray[35], i: imagArray[35]},
  n37 = {r: realArray[36], i: imagArray[36]},
  n38 = {r: realArray[37], i: imagArray[37]},
  n39 = {r: realArray[38], i: imagArray[38]},
  n40 = {r: realArray[39], i: imagArray[39]},

  n41 = {r: realArray[40], i: imagArray[40]},
  n42 = {r: realArray[41], i: imagArray[41]},
  n43 = {r: realArray[42], i: imagArray[42]},
  n44 = {r: realArray[43], i: imagArray[43]},
  n45 = {r: realArray[44], i: imagArray[44]},
  n46 = {r: realArray[45], i: imagArray[45]},
  n47 = {r: realArray[46], i: imagArray[46]},
  n48 = {r: realArray[47], i: imagArray[47]},
  n49 = {r: realArray[48], i: imagArray[48]},
  n50 = {r: realArray[49], i: imagArray[49]}  
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
    { p:n23, id:'n23' },
    { p:n24, id:'n24' },
    { p:n25, id:'n25' },
    { p:n26, id:'n26' },
    { p:n27, id:'n27' },
    { p:n28, id:'n28' },
    { p:n29, id:'n29' },
    { p:n30, id:'n30' },

    { p:n31, id:'n31' },
    { p:n32, id:'n32' },
    { p:n33, id:'n33' },
    { p:n34, id:'n34' },
    { p:n35, id:'n35' },
    { p:n36, id:'n36' },
    { p:n37, id:'n37' },
    { p:n38, id:'n38' },
    { p:n39, id:'n39' },
    { p:n40, id:'n40' },

    { p:n41, id:'n41' },
    { p:n42, id:'n42' },
    { p:n43, id:'n43' },
    { p:n44, id:'n44' },
    { p:n45, id:'n45' },
    { p:n46, id:'n46' },
    { p:n47, id:'n47' },
    { p:n48, id:'n48' },
    { p:n49, id:'n49' },
    { p:n50, id:'n50' }
	];

	points.selectAll('circle').data(complexPointsData, function(d){return d.id})
		.enter()
			.append('circle')
			.attr({
				'id':function(d){ return 'n'; },
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