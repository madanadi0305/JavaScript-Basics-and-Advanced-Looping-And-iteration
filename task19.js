function series(number){
    //  Enter your logic here
    //sum=0;
    
    var n=number;
if(n==1){
//sum=Math.pow(number,number);
return 1;
}

return Math.pow(n,n)+series(n-1);  


}

module.exports = series;
