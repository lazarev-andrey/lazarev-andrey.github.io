inputArray = [-1,1,-1,1,-1,1,-1,1]

function dft( inputArray ) {
    var inputArray;
    var len = inputArray.length;
        output = [];
 
 for( var k=0; k < len; k++ ) {
   var real = 0;
   var imag = 0;
   for( var n=0; n < len; n++ ) {
     real += inputArray[n]*Math.cos(-2*Math.PI*k*n/len);
     imag += inputArray[n]*Math.sin(-2*Math.PI*k*n/len);
   }
   output.push(real, imag)
 } 
console.log(output);
return output;
};


function idft(output) {
    var len = output.length;
    inverseOutput = [];

for (var n = 0; n < len; n++) {
    var out = 0;
for (var k = 0; k < len; k++) {
    out += output[k][0]*Math.cos(-2*Math.PI*k*n/len);
    out += output[k][1]*Math.sin(-2*Math.PI*k*n/len);   
    }
    out = out/len;
    inverseOutput.push(out);
}
console.log(inverseOutput)
return inverseOutput;
};
