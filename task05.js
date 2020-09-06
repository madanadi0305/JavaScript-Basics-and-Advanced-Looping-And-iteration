function multipleSum(num){
    //  Enter your logic here
    var sum=0;
    for(i=1;i<num;i++){
        if(i%3==0 || i%5==0){
            sum=sum+i;
        }
    }
    return sum;
}
module.exports = multipleSum;
