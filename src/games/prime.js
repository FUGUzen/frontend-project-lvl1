import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const discription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeNumber = (randomNumber) => {
  const num = randomNumber;
  let flag = true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const brainPrime = () => {
  const randomNumber = getRandomNumber(100);
  const rightAnswer = primeNumber(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startBrainPrime = () => gameEngine(discription, brainPrime);

export default startBrainPrime;
