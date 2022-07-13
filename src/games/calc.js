import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const discription = 'What is the result of the expression?';

const mathOperators = ['+', '-', '*'];

const calculate = (firstNum, secondNum, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
    throw new Error(`don't know operations ${mathOperator}`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);
  const mathOperator = mathOperators[getRandomNumber(0, mathOperators.length - 1)];
  const question = `${firstNumber} ${mathOperator} ${secondNumber}`;
  const rightAnswer = String(calculate(firstNumber, secondNumber, mathOperator));
  return [question, rightAnswer];
};

const startBrainCalcGame = () => runEngine(discription, generateRound);

export default startBrainCalcGame;
