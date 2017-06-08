var rs = require('readline-sync');
//get users' response

var num1 = rs.questionInt("enter the first number");
var num2 = rs.questionInt("enter the second number");
var operand = rs.question("please enter an operand");
var result;

switch(operand)
{
  case "*":
  result = (num1*num2);
  break;

  case "+":
  result = (num1+num2);
  break;

  case "-":
  result = (num1=num2);
  break;
}
console.log(num1 + operand + num2 + "="+result);
