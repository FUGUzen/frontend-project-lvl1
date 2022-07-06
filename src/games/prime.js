import runEngine from '../index.js';
import getRandomNumber from '../../utils/helpers/utils.js';


const discription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

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
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainPrime = () => runEngine(discription, getPrime);

export default startBrainPrime;
