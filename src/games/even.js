import runEngine from '../index.js';
import { minValue, maxValue, getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getEven = () => {
  const question = getRandomNumber(minValue, maxValue);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainEvenGame = () => runEngine(description, getEven);

export default startBrainEvenGame;
