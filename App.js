// Q.1. addTwoNumbers Write a function that takes two numbers and returns their sum.

//Ans
function sum(num1, num2){
   console.log(num1 + num2)
   return num1 + num2
}


  // console.log(sum(20, 40))
  console.log(20 + 30)



// Q.2. subtractNumbers Create a function that takes two numbers and
//  returns the result of the first number minus the second.


//Ans
function subtractNumbers(num1, num2){
   console.log(70 - 50)
   return num1 - num2
}

subtractNumbers()
// console.log(70 - 50)
//   console.log(20 - 30)



// 3. multiplyNumbers Write a function that multiplies
//  two numbers and returns the result.

//Ans
function multiplyNumbers(num1, num2){
   console.log(70 * 50)
   return num1 * num2
}

   console.log(70 * 50)
multiplyNumbers()
console.log(70 - 50)
  console.log(20 - 30)






// Q.4. divideNumbers Create a function that takes two numbers and
//  returns the result of dividing the first by the second.


//Ans

function divideNumbers (num1, num2){
   console.log(70 / 50)
   return num1 * num2
}

   console.log(70 / 50)
divideNumbers ()
console.log(70 / 50)
//   console.log(20 / 30)





// Q.5. getRemainder Write a function that takes two numbers and returns
//  the remainder when the first number is divided by the second.

//Ans

function divideNumbers (num1, num2){
   console.log(70 / 50)
   return num1 * num2
}

   console.log(70 / 50)
divideNumbers ()
console.log(70 / 50)
  console.log(20 / 30)







// Q.6. isPositive Write a function that checks if a number is positive.
//  If it is, return "Positive", otherwise return "Not Positive".


//Ans

function isPositive(number) {
    if (number > 0) {
        return "Positive";
    } else {
        return "Not Positive";
    }
}


console.log(isPositive(5));
console.log(isPositive(-3));
console.log(isPositive(0));






// Q.7. isNegative Create a function that checks if a number is negative.
//  If it is, return "Negative", else return "Not Negative".

//Ans

function isNegative(number) {
    if (number < 0) {
        return "Negative";
    } else {
        return "Not Negative";
    }
}

console.log(isNegative(-5)); 
console.log(isNegative(3)); 
console.log(isNegative(0));   










// Q.8. checkEven Write a function that takes a number and
//  returns "Even" if the number is even, otherwise "Odd".

//ans
function checkEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEven(4));
console.log(checkEven(7));







// q.9. isEqual Write a function that takes two numbers and returns "Equal" 
// if they are the same, otherwise "Not Equal".

//Ans
function isEqual(num1, num2) {
    if (num1 === num2) {
        return "Equal";
    } else {
        return "Not Equal";
    }
}

console.log(isEqual(5, 5));
console.log(isEqual(3, 7)); 






//10. compareNumbers Create a function that returns "Greater" if the first 
// number is greater than the second, else return "Smaller".

//Ans
function compareNumbers(num1, num2){
  if(num1 > num2){
     return "Greater"
  }else{
     return "Smaller"
  }
 
}

console.log(compareNumbers(10, 5))
console.log(compareNumbers(5, 50))








// Q.11. getFullName Write a function that takes a first 
// name and last name, and returns the full name.

//Ans
function getFullName(firstName, lastName){
  return firstName + " " + lastName 
}

console.log(getFullName("Saif", "Ur Rehman"))






// Q.12. getGrade Create a function that takes a number (0–100) and 
// returns:
// "Pass" if the score is 40 or more
// "Fail" if it is less than 40
// multiple()
// multiple()

//Ans
function getGrade(score) {
    if (score >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(getGrade(75));
console.log(getGrade(32));





//Q.13. isTeenager Write a function that takes an age and returns "Teenager" 
// if the age is between 13 and 19, otherwise return "Not a Teenager".

//Ans

function isTeenager(age) {
    if (age > 13 && age < 19) {
        return "Tum Abi Jwan ho";
    } else {
        return "Tum Abi Tak Bacha ho";
    }
}

console.log(isTeenager(14));
console.log(isTeenager(9));







// Q.14. greetUser Write a function that takes a name and
//  returns a greeting like "Hello, Ahmed!".

//Ans

function greetUser(Hello, Name){
  return Hello + " " + Name 
}

console.log(greetUser("Hello", "Saif Ur Rehman"))






// Q.15. isEligibleToVote Create a function that takes age and returns
// "Eligible" if age is 18 or above, otherwise "Not Eligible".

//Ans

function EligibleToVote(age) {
    if (age >= 18) {
        return "Eligible ho";
    } else {
        return "Tum Abi Tak Bacha ho";
    }
}

console.log(EligibleToVote(19));
console.log(EligibleToVote(9));








// Q.16. findAbsoluteValue Write a function that returns the absolute
//  value of a number (no Math.abs, use if-else only).


//Ans
function findAbsoluteValue(number) {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }
}
console.log(findAbsoluteValue(-7));
console.log(findAbsoluteValue(12));   
console.log(findAbsoluteValue(0));    











//Q.17. checkTemperature Write a function that takes
//  a temperature and returns:
//  "Hot" if temperature is above 30
//  "Cold" if below 10
//  "Normal" otherwise


//Ans
function checkTemperature(temp) {
    if (temp > 30) {
        return "Hot";
    } else if (temp < 10) {
        return "Cold";
    } else {
        return "Normal";
    }
}

console.log(checkTemperature(35)); 
console.log(checkTemperature(5));   
console.log(checkTemperature(20));  
  









//Q.18. getTriangleType Create a function that 
// takes 3 sides and returns:
// "Equilateral" if all are equal
// "Isosceles" if any two are equal
// "Scalene" if all are different

//Ans
function getTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}


console.log(getTriangleType(5, 5, 5));  
console.log(getTriangleType(5, 5, 3));   
console.log(getTriangleType(3, 4, 5)); 












//Q.19. calculateDiscountedPrice Write a function that takes a 
// price and discount percentage, and returns the discounted price.

// Ans
function calculateDiscountedPrice(price, discountPercent) {
    let discountAmount = (price * discountPercent) / 100;
    return price - discountAmount;
}
console.log(calculateDiscountedPrice(1000, 20));
console.log(calculateDiscountedPrice(500, 10));









//Q.20. isPasswordValid Write a function that takes a password and checks if its length is
//  8 characters or more. Return "Valid Password" or "Too Short".


function isPasswordValid(password) {
    if (password.length >= 8) {
        return "Valid Password";
    } else {
        return "Too Short";
    }
}

console.log(isPasswordValid("abc123"));      
console.log(isPasswordValid("mysecurepass")); 
















// function greetUser (){
//     console.log("hello abdullah");
// }

// greetUser()
// greetUser()
// greetUser()
// greetUser()

// function greetUser (username , email , age){ // parameter receive krna
//     console.log("hello " + username + " with email " + email + " and age is " + age);
// }

// greetUser("abdullah" , "mabdullah@gmail.com" , 21) // argument send krna
// // greetUser("usman")

// greetUser("usman" , "usman@gmail.com" , 18)

// function sum(num1 , num2){
//     console.log(num1 + num2);

// }

// sum(12 , 70)
// sum(10 , 10)

// var nums = 20

// function square (num){
//     console.log(num ** 2);
// }

// square(nums)

// function greetUser(username){
//     console.log("hello " + username);
// }

// greetUser()

// var username = prompt("username")
// console.log(username);

// var age = 21
// var typeCheck = alert(age)

// console.log(typeCheck);

// return

// function sum(num1 , num2){
//     console.log(num1 + num2);
//     return num1 + num2
// }

// var total = sum(20 , 30)
// console.log(total);

// console.log(sum(20 , 30));

// function calculatePercentage(username, num1, num2, num3, num4) {
//   var totalMarks = 400;
//   var obtainedMarks = num1 + num2 + num3 + num4;

//   var percentage = (obtainedMarks / totalMarks) * 100;
  
//   return "candidate name is " + username + " and his percentage is " + percentage + "%."  
// }

// console.log(calculatePercentage("abdullah", 80, 80, 40, 30));












// local variable
// global variable'

// var username = "abdullah" // global variable
// function greetUser(){
//   var lastName = "khan" // local variable
//   console.log("hello " + username + lastName);
// }

// console.log(lastName);

// greetUser()