let num1 = ""
let operator =""
let num2=""
let result

const display = document.querySelector(".display")
const number = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector(".clear")

//numbers event
number.forEach(element =>{
  element.addEventListener("click", () => {
  display.textContent += element.textContent
  if (operator === ""){ 
    num1 = display.textContent
    console.log(num1)
  }else if(num2 !== result){
    num2 = display.textContent
    console.log(num2)
  }else{
    num2 = result
    console.log(num2)
  }
 })
})

//operator event
operators.forEach(element => {
  element.addEventListener("click", (event) => {
  if (element.textContent !== "="){
    display.textContent = " "
       if (operator != ""){
        console.log(`num1: ${num1}, operator ${operator}, num2: ${num2} result: ${result}`)
     operate(num1,operator,num2)
       if (num2 != "" ){
          num1= result
       }
     operator = event.target.id 
     num2 =""
     display.textContent = " "
    }
    console.log(`num1: ${num1}, operator ${operator}, num2: ${num2}`)
    operator = event.target.id 
    console.log(`num1: ${num1}, operator ${operator}, num2: ${num2}`)

  }else{
    operate(num1,operator,num2)
    console.log(num1, operator, num2)
  }
 })
})

 


//operator functions
const add = function(num1,num2){
  result  =  Number(num1) + Number(num2)
  display.textContent = result 
  num2 = result
}

const subtract = function(num1,num2){
  result  =  num1 - num2
  display.textContent = result
  num2 = result
}

const multiply = function(num1,num2){
 result  =  num1 * num2
  display.textContent = result
  num2 = result
}

const divide= function(num1,num2){
  if(num2 != 0){
  result  =  (num1 / num2)
  if (result % 1 === 0){
  display.textContent = result
  num2 = result
  }else{
  display.textContent = result.toFixed(2)
  num2 = result
  }
}else{
 alert("You can not divide by 0. Try again!")
}
} 


//Function to make calculation
const operate = function(num1, operator, num2){
  if(num1 != "" && operator != "" && num2 !=""){
    if (operator === 'add'){
     return add(num1,num2);
  }else if (operator === 'subtract'){
    return subtract(num1,num2);
  }else if (operator === 'multiply'){
     return multiply(num1,num2);
  }else
   return divide(num1,num2);
 }
}

clear.addEventListener("click", () => {
  display.textContent= ""
 operator =""
  result = ""
 num1=""
//  num2=""
 console.log(num1, num2, result, operator)
})


//Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user.
//When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result