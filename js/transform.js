// inputArray = [-1,1,-1,1,-1,1,-1,1]

// var dft = function() {
//     // var inputArray = [-1,1,-1,1,-1,1,-1,1]
//     var len = inputArray.length;
//         output = [];
 
//  for( var k=0; k < len; k++ ) {
//    var real = 0;
//    var imag = 0;
//    for( var n=0; n < len; n++ ) {
//      real += inputArray[n]*Math.cos(-2*Math.PI*k*n/len);
//      imag += inputArray[n]*Math.sin(-2*Math.PI*k*n/len);
//    }
//    output.push(real)
//  } 
// console.log(output);
// return output;
// };

// dft();

// var idft = function () {
//     var len = output.length;
//     inverseOutput = [];

// for (var n = 0; n < len; n++) {
//     var out = 0;
// for (var k = 0; k < len; k++) {
//     out += output[k]*Math.cos(-2*Math.PI*k*n/len);
//     // out += output[k]*Math.sin(-2*Math.PI*k*n/len);   
//     }
//     out = out/len;
//     inverseOutput.push(out);
// }
// console.log(inverseOutput)
// return inverseOutput;
// };

// idft()