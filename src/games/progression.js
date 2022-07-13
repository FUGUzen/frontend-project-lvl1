import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const isProgression = (length) => {
  const firstMember = getRandomNumber(1, 100);
  console.log(firstMember);
  const step = getRandomNumber(1, 5);
  console.log(step);

  const progressions = [];

  for (let i = 1; i < length; i += 1) {
    const value = firstMember + (step * i);
    progressions.push(value);
    console.log(progressions);
  }
  return progressions;
};

const getProgression = () => {
  const lengthProgression = 10;
  const progression = isProgression(lengthProgression);
  console.log(progression);
  const hiddenIndex = getRandomNumber(0, lengthProgression - 2);
  console.log(hiddenIndex);
  const rightAnswer = progression[hiddenIndex].toString();
  console.log(rightAnswer);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};
console.log(getProgression());
const startBrainProgressionGame = () => {
  runEngine(description, getProgression);
};

export default startBrainProgressionGame;
