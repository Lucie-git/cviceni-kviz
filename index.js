const question = document.querySelector('.question')
question.textContent= "⚡️Jak se jmenoval Ten Jehož Jméno Nesmíme Vyslovit?⚡️"

const personalAnswer = prompt('Zadejte odpověď:').toLowerCase
const answer__text = personalAnswer
const answer = document.querySelector('.answer')

if (personalAnswer === 'Lord Voldemort'.toLowerCase) {
    answer.classList.add('answer--correct')
} else answer.classList.add('answer--wrong')
