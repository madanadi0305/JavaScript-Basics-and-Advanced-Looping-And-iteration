function prime(n){
    var is_Prime;
    var count=0;
    for(var i=2;i<=number;i++){
        is_Prime=1;
        for(var j=2;j<i;j++){
            if(i%j===0){
                is_Prime=false;
                break;
            }

        }
    if(is_Prime===true){
            
    count=count+1;
    }   
    }
    return count;
    }



module.exports = prime;
