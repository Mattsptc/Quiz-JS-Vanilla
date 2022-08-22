// declaracao de variaveis

const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
<<<<<<< HEAD
let actualQuestion = 0;
=======
let actualQUestion = 0;
>>>>>>> 495e1d7e6d74d9665df3f3b1218cf09602ce63ae


// Perguntas

const questions = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    },
]

// Substituicao do Quizz para a primeira pergunta

function init() {
    // criar primeira pergunta
    console.log('iniciou')
    createQuestion(0);

}

// cria uma pergunta

function createQuestion(i) {
    // Limpar a questao anterior

    const oldButtons = answersBox.querySelectorAll('button')
    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    // Alterar o texto da pergunta

    const questionText = question.querySelector("#question-text")
    const questionNumber = question.querySelector("#question-number")

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

<<<<<<< HEAD
    questions[i].answers.forEach(function(answer, i) {
        // cria o template do botao do quizz

        const answerTemplate = document.querySelector(".answer-template").cloneNode(true)
        const letterBtn = answerTemplate.querySelector('.btn-letter')
        const answerText = answerTemplate.querySelector('.question-answer')

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer']


        answerTemplate.setAttribute('correct-answer', answer['correct']);

        // Remover hide e template class

        answerTemplate.classList.remove('hide');
        answerTemplate.classList.remove('answer-template')

        // Inserir Alternativa na tela

        answersBox.appendChild(answerTemplate);
        // Inserir evento de click no botao
        
        answerTemplate.addEventListener('click', () => {
            console.log(this)
        })
    })  

    // incrementar o numero da questao

    actualQuestion++

=======
>>>>>>> 495e1d7e6d74d9665df3f3b1218cf09602ce63ae
}
// Inicialização do quizz
init()