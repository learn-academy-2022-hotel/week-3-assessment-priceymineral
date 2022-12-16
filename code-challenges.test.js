// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
// PSEUDO
// function should check that an array the length of the input number is returned with the correct numbers of the fibonacci sequence
// write a test with the inputs provided
// expect them to equal the outputs provided 
// run test and check for "good" error (fn not defined)
describe("fibo", () => {
  it("returns an array the length of the input number with the fibonacci sequence", () => {
    expect(fibo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibo(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// PSEUDO
// input - number (>2)
// output - array (starts with 1, length of the input number, containing the numbers of the fibonacci seq)
// the fib seq starts with 0, 1. any subsequent number is found by adding the previous 2 numbers
//create a fxn that takes one number input
  // initialize a return variable to an empty array
  // iterate input number amount of times
    // save the result of adding the last two numbers in the sequence to a variable
    // push the result to the created array 
  // return the result array
const fibo = (num) => {
  let res = [1, 1]
  for (let i = 2; i < num; i++) {
    let nextNum = res[i-1] + res[i-2]
    res.push(nextNum) 
  }
  return res
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// create function called sortedValues
// should return the sorted values of the input object
// use the 2 inputs provided to test
// run test and check for "good" error (fn not defined)
describe("sortedValues", () => {
  it("returns the values of the input arrray sorted from least to greatest", () => {
    expect(sortedValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortedValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
//PSEUDO
// create a fn that takes in an obj as an argument
// initialize an array to equal the object's values (Object.values())
// use a sorting method to sort the array with values
// return the array
const sortedValues = (obj) => {
  let vals = Object.values(obj)
  vals.sort((a,b) => a-b)
  return vals
}









// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
