import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainEvenGame = () => runEngine(description, generateRound);

export default startBrainEvenGame;
