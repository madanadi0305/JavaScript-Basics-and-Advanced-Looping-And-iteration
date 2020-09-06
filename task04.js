function findMax(number){
// Enter your logic here
var result=0;
var i=1;
var k=0;
var max=0;
//var forward=0;
var previous=0;
var previous_sum=0;
//var forward_sum=0;
while(i<=number){
    
    result=result+i;
   // forward=i+1;
   previous=i-1;
   previous_sum=previous_sum+previous;
    //forward_sum=forward_sum+forward;
    if((result===number)){
     k=i;
    
    }
    else if((number<result)&&(number>previous_sum))
    {
        k=previous;
    }
    
    i=i+1;
    //continue;
    
}
max=k;
}
module.exports = findMax;
