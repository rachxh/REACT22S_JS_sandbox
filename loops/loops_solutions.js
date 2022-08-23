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
console.log(`Average number is: ${whole}`);

// 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
