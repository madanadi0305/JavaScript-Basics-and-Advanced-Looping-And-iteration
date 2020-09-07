function div(numerator, denominator){
    //  Enter your logic here
    var n=numerator;
    var d=denominator;
    //var remainder=0;
    var quotient=0;
    while(n%d===0){
      quotient=n/d;
      n=quotient;
      continue;
    }
    return n;
}
module.exports = div;
