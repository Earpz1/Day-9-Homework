/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
  return l1 * l2
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(x, y) {
  if (x !== y) {
    return x + y
  } else {
    return (x + y) * 3
  }
}

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(x) {
  if (x > 19) {
    return (x - 19) * 3
  } else {
    return 19 - x
  }
}

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {
  if (n >= 20 && n <= 100) {
    return true
  } else if (n === 400) {
    return false
  } else {
    return 'Your input is not between 20 & 100 or exactly 400'
  }
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(x) {
  let checkString = x.split(' ')
  if (checkString.length > 0 && checkString[0] !== 'Strive') {
    return 'Strive' + ' ' + x
  } else {
    return x
  }
}

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(x) {
  if (typeof x !== 'number') {
    return 'Invalid Entry, Please enter a number'
  }

  if (x <= 0) {
    return 'Please enter a positive number, zero or a negative number allowed!'
  }
  if (x % 3 === 0 || x % 7 === 0) {
    return x + ' is a multiple of either 3 or 7'
  } else {
    return x + ' is not a multiple of 3 or 7'
  }
}

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(x) {
  if (typeof x !== 'string') {
    return 'Invalid entry, please enter a string'
  }

  let splitString = x.split('')
  let reverseString = splitString.reverse()
  let joinString = reverseString.join('')
  return joinString
}

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(x) {
  if (typeof x !== 'string') {
    return 'Invalid Input - String required'
  }

  let splitString = x.split(' ')

  for (let i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i][0].toUpperCase() + splitString[i].substring(1)
  }
  return splitString.join(' ')
}

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(x) {
  if (typeof x !== 'string') {
    return 'Invalid Input - String required'
  }

  return x.slice(1, -1)
}

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
  if (typeof n !== 'number') {
    return 'Invalid Input - String required'
  }
  let randomNumber = []

  for (i = 0; i < n; i++) {
    randomNumber.push(Math.floor(Math.random() * 11))
  }
  return randomNumber
}

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
