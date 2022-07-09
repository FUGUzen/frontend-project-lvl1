import runEngine from '../index.js';
import { minValue, maxValue, getRandomNumber } from '../../utils/helpers/utils.js';

const description = 'What is the result of the expression?';

const mathOperators = ['+', '-', '*'];

const generateOperation = (firstNum, secondNum, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
  }
  return false;
};

const getCalc = () => {
  const firstNumber = getRandomNumber(minValue, maxValue);
  const secondNumber = getRandomNumber(minValue, maxValue);
  const mathOperator = mathOperators[getRandomNumber(0, mathOperators.length - 1)];
  const question = `${firstNumber} ${mathOperator} ${secondNumber}`;
  const rightAnswer = String(generateOperation(firstNumber, secondNumber, mathOperator));
  return [question, rightAnswer];
};

const startBrainCalcGame = () => runEngine(description, getCalc);

export default startBrainCalcGame;
