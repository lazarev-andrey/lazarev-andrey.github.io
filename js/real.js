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

var svg = d3.select('.real-plane').append('svg')
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

d3.select("#refresh").on("click", update);

function update(){

    var tempNeg = [],
        tempPos = [];
    for ( var i=24, n=0; n<=i; i-- ){     
        
        tempNeg.push((i)*(-1));
    };

    for (var j=0, n=25; j<n; j++){
        
            tempPos.push(j);
        };

    var tempConstNeg = [];
        tempConstNeg.length = 25;
        tempConstNeg.fill(-10);
    var tempConstPos = [];
        tempConstPos.length = 25;    
        tempConstPos.fill(10);
        
    xArray = tempNeg.concat(tempPos);
    yArray = tempConstNeg.concat(tempConstPos);

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
  n23 = {r: xArray[22], i: yArray[22]},
  n24 = {r: xArray[23], i: yArray[23]},
  n25 = {r: xArray[24], i: yArray[24]},
  n26 = {r: xArray[25], i: yArray[25]},
  n27 = {r: xArray[26], i: yArray[26]},
  n28 = {r: xArray[27], i: yArray[27]},
  n29 = {r: xArray[28], i: yArray[28]},
  n30 = {r: xArray[29], i: yArray[29]},

  n31 = {r: xArray[30], i: yArray[30]},
  n32 = {r: xArray[31], i: yArray[31]},
  n33 = {r: xArray[32], i: yArray[32]},
  n34 = {r: xArray[33], i: yArray[33]},
  n35 = {r: xArray[34], i: yArray[34]},
  n36 = {r: xArray[35], i: yArray[35]},
  n37 = {r: xArray[36], i: yArray[36]},
  n38 = {r: xArray[37], i: yArray[37]},
  n39 = {r: xArray[38], i: yArray[38]},
  n40 = {r: xArray[39], i: yArray[39]},

  n41 = {r: xArray[40], i: yArray[40]},
  n42 = {r: xArray[41], i: yArray[41]},
  n43 = {r: xArray[42], i: yArray[42]},
  n44 = {r: xArray[43], i: yArray[43]},  
  n45 = {r: xArray[44], i: yArray[44]},
  n46 = {r: xArray[45], i: yArray[45]},
  n47 = {r: xArray[46], i: yArray[46]},
  n48 = {r: xArray[47], i: yArray[47]},
  n49 = {r: xArray[48], i: yArray[48]},
  n50 = {r: xArray[49], i: yArray[49]}
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
    { p:n23, id:'n23' },
    { p:n24, id:'n24' },
    // { p:n25, id:'n25' },
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
    // { p:n50, id:'n50' }
	];

	points.selectAll('circle').data(realPointsData, function(d){return d.id})
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
}
})();

