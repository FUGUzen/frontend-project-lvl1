import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

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

const generateRound = () => {
  const question = getRandomNumber(1, 40);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainPrime = () => runEngine(description, generateRound);

export default startBrainPrime;
