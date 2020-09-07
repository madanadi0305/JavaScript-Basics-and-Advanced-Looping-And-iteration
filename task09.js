function digitSum (number){
    //  enter your logic here
    var n=number;
    var sum=0;
    var remainder;
    while(n!=0){
       
     remainder=n%10;
      n=n/10;
     if(remainder%2==0)
     {sum=sum+remainder;
     }   
    }
    sum=parseInt(sum);
    return sum;
}
module.exports = digitSum;
