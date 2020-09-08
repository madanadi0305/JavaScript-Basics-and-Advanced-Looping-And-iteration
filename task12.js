function armstrong(number){
var count=0;
var is_Armstrong=false;
var r,remainder;
var n=number;
var sum=0;
var n1=number;
while(n!=0){
   r=n%10;
   count=count+1;
   n=parseInt(n/10);
   
}
while(n1!=0){
  remainder=n%10;
  sum=sum+Math.pow(r,count);
  n1=parseInt(n1/10);

}
if(sum===number){
    is_Armstrong=true;
}
else{
    is_Armstrong=false;
}
return is_Armstrong;
}
a=armstrong(153);
console.log(a);
module.exports=armstrong;
