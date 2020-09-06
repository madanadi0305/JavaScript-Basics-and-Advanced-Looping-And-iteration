function findMax(number){
// Enter your logic here
var result=0;
var i=1;
var k=0;
var max=0;
while(i<=number){
    result=result+i;
    if(result===number){
     k=i;
     break;
    }
    else{
    i=i+1;
    continue;
    }
}
max=k;
return max;
}
module.exports = findMax;
