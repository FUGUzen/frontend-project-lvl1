import runEngine from '../index.js';
import { minValue, maxValue, getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  let flag = true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const getPrime = () => {
  const question = getRandomNumber(minValue, maxValue);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainPrime = () => runEngine(description, getPrime);

export default startBrainPrime;
