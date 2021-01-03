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
        question: "what is the capital of chile?",
        choice1: "Beunos Aires",
        choice2: "Peru",
        choice3: "Santiago",
        choice4: "Quito",
        answer: 3,
    },