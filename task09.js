function digitSum (number){
    //  enter your logic here
    var n=number;
    var sum1=0;
    var remainder;
    while(n!=0){
       
     remainder=n%10;
      n=n/10;
     if(remainder%2==0)
     {sum1=sum1+remainder;
     }   
    }
    sum=parseInt(sum1);
    return sum;
}
module.exports = digitSum;
