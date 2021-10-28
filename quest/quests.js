import quests from '../data/quest-data.js';
import { findById, getUser, scoreQuest, setUser } from '../utils.js';
import { loadProfile } from '../render-utils.js';

const params = new URLSearchParams(window.location.search);
const questData = findById(quests, params.get('id'));

loadProfile();

const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;
const description = document.getElementById('quest-description');
description.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices){
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'make your choice';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();

    const SelectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choices, SelectedRadio.value);

    const user = getUser();
    scoreQuest(choice, questData.id, user);
    setUser(user);

    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');

    const questResults = document.getElementById('quest-results');
    const resultsP = document.createElement('p');
    const resultsNumbers = document.createElement('p');
    resultsP.textContent = choice.result;
    resultsNumbers.textContent = choice.sanity + ' sanity points lost. ' + choice.evidence + ' piece of evidence acquired.';
    resultsNumbers.classList.add('pbold');
    questResults.append(resultsP, resultsNumbers, returnMapContainer);
    returnMapContainer.append(returnMapBtn);
    questResults.classList.remove('hidden');
});

const returnMapContainer = document.createElement('div');
returnMapContainer.classList.add('return-container');

const returnMapBtn = document.createElement('button');
returnMapBtn.textContent = 'continue';
returnMapBtn.classList.add('return-button');

returnMapBtn.addEventListener('click', ()=>{
    window.location.replace('../maps');
});
