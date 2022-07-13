import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  let gcd = '';

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
    gcd = num1;
  }
  return gcd;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;

  const rightAnswer = getGcd(number1, number2).toString();
  return [question, rightAnswer];
};

const startBrainGcdGame = () => runEngine(description, generateRound);

export default startBrainGcdGame;
