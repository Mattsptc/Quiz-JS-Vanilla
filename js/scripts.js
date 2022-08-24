// DECLARAÇÃO DE VARIÁVEIS
const question = document.querySelector('#question')
const answersBox = document.querySelector('#answers-box')
const quizzContainer = document.querySelector('#quizz-container')
const scoreContainer = document.querySelector('#score-container')
const letters = ["a", "b", "c", "d"]
let points = 0
let actualQuestion = 0

//PERGUNTAS
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

//SUBSTITUIÇÃO DO QUIZZ PARA A PRIMEIRA PERGUNTA
function init() {
    //CRIAR A PRIMEIRA PERGUNTA
    console.log('Iniciou')
    createQuestion(0)
}

//CRIA UMA PERGUNTA
function createQuestion(i) {

    //LIMPAR A QUESTÃO ANTERIOR
    const oldButtons = answersBox.querySelectorAll('button')

    oldButtons.forEach(function (btn) {
        btn.remove()
    })

    //ALTERAR O TEXTO DA PERGUNTA
    const questionText = question.querySelector('#question-text')
    const questionNumber = question.querySelector('#question-number')

    questionText.textContent = questions[i].question
    questionNumber.textContent = i + 1

    //INSERE AS ALTERNATIVAS
    questions[i].answers.forEach(function (answer, i) {

        //CRIA O TEMPLATE DO BOTÃO DO QUIZZ
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true)

        const letterBtn = answerTemplate.querySelector('.btn-letter')
        const answerText = answerTemplate.querySelector('.question-answer')

        letterBtn.textContent = letters[i]
        answerText.textContent = answer['answer']

        answerTemplate.setAttribute("correct-answer", answer['correct'])

        //REMOVER HIDE E TEMPLATE CLASS
        answerTemplate.classList.remove("hide")
        answerTemplate.classList.remove("answer-template")

        //INSERIR AS ALTERNATIVAS NA TELA
        answersBox.appendChild(answerTemplate)

        //INSERIR UM EVENTO DE CLICK NO BOTÃO
        answerTemplate.addEventListener('click', function () {
            checkAnswer(this)
        })
    })

    //INCREMENTAR O NÚMERO DA QUESTÃO
    actualQuestion++
}

//VERIFICANDO RESPOSTA DO USUÁRIO
function checkAnswer(btn) {

    //SELECIONA TODOS OS BOTÕES
    const buttons = answersBox.querySelectorAll('button')

    //VERIFICA SE A RESPOSTA ESTÁ CORRETA E ADICIONA CLASSES NOS BOTÕES
    buttons.forEach(function (button) {

        if (button.getAttribute("correct-answer") === "true") {

            button.classList.add("correct-answer")

            //CHECA SE O USUÁRIO ACERTOU A PERGUNTA
            if (btn === button) {
                //INCREMENTO DOS PONTOS
                points++
            }

        } else {

            button.classList.add("wrong-answer")

        }

    })

    //EXIBIR PRÓXIMA PERGUNTA
    nextQuestion()

}

//EXIBE A PRÓXIMA PERGUNTA NO QUIZZ
function nextQuestion() {

    //TIMER PARA O USUÁRIO VER AS RESPOSTAS
    setTimeout(function () {

        //VERIFICA SE AINDA HÁ PERGUNTAS (SE CHEGOU AO FIM DO JOGO)
        if (actualQuestion >= questions.length) {
            //APRESENTAR A MENSAGEM DE SUCESSO E FINALIZAR O QUIZZ
            showSuccessMessage()
            return
        }

        createQuestion(actualQuestion)

    }, 1500)

}

//EXIBE A TELA FINAL
function showSuccessMessage() {

    hideOrSowQuizz()

    //TROCAR DADOS DA TELA DE SUCESSO

    //CALCULAR O SCORE
    const score = ((points / questions.length) * 100).toFixed(2)

    const displayScore = document.querySelector('#display-score span')
    displayScore.textContent = score.toString()

    //ALTERAR O NÚMERO DE PERGUNTAS CORRETAS
    const correctAnswers = document.querySelector('#correct-answers')
    correctAnswers.textContent = points

    //ALTERAR O TOTAL DE PERGUNTAS
    const totalQuestions = document.querySelector('#questions-qty')
    totalQuestions.textContent = questions.length
}

//MOSTA OU ESCONDE O SCORE E AS PERGUNTAS
function hideOrSowQuizz() {
    quizzContainer.classList.toggle("hide")
    scoreContainer.classList.toggle("hide")
}

//REINICIAR QUIZZ
const restartBtn = document.querySelector('#restart')

restartBtn.addEventListener('click', function () {

    //ZERAR OS DADOS DO JOGO
    actualQuestion = 0
    points = 0
    hideOrSowQuizz()
    init()

})

//INICIALIZAÇÃO DO QUIZZ
init()