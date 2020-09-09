function times(number){
    var n=number;
    var r;
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
    
    
    
    
    
    /*if(n==0 ){
        //count=0;
        return 0;
    }
    else if(n<10 && n>0){
        return 1;
    }
    
    else{*/
    while(n>=10){
        count=count+1;
        n=digitSum(n);
         }
    return count;
    //}
    
}    

module.export=times;



