import runEngine from '../index.js';
import getRandomNumber from '../../utils/helpers/utils.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getEven = () => {
  const question = getRandomNumber(1, 30);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainEvenGame = () => runEngine(discription, getEven);

export default startBrainEvenGame;
