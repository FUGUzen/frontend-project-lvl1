import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const lengthProgression = 10;

const isProgression = (length) => {
  const firstMember = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 5);

  const progressions = [];

  for (let i = 0; i < length; i += 1) {
    const value = firstMember + step * i;
    progressions.push(value);
  }
  return progressions;
};

const getProgression = () => {
  const progression = isProgression(lengthProgression);
  const hiddenIndex = getRandomNumber(1, lengthProgression);
  const rightAnswer = progression[hiddenIndex].toString();

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const startBrainProgressionGame = () => {
  runEngine(description, getProgression);
};

export default startBrainProgressionGame;
