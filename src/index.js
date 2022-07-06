import readlineSync from 'readline-sync';

const runEngine = (discription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(discription);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
