function multiply(number){
    // Enter your logic here
    var factorial=1;
    for(var i=1;i<=number;i++){
      factorial=factorial*i;
    }
    return factorial;
}
module.exports = multiply;
