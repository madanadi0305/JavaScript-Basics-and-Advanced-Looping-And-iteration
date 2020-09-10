function NthTerm (number){
    //  Enter your logic here
var a=0;
var b=1;
var c;
var n=number;
if(n===0){
return a;
}
if(n===1){
    return b;
}
for(var i=2;i<=n;i++){
c=a+b;
//First number is now second number
a=b;
//Second Number is now the sum of the previous two numbers
b=c;

}
//return the sum or the number at nth position
return b;

}

module.exports = NthTerm;
