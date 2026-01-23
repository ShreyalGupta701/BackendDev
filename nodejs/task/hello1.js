// calling 1 function another file by import export module 
function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}

function div(a,b)
{
    return `The result of division is: ${a / b}`;
}

function mod(a,b)
{
    return `the modulous is : ${a%b}`;
}

function exponent(a,b)
{
    return `exponent is :${a**b}`;
}

function max(a,b)
{
    return Math.max(a,b);
}
module.exports={ div,add,sub,mod,exponent,max};