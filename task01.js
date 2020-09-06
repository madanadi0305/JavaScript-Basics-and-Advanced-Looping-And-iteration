function getMultiple (number) {
// Enter your logic here
var iterator_value=1;
var sum=0;
while(iterator_value<=10){
    sum=sum+number*iterator_value;
    iterator_value=iterator_value+1;
}
return sum;
}

module.exports = getMultiple
