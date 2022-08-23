// Loop Assignments (Don’t use arrays)

// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

let answer = '';
let end = 98;

for (let i = 2; i < 100; i += 2) {
  answer += ' ' + i + ' ';
  answer += ' ' + end + ' ';
  end -= 2;
}
console.log(answer);

// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let distance, time;

while (distance != 0) {
  distance = prompt('Enter distance in kilometers');

  if (distance == 0) {
    console.log('distance 0 - game over');
    break;
  }

  time = prompt('Enter time in hours');
  let average = distance / time;
  console.log('average is: ', average);
}

// Eyvaz solution

do {
  distance = prompt('Please enter the distance in km.');

  time = prompt('Please enter the spent time in hour');

  console.log('average speed is', distance / time);
} while (distance != 0);

// Onis solution

let distance, time;

do {
  distance = +prompt('What is the distance in Km ?');

  if (distance > 0) {
    time = +prompt('What is the time in hrs ?');
  }

  console.log(`Average speed is: 12

    ${distance / time}`);
} while (distance != 0);

// Jason's solution
function avarageSpeed() {
  let stopper;

  do {
    const distanceKm = parseFloat(prompt('Enter a distance in km?'));

    if (distanceKm == 0) {
      console.log('Program is exiting Good bye!');

      stopper = distanceKm;

      return 0;
    } else {
      const timeH = parseFloat(prompt('Enter the time in hours?'));

      let avgSpeed = distanceKm / timeH;

      console.log('The average speed is:', avgSpeed, 'km.');
    }
  } while (stopper != 0);
}

avarageSpeed();

// Jenni's solution

while (true) {
  let distance = prompt('Give distance (km)');

  if (distance == 0) {
    break;
  }

  let time = prompt('Give time (h)');

  let averageSpeed;

  averageSpeed = distance / time;

  console.log(`Average speed is ${averageSpeed} km per hour.`);
}

// Ilia's solution
do {
  dist = parseInt(prompt('Enter distance'));
  let time = parseInt(prompt('enter time'));
  let speed = `Average speed is: ${(dist / time).toFixed(2)} km/h`;
  console.log(speed);
} while (dist > 0);
// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let even = 0;

for (let counter = 0; counter < 5; counter++) {
  let input = Number(prompt('enter a number'));
  if (input % 2 == 0) {
    even++;
  }
}
console.log('There was', even, 'even numbers');

// 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let input;
let sum = 0;
let count = 0;

while (input != 0) {
  input = Number(prompt('enter a number'));
  sum += input;
  count++;
}

console.log(sum / count - 1);

// Jason's solution

function getAvarage() {
  let numberAvarage = 0;

  let numberCount = 0;

  let digitSum = 0;

  let singleDigit;

  do {
    singleDigit = parseFloat(prompt(`Enter a digit. Enter 0 to end.`));

    digitSum += singleDigit;

    numberCount += 1;
  } while (singleDigit != 0);

  numberAvarage = digitSum / numberCount;

  console.log(
    `There are ${numberCount} numbers, their total is ${digitSum} and their avarage is ${numberAvarage}.`
  );
}

getAvarage();

// Ilia's solution

let count = 0;
let sum = 0;
let input = 1;
while (input != 0) {
  input = parseInt(prompt('Enter a number'));
  sum = sum + input;
  count++;
}
let whole = Math.round(sum / count);

// 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let sum = 0;
let counter = 0;

do {
  let input = Number(prompt('enter a number'));
  sum += input;
  counter++;
} while (counter !== 5);

console.log(`Average was ${sum / counter}`);

// Jason's solution

function getAvarage() {
  let numberAvarage = 0;

  let digitSum = 0;

  for (let i = 0; i < 5; i++) {
    let singleDigit = parseFloat(prompt(`Enter a digit #${i + 1}: .`));

    digitSum += singleDigit;
  }

  numberAvarage = digitSum / 5;

  console.log(
    `There are 5 numbers, their total is ${digitSum} and their avarage is ${numberAvarage}.`
  );
}

getAvarage();

// Jenni's solution

let numsCounter = 0;
let numsSum = 0;
let numsAvg = 0;

while (true) {
  let number = prompt('Pls give 25 numbers');

  if (numsCounter >= 5) {
    break;
  }

  numsSum = numsSum + parseFloat(number);
  numsCounter++;
}

numsAvg = numsSum / parseFloat(numsCounter);

console.log(`Average of numbers is ${numsAvg}`);

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let input, confirmation;
let sum = 0;
let counter = 0;

while (confirmation != 'n') {
  input = Number(prompt('Enter your number'));
  confirmation = prompt('Do you want to continue giving numbers?(y/n)');
  sum = sum + input;
  counter++;
}

console.log(`Average is ${sum / counter}`);

// Jason's solution

function getAvarage() {
  let numberAvarage = 0;
  let numberCount = 0;
  let digitSum = 0;
  let doContinue = '';

  do {
    const singleDigit = parseFloat(prompt(`Enter a digit: `));

    doContinue = askToContinue();

    if (doContinue == 'y' || doContinue == 'n') {
      digitSum += singleDigit;

      numberCount += 1;
    } else {
      console.log('You did not enter y or n. Try again!');

      doContinue = askToContinue();
    }
  } while (doContinue == 'y');

  numberAvarage = digitSum / numberCount;

  console.log(
    `There are ${numberCount} numbers, their total is ${digitSum} and their avarage is ${numberAvarage}.`
  );
}

function askToContinue() {
  return prompt(`Do you want to continue y/n?`);
}

getAvarage();

// Dang's solution

let number, i, average, answer;

let sum = 0;

function askNumber() {
  number = parseInt(prompt('Give me a number?'));

  console.log('Your ', i, ' number is ', number);

  sum += number;

  console.log('Your current sum is ', sum);

  average = sum / i;
}

function giveNumber() {
  answer = String(prompt('Do you want to give more number? (y/n)'));

  console.log('your answer is ', answer);

  if (answer == 'y') {
    console.log('You answered YES, program continues');
  } else if (answer == 'n') {
    console.log('You answered NO, program ends');
  } else {
    console.log('Wrong answer, y or n only');

    giveNumber();
  }
}

for (i = 1; i < 26; i++) {
  askNumber();

  giveNumber();

  if (answer == 'n') {
    i += 100;

    console.log('The average is =', average);
  }
}

// Hasan's solution

let questions21 = false;
let question = true;
let count7 = 0;
let sum7 = 0;
let average7 = 0;

do {
  let number1 = Number.parseInt(window.prompt('Enter your number'));
  count7++;
  sum7 += number1;
  average7 = sum7 / count7;

  let questions = window.prompt('Do you want to continue giving numbers?(y/n)');

  if (questions === 'y') {
    question = true;
  } else if (questions === 'n') {
    question = false;
  } else {
    do {
      questions21 = true;

      let questions13 = window.prompt(
        'Do you want to continue giving numbers?(y/n)'
      );

      if (questions13 === 'y' || questions13 === 'n') {
        questions21 = false;
      }
    } while (questions21);
  }
} while (question);

console.log(average7);

// Jesse's solution

let averagewithyesno = () => {
  let numbers = 0;
  let nsums = 0;
  let ncounter = 0;
  let continueadd = 0;
  do {
    numbers = parseInt(prompt('enter any number'));
    continueadd = confirm('Do you want to add another number?');
    ncounter += 1;
    nsums += numbers;
    let result = nsums / ncounter;
    console.log(result);
    // document.getElementById("agestatu").innerHTML=result;
  } while (continueadd);
  //divscroll();
  alert('thank you for your time');
};

// Onis solution
let count = 0,
  num = 0,
  questionPrompt,
  numPrompt;

do {
  numPrompt = +prompt('Enter a number: ');

  num += numPrompt;

  count++;

  questionPrompt = prompt(
    'Do you want to continue giving numbers?(y/n)'
  ).toLowerCase();
} while (questionPrompt === 'y');

average = Math.round(num / count);

console.log(
  `The average is: ${average} and the total number(s) inputted is ${count}`
);

// Jenni's solution

let avgOfNums = 0;
let numsCount = 0;
let sumOfNums = 0;

while (true) {
  let userInputNum = prompt('Give me a number?');

  let userAnswer = prompt('Do you want to continue giving numbers?(y/n)');

  sumOfNums = sumOfNums + parseFloat(userInputNum);

  numsCount++;

  if (userAnswer === 'n') {
    break;
  }
}

avgOfNums = sumOfNums / parseFloat(numsCount);

console.log(`Average of numbers is ${avgOfNums} `);

// Tuan's solution

const askingAverageNumber = () => {
  let total = 0;
  let average;
  let count = 0;
  let secondQuestion = true;

  while (secondQuestion) {
    count++;

    let firstQuestion = prompt('please insert any number ');

    total += parseInt(firstQuestion);

    average = total / count;

    secondQuestion = confirm('Do you want to continue giving numbers? ?');

    if (!secondQuestion) return alert('Average Number is : ' + average);
  }
};

askingAverageNumber();

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

let min = 0;
let input = prompt('How many numbers you want to input?');

for (let n = 0; n < input; n++) {
  let num = Number(prompt('Enter number'));
  if (num >= 0 && min == 0) {
    min = num;
  } else if (num < min) {
    min = num;
  }
}

console.log(min);

// Lera's solution

function printMin() {
  let i = +prompt('How many numbers would you like to give?');

  if (i < 1) return;

  let num;

  let min = +prompt('Enter a number');

  while (--i) {
    num = +prompt('Enter a number');

    if (num < min) min = num;
  }

  alert(`The smallest number that you gave was ${min}`);
}

printMin();

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
