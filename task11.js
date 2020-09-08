function prime(n){
    var is_NotPrime=false;
    var count=0;
    for(var i=2;i<=number;i++){
        for(var j=2;j<i;j++){
            if(i%j===0){
                is_NotPrime=true;
                break;
            }

        }
    if(is_NotPrime===false){
            
    count=count+1;
    }   
    }
}



module.exports = prime;
