// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
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

function checkArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
      console.log(numbers[i] + ' is bigger than 5')
    } else {
      console.log(numbers[i] + ' is not bigger than 5')
    }
  }
}

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
  {
    price: 100,
    name: 'Coat',
    id: 5734,
    quantity: 1,
  },
  {
    price: 33,
    name: 'Socks',
    id: 8455,
    quantity: 2,
  },
  {
    price: 15,
    name: 'Gloves',
    id: 8777,
    quantity: 2,
  },
]

function shoppingCartTotal(x) {
  let total = 0
  for (const obj of x) {
    total += obj.price
  }
  return console.log('The total cost of your shopping basket is $' + total)
}

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

function addToShoppingCart(add) {
  shoppingCart.push(add)
  return console.log(
    'You now have ' + shoppingCart.length + ' items in your basket.',
  )
}

let newItem = {
  price: 20,
  name: 'Shoes',
  id: 6833,
  quantity: 2,
}

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

function maxShoppingCart(mostExpensive) {
  let ItemIndex = 0

  for (let i = 1; i < mostExpensive.length; i++) {
    if (mostExpensive[ItemIndex].price < mostExpensive[i].price) {
      ItemIndex = i
    }
  }
  console.log(
    'The most expensive item in your basket is ' +
      mostExpensive[ItemIndex].name +
      ' which costs $' +
      mostExpensive[ItemIndex].price,
  )
}

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(array) {
  lastItem = array.length - 1
  console.log(
    'The last item in your shopping basket was: ' +
      JSON.stringify(array[lastItem]),
  )
}

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil(x) {
  let counter = 0
  let attempts = 0

  while (counter < 4) {
    if (counter === 3) {
      console.log('Beat the System in ' + attempts)
      break
    }

    let randomNumber = Math.floor(Math.random() * 10)

    if (randomNumber > x) {
      counter++
      attempts++
    } else {
      counter = 0
    }
  }
}

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
