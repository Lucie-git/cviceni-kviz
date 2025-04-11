const questionElm = (document.querySelector('.question').textContent =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.');

const answerPrompt = prompt('Vaše odpověď:');

const answerTextElm = (document.querySelector('.answer__text').textContent = `${answerPrompt}`);

const answerElm = document.querySelector('.answer');
if (answerPrompt === 'Bell') {
  answerElm.classList.add('answer--correct');
} else {
  answerElm.classList.add('answer--wrong');
}
