const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'How many holes are on a standard bowling ball?',
        choice1: 'two',
        choice2: 'three',
        choice3: 'five',
        choice4: 'ten',
        answer: 2,
    },
    {
        question: "What is the capital of chile?",
        choice1: "Beunos Aires",
        choice2: "Peru",
        choice3: "Santiago",
        choice4: "Quito",
        answer: 3,
    },
    {
        question: "What is the name of the Earth’s largest ocean?",
        choice1: "The Arctic Ocean",
        choice2: "The Indian Ocean",
        choice3: "The Atlantic Ocean",
        choice4: "The Pacific Ocean",
        answer: 4,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
}

choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
startGame();