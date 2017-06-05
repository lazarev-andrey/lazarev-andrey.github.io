(function(){
var extent = 80,
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

var svg = d3.select('.complex-plane-result').append('svg')
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

//synchronize updates
document.getElementById('update').onclick = function() {
   update();
};

d3.select("#updateTransform").on("click", update);

function update(){
    var fourier2DArray = fourier.dftSimple(realArray, imagArray);
    var fourier1DArray = Array.prototype.concat.apply([], fourier2DArray);

(function(){
    // n = 50;
    n = document.getElementById('nrange').value;

    fourierReal = fourier1DArray.slice(0, 128),
    fourierImag = fourier1DArray.slice(128),
    realTemp = fourierReal
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(fourierReal[a]) - Math.abs(fourierReal[b]); })

    fourierImag = fourier1DArray.slice(128),
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
var restoredRealArray = restored1DArray.slice(0, 128);
var restoredImagArray = restored1DArray.slice(128);
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

  n51 = {r: restoredRealArray[50], i: restoredImagArray[50]},
  n52 = {r: restoredRealArray[51], i: restoredImagArray[51]},
  n53 = {r: restoredRealArray[52], i: restoredImagArray[52]},
  n54 = {r: restoredRealArray[53], i: restoredImagArray[53]},
  n55 = {r: restoredRealArray[54], i: restoredImagArray[54]},
  n56 = {r: restoredRealArray[55], i: restoredImagArray[55]},
  n57 = {r: restoredRealArray[56], i: restoredImagArray[56]},
  n58 = {r: restoredRealArray[57], i: restoredImagArray[57]},
  n59 = {r: restoredRealArray[58], i: restoredImagArray[58]},
  n60 = {r: restoredRealArray[59], i: restoredImagArray[59]},

  n61 = {r: restoredRealArray[60], i: restoredImagArray[60]},
  n62 = {r: restoredRealArray[61], i: restoredImagArray[61]},
  n63 = {r: restoredRealArray[62], i: restoredImagArray[62]},
  n64 = {r: restoredRealArray[63], i: restoredImagArray[63]},
  n65 = {r: restoredRealArray[64], i: restoredImagArray[64]},
  n66 = {r: restoredRealArray[65], i: restoredImagArray[65]},
  n67 = {r: restoredRealArray[66], i: restoredImagArray[66]},
  n68 = {r: restoredRealArray[67], i: restoredImagArray[67]},
  n69 = {r: restoredRealArray[68], i: restoredImagArray[68]},
  n70 = {r: restoredRealArray[69], i: restoredImagArray[69]},

  n71 = {r: restoredRealArray[70], i: restoredImagArray[70]},
  n72 = {r: restoredRealArray[71], i: restoredImagArray[71]},
  n73 = {r: restoredRealArray[72], i: restoredImagArray[72]},
  n74 = {r: restoredRealArray[73], i: restoredImagArray[73]},
  n75 = {r: restoredRealArray[74], i: restoredImagArray[74]},
  n76 = {r: restoredRealArray[75], i: restoredImagArray[75]},
  n77 = {r: restoredRealArray[76], i: restoredImagArray[76]},
  n78 = {r: restoredRealArray[77], i: restoredImagArray[77]},
  n79 = {r: restoredRealArray[78], i: restoredImagArray[78]},
  n80 = {r: restoredRealArray[79], i: restoredImagArray[79]},

  n81 = {r: restoredRealArray[80], i: restoredImagArray[80]},
  n82 = {r: restoredRealArray[81], i: restoredImagArray[81]},
  n83 = {r: restoredRealArray[82], i: restoredImagArray[82]},
  n84 = {r: restoredRealArray[83], i: restoredImagArray[83]},
  n85 = {r: restoredRealArray[84], i: restoredImagArray[84]},
  n86 = {r: restoredRealArray[85], i: restoredImagArray[85]},
  n87 = {r: restoredRealArray[86], i: restoredImagArray[86]},
  n88 = {r: restoredRealArray[87], i: restoredImagArray[87]},
  n89 = {r: restoredRealArray[88], i: restoredImagArray[88]},
  n90 = {r: restoredRealArray[89], i: restoredImagArray[89]},

  n91 = {r: restoredRealArray[90], i: restoredImagArray[90]},
  n92 = {r: restoredRealArray[91], i: restoredImagArray[91]},
  n93 = {r: restoredRealArray[92], i: restoredImagArray[92]},
  n94 = {r: restoredRealArray[93], i: restoredImagArray[93]},
  n95 = {r: restoredRealArray[94], i: restoredImagArray[94]},
  n96 = {r: restoredRealArray[95], i: restoredImagArray[95]},
  n97 = {r: restoredRealArray[96], i: restoredImagArray[96]},
  n98 = {r: restoredRealArray[97], i: restoredImagArray[97]},
  n99 = {r: restoredRealArray[98], i: restoredImagArray[98]},
  n100 = {r: restoredRealArray[99], i: restoredImagArray[99]},  

  n101 = {r: restoredRealArray[100], i: restoredImagArray[100]},
  n102 = {r: restoredRealArray[101], i: restoredImagArray[101]},
  n103 = {r: restoredRealArray[102], i: restoredImagArray[102]},
  n104 = {r: restoredRealArray[103], i: restoredImagArray[103]},
  n105 = {r: restoredRealArray[104], i: restoredImagArray[104]},
  n106 = {r: restoredRealArray[105], i: restoredImagArray[105]},
  n107 = {r: restoredRealArray[106], i: restoredImagArray[106]},
  n108 = {r: restoredRealArray[107], i: restoredImagArray[107]},
  n109 = {r: restoredRealArray[108], i: restoredImagArray[108]},
  n110 = {r: restoredRealArray[109], i: restoredImagArray[109]},

  n111 = {r: restoredRealArray[110], i: restoredImagArray[110]},
  n112 = {r: restoredRealArray[111], i: restoredImagArray[111]},
  n113 = {r: restoredRealArray[112], i: restoredImagArray[112]},
  n114 = {r: restoredRealArray[113], i: restoredImagArray[113]},
  n115 = {r: restoredRealArray[114], i: restoredImagArray[114]},
  n116 = {r: restoredRealArray[115], i: restoredImagArray[115]},
  n117 = {r: restoredRealArray[116], i: restoredImagArray[116]},
  n118 = {r: restoredRealArray[117], i: restoredImagArray[117]},
  n119 = {r: restoredRealArray[118], i: restoredImagArray[118]},
  n120 = {r: restoredRealArray[119], i: restoredImagArray[119]},  

  n121 = {r: restoredRealArray[120], i: restoredImagArray[120]},
  n122 = {r: restoredRealArray[121], i: restoredImagArray[121]},
  n123 = {r: restoredRealArray[122], i: restoredImagArray[122]},
  n124 = {r: restoredRealArray[123], i: restoredImagArray[123]},  
  n125 = {r: restoredRealArray[124], i: restoredImagArray[124]},
  n126 = {r: restoredRealArray[125], i: restoredImagArray[125]},
  n127 = {r: restoredRealArray[126], i: restoredImagArray[126]},
  n128 = {r: restoredRealArray[127], i: restoredImagArray[127]},  
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
    { p:g50, id:'n50' },

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

	points.selectAll('circle').data(transformedComplexPointsData, function(d){return d.id})
		.enter()
			.append('circle')
			.attr({
				'id':function(d){ return 'n' },
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

