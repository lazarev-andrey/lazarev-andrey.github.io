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
    
    //by default Uint8Array contains all zeroes
    var zeroesFilledArray = new Uint8Array(100); 
    console.log(zeroesFilledArray);

    fourier2DArray = fourier.dft(yArray, zeroesFilledArray);
    console.log(fourier2DArray);
    fourier1DArray = Array.prototype.concat.apply([], fourier2DArray);

(function(){

    m = document.getElementById('mrange').value;
    zeroedYarray = fourier1DArray.slice(0, 50),
    zeroedComplexArray = fourier1DArray.slice(50),
    // xTemp = zeroedXarray
    //     .map(function (_, i) { return i; })
    //     .sort(function (a, b) { return Math.abs(zeroedXarray[a]) - Math.abs(zeroedXarray[b]); })

    yTemp = zeroedYarray
        .map(function (_, i) { return i; })
        .sort(function (a, b) { return Math.abs(zeroedYarray[a]) - Math.abs(zeroedYarray[b]); })

        while (m--) {
            // zeroedXarray[xTemp[m]] = 0;
            zeroedYarray[yTemp[m]] = 0;
        }
})();

var restored2DArray = fourier.idft(zeroedYarray, zeroedComplexArray);
console.log()
var restored1DArray = Array.prototype.concat.apply([], restored2DArray);
var restoredyArray = restored1DArray.slice(0, 50);
// var restoredyArray = restored1DArray.slice(50);
var transformedRealPointsValues = [
    g1 = {r: xArray[0], i: restoredyArray[0]},
    g2 = {r: xArray[1], i: restoredyArray[1]},
    g3 = {r: xArray[2], i: restoredyArray[2]},
    g4 = {r: xArray[3], i: restoredyArray[3]},
    g5 = {r: xArray[4], i: restoredyArray[4]},
    g6 = {r: xArray[5], i: restoredyArray[5]},
    g7 = {r: xArray[6], i: restoredyArray[6]},
    g8 = {r: xArray[7], i: restoredyArray[7]},
    g9 = {r: xArray[8], i: restoredyArray[8]},
    g10 = {r: xArray[9], i: restoredyArray[9]},

    g11 = {r: xArray[10], i: restoredyArray[10]},
    g12 = {r: xArray[11], i: restoredyArray[11]},
    g13 = {r: xArray[12], i: restoredyArray[12]},
    g14 = {r: xArray[13], i: restoredyArray[13]},
    g15 = {r: xArray[14], i: restoredyArray[14]},
    g16 = {r: xArray[15], i: restoredyArray[15]},
    g17 = {r: xArray[16], i: restoredyArray[16]},
    g18 = {r: xArray[17], i: restoredyArray[17]},
    g19 = {r: xArray[18], i: restoredyArray[18]},
    g20 = {r: xArray[19], i: restoredyArray[19]},

    g21 = {r: xArray[20], i: restoredyArray[20]},
    g22 = {r: xArray[21], i: restoredyArray[21]},
    g23 = {r: xArray[22], i: restoredyArray[22]},
    g24 = {r: xArray[23], i: restoredyArray[23]},
    g25 = {r: xArray[24], i: restoredyArray[24]},
    g26 = {r: xArray[25], i: restoredyArray[25]},
    g27 = {r: xArray[26], i: restoredyArray[26]},
    g28 = {r: xArray[27], i: restoredyArray[27]},
    g29 = {r: xArray[28], i: restoredyArray[28]},
    g30 = {r: xArray[29], i: restoredyArray[29]},

    g31 = {r: xArray[30], i: restoredyArray[30]},
    g32 = {r: xArray[31], i: restoredyArray[31]},
    g33 = {r: xArray[32], i: restoredyArray[32]},
    g34 = {r: xArray[33], i: restoredyArray[33]},
    g35 = {r: xArray[34], i: restoredyArray[34]},
    g36 = {r: xArray[35], i: restoredyArray[35]},
    g37 = {r: xArray[36], i: restoredyArray[36]},
    g38 = {r: xArray[37], i: restoredyArray[37]},
    g39 = {r: xArray[38], i: restoredyArray[38]},
    g40 = {r: xArray[39], i: restoredyArray[39]},

    g41 = {r: xArray[40], i: restoredyArray[40]},
    g42 = {r: xArray[41], i: restoredyArray[41]},
    g43 = {r: xArray[42], i: restoredyArray[42]},
    g44 = {r: xArray[43], i: restoredyArray[43]},
    g45 = {r: xArray[44], i: restoredyArray[44]},
    g46 = {r: xArray[45], i: restoredyArray[45]},
    g47 = {r: xArray[46], i: restoredyArray[46]},
    g48 = {r: xArray[47], i: restoredyArray[47]},
    g49 = {r: xArray[48], i: restoredyArray[48]},
    g50 = {r: xArray[49], i: restoredyArray[49]},
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
	];

  console.log(transformedRealPointsData[0]);
  console.log(transformedRealPointsData.length);

	points.selectAll('circle').data(transformedRealPointsData, function(d){return d.id})
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
}

d3.select(self.frameElement).style("height", d3.select('.content').node().getBoundingClientRect().height + "px");

})();