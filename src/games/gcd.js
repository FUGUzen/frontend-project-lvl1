import getRandomNumber from "../getRandomNumber.js";
import gameEngine from "../index.js";

const discription = 'Find the greatest common divisor of given numbers.';

const gcdCalc = (a, b) => {
    let number1 = a;
    let number2 = b;
    let gcd;

    while (number1 !== number2) {
        if (number1 > number2) {
            number1 = number1 - number2;
        } else {
            number2 = number2 - number1;
        }
        gcd = number1;
    }
    return gcd;
};

const brainGcd = () => {
    const randomNumber1 = getRandomNumber(30);
    const randomNumber2 = getRandomNumber(30);
    const randomNumbers = `${randomNumber1}, ${randomNumber2}`;

    let rightAnswer = gcdCalc(randomNumber1, randomNumber2);
    rightAnswer = String(rightAnswer);
    return [randomNumbers, rightAnswer];
};

const startBrainGcdGame = () => {
    gameEngine(discription, brainGcd);
};

export default startBrainGcdGame;

