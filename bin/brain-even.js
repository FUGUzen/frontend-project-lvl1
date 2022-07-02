#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const getEvents = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const rounds = 3;

    for (let i = 0; i < rounds; i += 1) {
        const randomNumber = Math.floor(Math.random() * 100);
        const isEven = randomNumber => randomNumber % 2 === 0;
        const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
        console.log(`Question ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === expectedAnswer) {
            console.log('Correct!') ;

        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.\nLet's try again, ${userName}!`);
            return
        }
    }
    console.log(`Congratulations, ${userName}`);
};
getEvents();

