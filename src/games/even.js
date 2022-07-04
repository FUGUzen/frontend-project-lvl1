import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEvenNumber = (randomNumber) => randomNumber % 2 === 0;

const brainEven = () => {
  const randomNumber = getRandomNumber(30);
  const rightAnswer = isEvenNumber ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startBrainEvenGame = () => {
  gameEngine(discription, brainEven);
};

export default startBrainEvenGame;
