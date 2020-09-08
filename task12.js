function armstong (number) {
    //  Enter yoru logic here
    var is_Armstrong=false;
    var n=number;
    var sum=0;
    var remainder=0;
    var count=0;
    var n1=number;
    while(n1!==0){
    remainder=n1%10;
    count=count+1;
    n=parseInt(n/10);

    }
    while(n!==0){
     r=n%10;
     sum=sum+r^count;
     n=parseInt(n/10);
     
    }
    if(sum===number){
         is_Armstrong=true;
     }
     else{
         is_Armstrong=false;
     }
    return is_Armstrong;
}

module.exports = armstong;
