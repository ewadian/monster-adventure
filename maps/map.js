import quests from '../data/quest-data.js';
import { getUser, questsCompleted } from '../utils.js';
import { loadProfile } from '../render-utils.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

loadProfile();

if (user.sanity <= 0 || questsCompleted(user)){
    window.location.replace('../gameover');
}

for (let quest of quests){
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.maptitle;
    a.classList.add('quest-position');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;
    mapLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = 'X' + quest.maptitle;
    span.classList.add('completed-quest');
    span.classList.add('quest-position');
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    mapLinks.appendChild(span);
}
