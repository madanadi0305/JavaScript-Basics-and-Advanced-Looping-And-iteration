## While Loop

First, let’s take a look at while loop. In a while loop, the given code is executed as long as the condition in the loop is true. The condition is specified in ( ) and the code is written in { }. In below example, as long as the condition (i <= 5) is true, the code inside { } will be executed



**While Loop**

```js
while(condition){
    //Source code
}
```

**Steps in a while loop**

```js
var a=1;                    (1)
while(a<5){                 (2)
    console.log("Hello");   (3)
    a=a+1                   (4)
}
```
**Output**

```js
Hello
Hello
Hello
Hello
Hello
```

## Using while Loop

Let’s use while loop. In the below example we have used while loop to print numbers from 20 to 30 using function print().


```js
var a = 20;
while(a<=30){    
    console.log("number is ",a);    
     a = a + 1; 
}
```

Output

```
number is 20.00
number is 21.00
number is 22.00
number is 23.00
number is 24.00
number is 25.00
number is 26.00
number is 27.00
number is 28.00
number is 29.00
number is 30.00
```
 
 ## Infinite Loop


If you forget to update the variable in loop, the condition will always be true. It will result in an Infinite loop which will put a huge load on the computer. So, make sure to avoid such mistakes. The below example is missing the statement i = i + 1 or i++. Hence, the loop will run forever


```js
var num=100;
while(num<100){
    console.log(num);
}
```

**Output**

```
100
100
100
.
.
```
 
 