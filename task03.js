function solveCube(number){
    // Enter your logic here
    var i=1;
    var result=0;
  while(i<=number){
      result=i*i*i;
  }
    return result;
}
module.exports = solveCube;
