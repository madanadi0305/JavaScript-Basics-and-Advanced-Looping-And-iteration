function digitSum (number){
    //  enter your logic here
    var n=number;
    var sum1=0;
    var remainder;
    while(n!=0){
       
     remainder=n%10;
      
     if(remainder%2==0)
     {sum1=sum1+remainder;
     }
     n=parseInt(n/10);   
    }

    sum=parseInt(sum1);
    return sum;
}
module.exports = digitSum;
