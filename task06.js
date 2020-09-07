function round(number){
    //  Enter your logic here
    var i=0;
    var result=0;
    var output=0;
    while(i<=10){
     result=number+i;   
     if(result%10===0){
      output=result;
     }

     i=i+1;
    }
    return output;
}
module.exports = round;
