function gcd(num1, num2){
    //  ENter your logic here
    var n1=num1;
    var n2=num2;
    if(n1==0||n2==0)
    {return 0;

    }
    if(n1==n2)
    {return n1;

    }
    if(n1>n2)
    {return gcd(n1-n2,n2);}
    else{
      return gcd(n1,n2-n1);
    }
    
}

module.exports = gcd;
