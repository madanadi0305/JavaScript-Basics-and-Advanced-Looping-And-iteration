function prime(n){
    var i,j=0;
    for (i=2;i<n;i++){
        if(n%i===0){
            j=1;
        }
    }
    if(j===0){
        return true;
    }
    else{
        return false;
    }
    }



module.exports = prime;
