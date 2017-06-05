(function(){
var extent = 64,
	width = 800, height = 800,
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
		width:800,
		height:800
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
    for ( var i=63, n=0; n<=i; i-- ){     
        
        tempNeg.push((i)*(-1));
    };
    console.log(tempNeg, tempNeg.length);

    for (var j=0, n=64; j<n; j++){
        
            tempPos.push(j);
        };
    console.log(tempPos, tempPos.length);
    var tempConstNeg = [];
        tempConstNeg.length = 64;
        tempConstNeg.fill(-20);
    var tempConstPos = [];
        tempConstPos.length = 64;    
        tempConstPos.fill(20);
        
    xArray = tempNeg.concat(tempPos);
    yArray = tempConstNeg.concat(tempConstPos);
    console.log(yArray);
    // yArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
  n50 = {r: xArray[49], i: yArray[49]},

  n51 = {r: xArray[50], i: yArray[50]},
  n52 = {r: xArray[51], i: yArray[51]},
  n53 = {r: xArray[52], i: yArray[52]},
  n54 = {r: xArray[53], i: yArray[53]},
  n55 = {r: xArray[54], i: yArray[54]},
  n56 = {r: xArray[55], i: yArray[55]},
  n57 = {r: xArray[56], i: yArray[56]},
  n58 = {r: xArray[57], i: yArray[57]},
  n59 = {r: xArray[58], i: yArray[58]},
  n60 = {r: xArray[59], i: yArray[59]},

  n61 = {r: xArray[60], i: yArray[60]},
  n62 = {r: xArray[61], i: yArray[61]},
  n63 = {r: xArray[62], i: yArray[62]},
  n64 = {r: xArray[63], i: yArray[63]},
  n65 = {r: xArray[64], i: yArray[64]},
  n66 = {r: xArray[65], i: yArray[65]},
  n67 = {r: xArray[66], i: yArray[66]},
  n68 = {r: xArray[67], i: yArray[67]},
  n69 = {r: xArray[68], i: yArray[68]},
  n70 = {r: xArray[69], i: yArray[69]},

  n71 = {r: xArray[70], i: yArray[70]},
  n72 = {r: xArray[71], i: yArray[71]},
  n73 = {r: xArray[72], i: yArray[72]},
  n74 = {r: xArray[73], i: yArray[73]},
  n75 = {r: xArray[74], i: yArray[74]},
  n76 = {r: xArray[75], i: yArray[75]},
  n77 = {r: xArray[76], i: yArray[76]},
  n78 = {r: xArray[77], i: yArray[77]},
  n79 = {r: xArray[78], i: yArray[78]},
  n80 = {r: xArray[79], i: yArray[79]},

  n81 = {r: xArray[80], i: yArray[80]},
  n82 = {r: xArray[81], i: yArray[81]},
  n83 = {r: xArray[82], i: yArray[82]},
  n84 = {r: xArray[83], i: yArray[83]},
  n85 = {r: xArray[84], i: yArray[84]},
  n86 = {r: xArray[85], i: yArray[85]},
  n87 = {r: xArray[86], i: yArray[86]},
  n88 = {r: xArray[87], i: yArray[87]},
  n89 = {r: xArray[88], i: yArray[88]},
  n90 = {r: xArray[89], i: yArray[89]},

  n91 = {r: xArray[90], i: yArray[90]},
  n92 = {r: xArray[91], i: yArray[91]},
  n93 = {r: xArray[92], i: yArray[92]},
  n94 = {r: xArray[93], i: yArray[93]},
  n95 = {r: xArray[94], i: yArray[94]},
  n96 = {r: xArray[95], i: yArray[95]},
  n97 = {r: xArray[96], i: yArray[96]},
  n98 = {r: xArray[97], i: yArray[97]},
  n99 = {r: xArray[98], i: yArray[98]},
  n100 = {r: xArray[99], i: yArray[99]},  

  n101 = {r: xArray[100], i: yArray[100]},
  n102 = {r: xArray[101], i: yArray[101]},
  n103 = {r: xArray[102], i: yArray[102]},
  n104 = {r: xArray[103], i: yArray[103]},
  n105 = {r: xArray[104], i: yArray[104]},
  n106 = {r: xArray[105], i: yArray[105]},
  n107 = {r: xArray[106], i: yArray[106]},
  n108 = {r: xArray[107], i: yArray[107]},
  n109 = {r: xArray[108], i: yArray[108]},
  n110 = {r: xArray[109], i: yArray[109]},

  n111 = {r: xArray[110], i: yArray[110]},
  n112 = {r: xArray[111], i: yArray[111]},
  n113 = {r: xArray[112], i: yArray[112]},
  n114 = {r: xArray[113], i: yArray[113]},
  n115 = {r: xArray[114], i: yArray[114]},
  n116 = {r: xArray[115], i: yArray[115]},
  n117 = {r: xArray[116], i: yArray[116]},
  n118 = {r: xArray[117], i: yArray[117]},
  n119 = {r: xArray[118], i: yArray[118]},
  n120 = {r: xArray[119], i: yArray[119]},  

  n121 = {r: xArray[120], i: yArray[120]},
  n122 = {r: xArray[121], i: yArray[121]},
  n123 = {r: xArray[122], i: yArray[122]},
  n124 = {r: xArray[123], i: yArray[123]},  
  n125 = {r: xArray[124], i: yArray[124]},
  n126 = {r: xArray[125], i: yArray[125]},
  n127 = {r: xArray[126], i: yArray[126]},
  n128 = {r: xArray[127], i: yArray[127]},  
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

    { p:n51, id:'n51' },
    { p:n52, id:'n52' },
    { p:n53, id:'n53' },
    { p:n54, id:'n54' },
    { p:n55, id:'n55' },
    { p:n56, id:'n56' },
    { p:n57, id:'n57' },
    { p:n58, id:'n58' },
    { p:n59, id:'n59' },
    { p:n60, id:'n60' },

    { p:n61, id:'n61' },
    { p:n62, id:'n62' },
    { p:n63, id:'n63' },
    { p:n128, id:'n128' },
    { p:n65, id:'n65' },
    { p:n66, id:'n66' },
    { p:n67, id:'n67' },
    { p:n68, id:'n68' },
    { p:n69, id:'n69' },
    { p:n70, id:'n70' },

    { p:n71, id:'n71' },
    { p:n72, id:'n72' },
    { p:n73, id:'n73' },
    { p:n74, id:'n74' },
    { p:n75, id:'n75' },
    { p:n76, id:'n76' },
    { p:n77, id:'n77' },
    { p:n78, id:'n78' },
    { p:n79, id:'n79' },
    { p:n80, id:'n80' },

    { p:n81, id:'n81' },
    { p:n82, id:'n82' },
    { p:n83, id:'n83' },
    { p:n84, id:'n84' },
    { p:n85, id:'n85' },
    { p:n86, id:'n86' },
    { p:n87, id:'n87' },
    { p:n88, id:'n88' },
    { p:n89, id:'n89' },
    { p:n90, id:'n90' },

    { p:n91, id:'n91' },
    { p:n92, id:'n92' },
    { p:n93, id:'n93' },
    { p:n94, id:'n94' },
    { p:n95, id:'n95' },
    { p:n96, id:'n96' },
    { p:n97, id:'n97' },
    { p:n98, id:'n98' },
    { p:n99, id:'n99' },
    { p:n100, id:'n100' },

    { p:n101, id:'n101' },
    { p:n102, id:'n102' },
    { p:n103, id:'n103' },
    { p:n104, id:'n104' },
    { p:n105, id:'n105' },
    { p:n106, id:'n106' },
    { p:n107, id:'n107' },
    { p:n108, id:'n108' },
    { p:n109, id:'n109' },
    { p:n110, id:'n110' },

    { p:n111, id:'n111' },
    { p:n112, id:'n112' },
    { p:n113, id:'n113' },
    { p:n114, id:'n114' },
    { p:n115, id:'n115' },
    { p:n116, id:'n116' },
    { p:n117, id:'n117' },
    { p:n118, id:'n118' },
    { p:n119, id:'n119' },
    { p:n120, id:'n120' },

    { p:n121, id:'n121' },
    { p:n122, id:'n122' },
    { p:n123, id:'n123' },
    { p:n124, id:'n124' },
    { p:n125, id:'n125' },
    { p:n126, id:'n126' },
    { p:n127, id:'n127' },
    { p:n128, id:'n128' },
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

