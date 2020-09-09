function times(number){
    var n=number;
    var r;
    var n1=number;
    var count=0;
    //var sum=0;
    function digitSum(n){
        var sum=0;
        while(n!==0){
            r=n%10;
            n=parseInt(n/10);
            sum=sum+r;
        }
        return sum;
    }
    
    
    
    

    
    
    while(n1>=10){
        count=count+1;
        n1=digitSum(n1);
         }
    return count;
    
    
}    
module.export=times;



