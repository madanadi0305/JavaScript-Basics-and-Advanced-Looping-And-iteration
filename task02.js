function multiple(number){
    // Enter your logic here
    var i=1;
    var j=1;
    var sum=0;
    while(i<=number){
        while(j<=10){
            sum=sum+j*i;
            j=j+1;
        }
        i=i+1;
    }
    return sum;
}
module.exports = multiple;
