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

var svg = d3.select('.real-plane-result').append('svg')
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
document.getElementById('refresh').onclick = function() {
   update();
};


function update(){
    
    //by default Uint8Array contains all zeroes
    var zeroesFilledArray = new Uint32Array(128); 
    fourier2DArray = fourier.dft(zeroesFilledArray, yArray);
    console.log(fourier2DArray);
    fourier1DArray = Array.prototype.concat.apply([], fourier2DArray);

    zeroedYarray = fourier1DArray.slice(0,128);

(function(){

    m = document.getElementById('mrange').value;
    zeroedYarray = fourier1DArray.slice(0,128),
    zeroedComplexArray = zeroesFilledArray;
    yTemp = zeroedYarray
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(zeroedYarray[a]) - Math.abs(zeroedYarray[b]); })

        while (m--) {
            zeroedYarray[yTemp[m]] = 0;
        }
})();

var restored2DArray = fourier.idft(zeroesFilledArray, zeroedYarray);

var restored1DArray = Array.prototype.concat.apply([], restored2DArray);
var restoredyArray = restored1DArray.slice(0,128);
console.log(restoredyArray)
var transformedRealPointsValues = [
    g1 = {r: xArray[0], i: restoredyArray[127]},
    g2 = {r: xArray[1], i: restoredyArray[126]},
    g3 = {r: xArray[2], i: restoredyArray[125]},
    g4 = {r: xArray[3], i: restoredyArray[124]},
    g5 = {r: xArray[4], i: restoredyArray[123]},
    g6 = {r: xArray[5], i: restoredyArray[122]},
    g7 = {r: xArray[6], i: restoredyArray[121]},
    g8 = {r: xArray[7], i: restoredyArray[120]},
    g9 = {r: xArray[8], i: restoredyArray[119]},
    g10 = {r: xArray[9], i: restoredyArray[118]},

    g11 = {r: xArray[10], i: restoredyArray[117]},
    g12 = {r: xArray[11], i: restoredyArray[116]},
    g13 = {r: xArray[12], i: restoredyArray[115]},
    g14 = {r: xArray[13], i: restoredyArray[114]},
    g15 = {r: xArray[14], i: restoredyArray[113]},
    g16 = {r: xArray[15], i: restoredyArray[112]},
    g17 = {r: xArray[16], i: restoredyArray[111]},
    g18 = {r: xArray[17], i: restoredyArray[110]},
    g19 = {r: xArray[18], i: restoredyArray[109]},
    g20 = {r: xArray[19], i: restoredyArray[108]},

    g21 = {r: xArray[20], i: restoredyArray[107]},
    g22 = {r: xArray[21], i: restoredyArray[106]},
    g23 = {r: xArray[22], i: restoredyArray[105]},
    g24 = {r: xArray[23], i: restoredyArray[104]},
    g25 = {r: xArray[24], i: restoredyArray[103]},
    g26 = {r: xArray[25], i: restoredyArray[102]},
    g27 = {r: xArray[26], i: restoredyArray[101]},
    g28 = {r: xArray[27], i: restoredyArray[100]},
    g29 = {r: xArray[28], i: restoredyArray[99]},
    g30 = {r: xArray[29], i: restoredyArray[98]},

    g31 = {r: xArray[30], i: restoredyArray[97]},
    g32 = {r: xArray[31], i: restoredyArray[96]},
    g33 = {r: xArray[32], i: restoredyArray[95]},
    g34 = {r: xArray[33], i: restoredyArray[94]},
    g35 = {r: xArray[34], i: restoredyArray[93]},
    g36 = {r: xArray[35], i: restoredyArray[92]},
    g37 = {r: xArray[36], i: restoredyArray[91]},
    g38 = {r: xArray[37], i: restoredyArray[90]},
    g39 = {r: xArray[38], i: restoredyArray[89]},
    g40 = {r: xArray[39], i: restoredyArray[88]},

    g41 = {r: xArray[40], i: restoredyArray[87]},
    g42 = {r: xArray[41], i: restoredyArray[86]},
    g43 = {r: xArray[42], i: restoredyArray[85]},
    g44 = {r: xArray[43], i: restoredyArray[84]},
    g45 = {r: xArray[44], i: restoredyArray[83]},
    g46 = {r: xArray[45], i: restoredyArray[82]},
    g47 = {r: xArray[46], i: restoredyArray[81]},
    g48 = {r: xArray[47], i: restoredyArray[80]},
    g49 = {r: xArray[48], i: restoredyArray[79]},
    g50 = {r: xArray[49], i: restoredyArray[78]},

  n51 = {r: xArray[50], i: restoredyArray[77]},
  n52 = {r: xArray[51], i: restoredyArray[76]},
  n53 = {r: xArray[52], i: restoredyArray[75]},
  n54 = {r: xArray[53], i: restoredyArray[74]},
  n55 = {r: xArray[54], i: restoredyArray[73]},
  n56 = {r: xArray[55], i: restoredyArray[72]},
  n57 = {r: xArray[56], i: restoredyArray[71]},
  n58 = {r: xArray[57], i: restoredyArray[70]},
  n59 = {r: xArray[58], i: restoredyArray[69]},
  n60 = {r: xArray[59], i: restoredyArray[68]},

  n61 = {r: xArray[60], i: restoredyArray[67]},
  n62 = {r: xArray[61], i: restoredyArray[66]},
  n63 = {r: xArray[62], i: restoredyArray[65]},
  n64 = {r: xArray[63], i: restoredyArray[64]},
  n65 = {r: xArray[64], i: restoredyArray[63]},
  n66 = {r: xArray[65], i: restoredyArray[62]},
  n67 = {r: xArray[66], i: restoredyArray[61]},
  n68 = {r: xArray[67], i: restoredyArray[60]},
  n69 = {r: xArray[68], i: restoredyArray[59]},
  n70 = {r: xArray[69], i: restoredyArray[58]},

  n71 = {r: xArray[70], i: restoredyArray[57]},
  n72 = {r: xArray[71], i: restoredyArray[56]},
  n73 = {r: xArray[72], i: restoredyArray[55]},
  n74 = {r: xArray[73], i: restoredyArray[54]},
  n75 = {r: xArray[74], i: restoredyArray[53]},
  n76 = {r: xArray[75], i: restoredyArray[52]},
  n77 = {r: xArray[76], i: restoredyArray[51]},
  n78 = {r: xArray[77], i: restoredyArray[50]},
  n79 = {r: xArray[78], i: restoredyArray[49]},
  n80 = {r: xArray[79], i: restoredyArray[48]},

  n81 = {r: xArray[80], i: restoredyArray[47]},
  n82 = {r: xArray[81], i: restoredyArray[46]},
  n83 = {r: xArray[82], i: restoredyArray[45]},
  n84 = {r: xArray[83], i: restoredyArray[44]},
  n85 = {r: xArray[84], i: restoredyArray[43]},
  n86 = {r: xArray[85], i: restoredyArray[42]},
  n87 = {r: xArray[86], i: restoredyArray[41]},
  n88 = {r: xArray[87], i: restoredyArray[40]},
  n89 = {r: xArray[88], i: restoredyArray[39]},
  n90 = {r: xArray[89], i: restoredyArray[38]},

  n91 = {r: xArray[90], i: restoredyArray[37]},
  n92 = {r: xArray[91], i: restoredyArray[36]},
  n93 = {r: xArray[92], i: restoredyArray[35]},
  n94 = {r: xArray[93], i: restoredyArray[34]},
  n95 = {r: xArray[94], i: restoredyArray[33]},
  n96 = {r: xArray[95], i: restoredyArray[32]},
  n97 = {r: xArray[96], i: restoredyArray[31]},
  n98 = {r: xArray[97], i: restoredyArray[30]},
  n99 = {r: xArray[98], i: restoredyArray[29]},
  n100 = {r: xArray[99], i: restoredyArray[28]},  

  n101 = {r: xArray[100], i: restoredyArray[27]},
  n102 = {r: xArray[101], i: restoredyArray[26]},
  n103 = {r: xArray[102], i: restoredyArray[25]},
  n104 = {r: xArray[103], i: restoredyArray[24]},
  n105 = {r: xArray[104], i: restoredyArray[23]},
  n106 = {r: xArray[105], i: restoredyArray[22]},
  n107 = {r: xArray[106], i: restoredyArray[21]},
  n108 = {r: xArray[107], i: restoredyArray[20]},
  n109 = {r: xArray[108], i: restoredyArray[19]},
  n110 = {r: xArray[109], i: restoredyArray[18]},

  n111 = {r: xArray[110], i: restoredyArray[17]},
  n112 = {r: xArray[111], i: restoredyArray[16]},
  n113 = {r: xArray[112], i: restoredyArray[15]},
  n114 = {r: xArray[113], i: restoredyArray[14]},
  n115 = {r: xArray[114], i: restoredyArray[13]},
  n116 = {r: xArray[115], i: restoredyArray[12]},
  n117 = {r: xArray[116], i: restoredyArray[11]},
  n118 = {r: xArray[117], i: restoredyArray[10]},
  n119 = {r: xArray[118], i: restoredyArray[9]},
  n120 = {r: xArray[119], i: restoredyArray[8]},  

  n121 = {r: xArray[120], i: restoredyArray[7]},
  n122 = {r: xArray[121], i: restoredyArray[6]},
  n123 = {r: xArray[122], i: restoredyArray[5]},
  n124 = {r: xArray[123], i: restoredyArray[4]},  
  n125 = {r: xArray[124], i: restoredyArray[3]},
  n126 = {r: xArray[125], i: restoredyArray[2]},
  n127 = {r: xArray[126], i: restoredyArray[1]},
  n128 = {r: xArray[127], i: restoredyArray[0]},  
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
    // { p:n128, id:'n128' },
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
    // { p:n128, id:'n128' },
	];


	points.selectAll('circle').data(transformedRealPointsData, function(d){return d.id})
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

d3.select(self.frameElement).style("height", d3.select('.content').node().getBoundingClientRect().height + "px");

})();