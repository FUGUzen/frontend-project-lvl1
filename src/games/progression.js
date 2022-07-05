import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const discription = 'What number is missing in the progression?';

const lengthProgression = 10;

const brainProgression = () => {
  const firstNum = getRandomNumber(50);
  const step = getRandomNumber(5);
  const arr = [];

  for (let i = 1; i <= lengthProgression; i += 1) {
    arr.push(firstNum + i * step);
  }
  const hiddenElementPosition = getRandomNumber(lengthProgression);

  const rightAnswer = String(arr[hiddenElementPosition]);
  arr[hiddenElementPosition] = '..';

  const question = `${arr.join(' ')}`;

  return [question, rightAnswer];
};

const startBrainProgressionGame = () => {
  gameEngine(discription, brainProgression);
};

export default startBrainProgressionGame;
