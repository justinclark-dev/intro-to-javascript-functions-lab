/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(18, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    let ageCategory = 'minor'
    if (age >= 18) {
        ageCategory = 'adult'
    }
    return ageCategory
}

console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(18));
console.log('Exercise 2 Result:', isAdult(17));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let vowel in vowels) {
        console.log(vowels[vowel])
        if (String(char).toLowerCase() === vowels[vowel]) return true
    }
    return false
}

console.log('Exercise 3 Result:', isCharAVowel("x"));
console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("i"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (username, domain) => {
    return `${username}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (user, timeOfDay) => {
    return `Good ${timeOfDay}, ${user}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (a, b, c) => {
    /*
        I thought I could do this:

            const nums = [a, b, c]
            return nums.max()

        I found I couldn't, so I cheated and looked up array 
        methods and found this is what I would need instead:

            const nums = [a, b, c]
            return Math.max(...nums)
    */

    // my algorithmic approach:
    const nums = [a, b, c]
    let max = nums[0]
    for (let num in nums) {
        if (nums[num] > max) {
            max = nums[num]
        }
    }
    return max
}

console.log('Exercise 6 Result:', maxOfThree(55, 10, 88));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (dollarAmount, percentage) => {
    return Number(dollarAmount * (percentage / 100)).toFixed(2)
}

console.log('Exercise 7 Result:', calculateTip(63.5, 17));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temp, unitOfMeasure) => {
    // Fahrenheit (°F) = (°C × 9/5) + 32
    let fahrenheit = (temp * (9/5)) + 32
    if (fahrenheit % 1 !== 0) fahrenheit = fahrenheit.toFixed(1)

    // Celsius (°C) = (°F - 32) × 5/9 
    let celsius = (temp - 32) * (5/9)
    if (celsius % 1 !== 0) celsius = celsius.toFixed(1)

    if (unitOfMeasure === 'F') {
        return celsius
    }
    return fahrenheit
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 Result:', convertTemperature(32, "F"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (n1, n2, operator) => {
    switch (operator) {
        case 'add':
            return n1 + n2
        case 'subtract':
            return n1 - n2
        case 'multiply':
            return n1 * n2
        case 'divide':
            return n1 / n2
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('Exercise 9 Result:', basicCalculator(20, 1, "add"));
console.log('Exercise 9 Result:', basicCalculator(5, 5, "multiply"));
console.log('Exercise 9 Result:', basicCalculator(64, 2, "divide"));