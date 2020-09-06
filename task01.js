function getMultiple (number) {
// Enter your logic here
var iterator_value=1;
var sum1=0;
while(iterator_value<=10){
    sum1=sum1+number*iterator_value;
    iterator_value=iterator_value+1;
}
return sum1;
}

module.exports = getMultiple
