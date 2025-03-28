//Použijte funkci prompt a zeptejte se uživatele na správnou odpověď. 
// Vyberte element s třídou answer__text a nastavte obsah elementu na odpověď od uživatele. 
// Vyberte element s třidou answer. Pokud je odpověď příjmení Bell, přidejte k tomuto elementu třídu answer--correct. 
// V opačném případě přidejte třídu answer--wrong.

const question = document.querySelector('.question')
question.textContent= "⚡️Jak se jmenoval Ten Jehož Jméno Nesmíme Vyslovit?⚡️"

const personalAnswer = prompt('Zadejte odpověď:').toLowerCase
const answer__text = personalAnswer
const answer = document.querySelector('.answer')

if (personalAnswer === 'Lord Voldemort'.toLowerCase) {
    answer.classList.add('answer--correct')
} else answer.classList.add('answer--wrong')
