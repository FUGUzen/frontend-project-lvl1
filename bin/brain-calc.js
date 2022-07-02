#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const getCalc = () => {
  console.log('What is the result of the expression?');
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const randomNumber1 = Math.floor((Math.random() * 20) + 1);
    const randomNumber2 = Math.floor((Math.random() * 10) + 1);
    const operators = ['+', '-', '*'];
    const randomOperation = operators[Math.floor(Math.random() * operators.length)];
    let resultOperation = 0;
    const math = [randomNumber1, randomOperation, randomNumber2];
    const transformationMath = math.join(' ');
    console.log(`Question: ${transformationMath}`);
    const userAnswer = readlineSync.question('Your answer: ');
    switch (randomOperation) {
      case '+':
        resultOperation = randomNumber1 + randomNumber2;
        break;
      case '-':
        resultOperation = randomNumber1 - randomNumber2;
        break;
      case '*':
        resultOperation = randomNumber1 * randomNumber2;
        break;
      default:
        break;
    }

    if (resultOperation === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${resultOperation}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
getCalc();
