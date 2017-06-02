(function(){
var extent = 50,
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

  for (var i=0, t=50; i<t; i++) {
    realArray.push(Math.floor(Math.random() * t) - 25);
    imagArray.push(Math.floor(Math.random() * t) - 25);
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
  n50 = {r: realArray[49], i: imagArray[49]},

  // n51 = {r: realArray[50], i: imagArray[50]},
  // n52 = {r: realArray[51], i: imagArray[51]},
  // n53 = {r: realArray[52], i: imagArray[52]},
  // n54 = {r: realArray[53], i: imagArray[53]},
  // n55 = {r: realArray[54], i: imagArray[54]},
  // n56 = {r: realArray[55], i: imagArray[55]},
  // n57 = {r: realArray[56], i: imagArray[56]},
  // n58 = {r: realArray[57], i: imagArray[57]},
  // n59 = {r: realArray[58], i: imagArray[58]},
  // n60 = {r: realArray[59], i: imagArray[59]},

  // n61 = {r: realArray[60], i: imagArray[60]},
  // n62 = {r: realArray[61], i: imagArray[61]},
  // n63 = {r: realArray[62], i: imagArray[62]},
  // n64 = {r: realArray[63], i: imagArray[63]},
  // n65 = {r: realArray[64], i: imagArray[64]},
  // n66 = {r: realArray[65], i: imagArray[65]},
  // n67 = {r: realArray[66], i: imagArray[66]},
  // n68 = {r: realArray[67], i: imagArray[67]},
  // n69 = {r: realArray[68], i: imagArray[68]},
  // n70 = {r: realArray[69], i: imagArray[69]},

  // n71 = {r: realArray[70], i: imagArray[70]},
  // n72 = {r: realArray[71], i: imagArray[71]},
  // n73 = {r: realArray[72], i: imagArray[72]},
  // n74 = {r: realArray[73], i: imagArray[73]},
  // n75 = {r: realArray[74], i: imagArray[74]},
  // n76 = {r: realArray[75], i: imagArray[75]},
  // n77 = {r: realArray[76], i: imagArray[76]},
  // n78 = {r: realArray[77], i: imagArray[77]},
  // n79 = {r: realArray[78], i: imagArray[78]},
  // n80 = {r: realArray[79], i: imagArray[79]},

  // n81 = {r: realArray[80], i: imagArray[80]},
  // n82 = {r: realArray[81], i: imagArray[81]},
  // n83 = {r: realArray[82], i: imagArray[82]},
  // n84 = {r: realArray[83], i: imagArray[83]},
  // n85 = {r: realArray[84], i: imagArray[84]},
  // n86 = {r: realArray[85], i: imagArray[85]},
  // n87 = {r: realArray[86], i: imagArray[86]},
  // n88 = {r: realArray[87], i: imagArray[87]},
  // n89 = {r: realArray[88], i: imagArray[88]},
  // n90 = {r: realArray[89], i: imagArray[89]},

  // n91 = {r: realArray[90], i: imagArray[90]},
  // n92 = {r: realArray[91], i: imagArray[91]},
  // n93 = {r: realArray[92], i: imagArray[92]},
  // n94 = {r: realArray[93], i: imagArray[93]},
  // n95 = {r: realArray[94], i: imagArray[94]},
  // n96 = {r: realArray[95], i: imagArray[95]},
  // n97 = {r: realArray[96], i: imagArray[96]},
  // n98 = {r: realArray[97], i: imagArray[97]},
  // n99 = {r: realArray[98], i: imagArray[98]},
  // n100 = {r: realArray[99], i: imagArray[99]},  
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
    { p:n50, id:'n50' },

    // { p:n51, id:'n51' },
    // { p:n52, id:'n52' },
    // { p:n53, id:'n53' },
    // { p:n54, id:'n54' },
    // { p:n55, id:'n55' },
    // { p:n56, id:'n56' },
    // { p:n57, id:'n57' },
    // { p:n58, id:'n58' },
    // { p:n59, id:'n59' },
    // { p:n60, id:'n60' },

    // { p:n61, id:'n61' },
    // { p:n62, id:'n62' },
    // { p:n63, id:'n63' },
    // { p:n64, id:'n64' },
    // { p:n65, id:'n65' },
    // { p:n66, id:'n66' },
    // { p:n67, id:'n67' },
    // { p:n68, id:'n68' },
    // { p:n69, id:'n69' },
    // { p:n70, id:'n70' },

    // { p:n71, id:'n71' },
    // { p:n72, id:'n72' },
    // { p:n73, id:'n73' },
    // { p:n74, id:'n74' },
    // { p:n75, id:'n75' },
    // { p:n76, id:'n76' },
    // { p:n77, id:'n77' },
    // { p:n78, id:'n78' },
    // { p:n79, id:'n79' },
    // { p:n80, id:'n80' },

    // { p:n81, id:'n81' },
    // { p:n82, id:'n82' },
    // { p:n83, id:'n83' },
    // { p:n84, id:'n84' },
    // { p:n85, id:'n85' },
    // { p:n86, id:'n86' },
    // { p:n87, id:'n87' },
    // { p:n88, id:'n88' },
    // { p:n89, id:'n89' },
    // { p:n90, id:'n90' },

    // { p:n91, id:'n91' },
    // { p:n92, id:'n92' },
    // { p:n93, id:'n93' },
    // { p:n94, id:'n94' },
    // { p:n95, id:'n95' },
    // { p:n96, id:'n96' },
    // { p:n97, id:'n97' },
    // { p:n98, id:'n98' },
    // { p:n99, id:'n99' },
    // { p:n100, id:'n100' }
	];

	points.selectAll('circle').data(complexPointsData, function(d){return d.id})
		.enter()
			.append('circle')
			.attr({
				'id':function(d){ return 'n'; },
				'r':2
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