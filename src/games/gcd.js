import runEngine from '../index.js';
import getRandomNumber from '../../utils/helpers/utils.js';

const discription = 'Find the greatest common divisor of given numbers.';

const isGcd = (a, b) => {
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

const getGcd = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 20);
  const question = `${randomNumber1} ${randomNumber2}`;

  const rightAnswer = isGcd(randomNumber1, randomNumber2).toString();
  return [question, rightAnswer];
};

const startBrainGcdGame = () => runEngine(discription, getGcd);

export default startBrainGcdGame;
