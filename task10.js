function sumSeries(number){
    //  Enter yoru  logic here
    var sum=0;
    for(var i=0;i<=number;i++){
        sum=sum+(1/i);
    }
    return sum;
}

module.exports = sumSeries;
