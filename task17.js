function factorial(number){
var n=number;
if(n<=1){
    return 1;
}
return n*factorial(n-1);

}
module.export=factorial;
