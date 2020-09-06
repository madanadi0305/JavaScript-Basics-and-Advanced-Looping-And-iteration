function findMax(number){
var i=1;
var result=0;
var k=0;
var previous_sum=0;
while(i<=number){
   result=result+i;
   var previous=i-1;
   previous_sum=previous_sum+previous;
   if(result===number){
       k=i;
   }
   else if((number<result) && (number>=previous_sum)){
       k=previous;
   }
    i=i+1;
}
return k;
}
module.exports=findMax;
