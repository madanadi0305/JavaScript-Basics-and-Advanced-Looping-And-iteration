function solveCube(number){
    // Enter your logic here
    var i=1;
    var result=0;
  while(i<=number){
      result=result+i*i*i;
      i=i+1;
  }
    return result;
}
module.exports = solveCube;
