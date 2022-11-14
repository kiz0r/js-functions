/**
 * @func isCorrect checks the entered data for correctness
 * @param {string} value which is entered by user
 * @returns {boolean} true - if value is a finite number, else returns false
 */
function isCorrect(value) {
  const temp = Number(value);
  return isFinite(temp);
}

//console.log('isCorrect test -> ' + isCorrect(55)); -> true
//console.log('isCorrect test -> ' + isCorrect('qwerty')); -> false

/* Task 0 */
/**
 * @func isWorkingAgePerson checks is the user age functional or not
 * @param {number} age which is entered by user
 * @return {boolean} true if user's age is functional and else returns false
 */
function isWorkingAgePerson(age) {
  return age >= 16 && age <= 65;
}

const userAge = prompt('Enter Your age');
if (!isCorrect(userAge)) {
  alert('You entered incorrect meaning! Error!');
} else if (isWorkingAgePerson(userAge)) {
  alert(`You are ${userAge} years old, so You can work!`);
} else {
  alert(`You are ${userAge} years old, so You cannot work!`);
}

/* Task 1 */
function isSimpleDigit(digit) {
  for (let i = 2; i < digit; i++) {
    if (digit % i === 0) {
      return false;
    }
  }
  return digit > 1;
}

const userDigit = Number(prompt('Enter a digit'));
if (!isCorrect(userDigit)) {
  alert('You did not enter any digits.');
} else if (isSimpleDigit(userDigit)) {
  alert(`${userDigit} is a simple digit.`);
} else {
  alert(`${userDigit} is not a simple digit.`);
}

/* Task 2 */
const multiplicity = function (digit1, digit2) {
  return digit1 % digit2 === 0;
};

// console.log('multiplicity test -> ' + multiplicity(15, 5)); -> true

alert(`${multiplicity(25, 5)}`); // true
alert(`${multiplicity(15, 3)}`); // true
alert(`${multiplicity(15, 5)}`); // true
alert(`${multiplicity(15, 4)}`); // false

/* Task 3 */
// треугольник будет существовать только тогда, когда сумма двух сторон будет больше длинны третьей стороны.

function isThereATriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

//console.log('isThereATriangle test -> ' + isThereATriangle(2, 3, 4)); -> true
//console.log('isThereATriangle test -> ' + isThereATriangle(5, 1, 8)); -> false

let firstSide = Number(prompt('Enter a first side of the triangle'));
let secondSide = Number(prompt('Enter a second side of the triangle'));
let thirdSide = Number(prompt('Enter a third side of the triangle'));

if (!isCorrect(firstSide) || !isCorrect(secondSide) || !isCorrect(thirdSide)) {
  alert('You entered incorrect meanings.');
} else if (isThereATriangle(firstSide, secondSide, thirdSide)) {
  alert(
    `The triangle with sides ${firstSide}, ${secondSide} and ${thirdSide} exists.`
  );
} else {
  alert(
    `The triangle with sides ${firstSide}, ${secondSide} and ${thirdSide} does not exist.`
  );
}

/* Task 4 */
const perimeterOfATriangle = function (a, b, c) {
  return a + b + c;
};

/**
 *
 * @param {function} perimeterOfATriangle calculates perimeter of a triangle
 * @param {number} a the first side of triangle
 * @param {number} b the second side of triangle
 * @param {numbre} c the third side of triangle
 * @returns {number} area of a triangle
 */
function findAreaOfATriangle(perimeterOfATriangle, a, b, c) {
  const halfPerimeter = PerimeterOfATriangle(a, b, c) / 2;
  return Math.sqrt(
    halfPerimeter *
      (halfPerimeter - a) *
      (halfPerimeter - b) *
      (halfPerimeter - c)
  );
}

/**
 * @func findAreaOfARectangle calculates area of a rectangle
 * @param {number} a a first side of rectangle
 * @param {number} b a second side of rectangle
 * @returns {number} area of a rectangle
 */
function findAreaOfARectangle(a, b) {
  return a * b;
}

const userChoice = prompt(
  "Write 'triangle' if You want to know the area of a triangle or 'rectangle' if You want to know the area of rectangle"
);

switch (userChoice) {
  case 'triangle':
    firstSide = Number(prompt('Enter a first side of the triangle'));
    secondSide = Number(prompt('Enter a second side of the triangle'));
    thirdSide = Number(prompt('Enter a third side of the triangle'));
    if (
      !isCorrect(firstSide) ||
      !isCorrect(secondSide) ||
      !isCorrect(thirdSide)
    ) {
      alert('You entered incorrect meanings.');
    } else {
      alert(
        `The area of the triangle is ${findAreaOfATriangle(
          PerimeterOfATriangle(firstSide, secondSide, thirdSide),
          firstSide,
          secondSide,
          thirdSide
        )}`
      );
    }
    break;
  case 'rectangle':
    firstSide = Number(prompt('Enter the first side of the rectangle'));
    secondSide = Number(prompt('Enter the second side of the rectangle'));
    if (!isCorrect(firstSide) || !isCorrect(secondSide)) {
      alert('You entered incorrect meanings.');
    } else {
      alert(
        `The area of the rectangle is ${findAreaOfARectangle(
          firstSide,
          secondSide
        )}`
      );
    }
    break;
  default:
    alert('You entered incorrect figure! Error!');
    break;
}
