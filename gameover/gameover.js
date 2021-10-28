import { getUser } from '../utils.js';

const finalImage = document.getElementById('final-icon');
finalImage.src = `../assets/${getUser().class}.png`;

const finalSanity = document.getElementById('final-sanity');
finalSanity.textContent = 'You completed the game with ' + getUser().sanity + ' sanity points remaining.';

const finalEvidence = document.getElementById('final-evidence');
finalEvidence.textContent = 'You collected ' + getUser().evidence + ' pieces of evidence.';

const restartBtn = document.createElement('button');
restartBtn.textContent = 'try again.';

const resultsDiv = document.getElementById('results');

resultsDiv.append(restartBtn);

restartBtn.addEventListener('click', ()=>{
    localStorage.removeItem('USER');
    window.location.replace('../');
});
