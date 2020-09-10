function prime(number){
    //  Enter your logic here
var n=number;
var is_Prime;
//if n is 0 or 1  then the next prime number is 2
if(n===0||n===1){
    return 2;
}
for(var i=n+1;;i++){
is_Prime=true;
for(var j=2;j<i;j++){
    if(i%j===0){
        is_Prime=false;
        //break the innermost for loop and move to outer for loop to evaluate the same for next number

        break;

    }
}
if(is_Prime===true){
    return i;
}
}

}
module.exports = prime
