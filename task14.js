function times(number) {
    var n=number;
    var count=0;
    var count_no_of_times;
    var remainder;
    if(n===0){
        count=0;
    }
    function digitSum(n){
    var sum=0;
    
    while(n!=0){
        remainder=n%10;
        sum=sum+remainder;
        n=parseInt(n/10);
        
        
    }
     return sum;
    
    }
    sum1=digitSum(n);
    count=count+1;
   
    
 
        while(sum1>=10){
            count=count+1;
           // count_no_of_times=count;
            sum1=digitSum(sum1);
        }
        
    
    return count;
   }

   module.exports=times
