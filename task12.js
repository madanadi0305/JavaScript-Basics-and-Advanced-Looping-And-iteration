function armstong (number) {
    //  Enter yoru logic here
    var is_Armstrong=false;
    var n=number;
    var sum=0;
    while(n!==0){
     r=n%10;
     sum=sum+r*r*r;
     n=(n/10);
     if(sum===number){
         is_Armstrong=true;
     }
     else{
         is_Armstrong=false;
     }
    }
    return is_Armstrong;
}

module.exports = armstong;
