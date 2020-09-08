function times(number) {
    var n=number;
    var count=0;
    var remainder;
    function digitSum(n){
    var sum=0;
    
    while(n!=0){
        remainder=n%10;
        sum=sum+remainder;
        n=parseInt(n/10);
        
        
    }
     return sum;
    
    }
    
   
    
 
        while(n>=10){
            count=count+1;
            n=digitSum(n);
        }
        
    
    return count;
   }
module.export=times


