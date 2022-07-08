import runEngine from '../index.js';
import getRandomNumber from '../../utils/helpers/utils.js';

const discription = 'What number is missing in the progression?';

const lengthProgression = 10;

const brainProgression = () => {
  const firstNum = getRandomNumber(1, 30);
  const step = getRandomNumber(1, 5);
  const arr = [];

  for (let i = 1; i <= lengthProgression; i += 1) {
    arr.push(firstNum + i * step);
  }
  const hiddenElementPosition = getRandomNumber(1, lengthProgression) - 1;

  const rightAnswer = String(arr[hiddenElementPosition]);
  arr[hiddenElementPosition] = '..';

  const question = `${arr.join(' ')}`;

  return [question, rightAnswer];
};

const startBrainProgressionGame = () => {
  runEngine(discription, brainProgression);
};

export default startBrainProgressionGame;
