function sumSeries(number){
    //  Enter yoru  logic here
    var sum=0;
    for(var i=1;i<=number;i++){
        sum=sum+(1/i);
    }
    return sum.toFixed(2);
}

module.exports = sumSeries;
