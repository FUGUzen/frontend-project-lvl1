import runEngine from '../index.js';
import { minValue, maxValue, getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const lengthProgression = 10;

const isProgression = (startProgression, stepProgression) => {
  const progressions = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    const value = startProgression + stepProgression * i;
    progressions.push(value);
  }
  return progressions;
};

const getProgression = () => {
  const minStep = 2;
  const maxStep = 5;
  const step = getRandomNumber(minStep, maxStep);
  const start = getRandomNumber(minValue, maxValue);
  const progression = isProgression(start, step);
  const minIndexOfHiddenNumber = 0;
  const maxIndexOfHiddenNumber = lengthProgression - 1;
  const IndexOfHiddenNumber = getRandomNumber(minIndexOfHiddenNumber, maxIndexOfHiddenNumber);
  const rightAnswer = String(progression[IndexOfHiddenNumber]);
  progression[IndexOfHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const startBrainProgressionGame = () => {
  runEngine(description, getProgression);
};

export default startBrainProgressionGame;
