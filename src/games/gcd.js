import runEngine from '../index.js';
import getRandomNumber from '../../utils/helpers/utils.js';

const discription = 'Find the greatest common divisor of given numbers.';

const isGcd = (a, b) => {
  let number1 = a;
  let number2 = b;
  let gcd = '';

  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
    gcd = number1;
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
