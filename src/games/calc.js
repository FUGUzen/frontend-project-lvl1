import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const discription = 'What is the result of the expression?';

const randomOperationGenerator = () => {
  const operation = ['', '+', '-', '*'];
  let result = '';
  const i = getRandomNumber(3);
  result = `${getRandomNumber(30)} ${operation[i]} ${getRandomNumber(20)}`;
  return result;
};

const brainCalc = () => {
  const randomOperation = randomOperationGenerator();
  const operation = randomOperation.split(' ');
  const operator = operation[1];
  const number1 = operation[0];
  const number2 = operation[2];
  let rightAnswer = 0;
  switch (operator) {
    case '+':
      rightAnswer = Number(number1) + Number(number2);
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
      break;
  }
  rightAnswer = String(rightAnswer);
  return [randomOperation, rightAnswer];
};

const startBrainCalcGame = () => {
  gameEngine(discription, brainCalc);
};

export default startBrainCalcGame;
