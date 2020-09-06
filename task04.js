function findMax(number){
// Enter your logic here
var result=0;
var i=1;
var k=0;
while(i<=number){
    result=result+i;
    if(result===number){
     k=i;
     break;
    }
    i=i+1;
}
return k;
}
module.exports = findMax;
