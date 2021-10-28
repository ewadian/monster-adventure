import { getUser } from './utils.js';

export function loadProfile() {
    const userImage = document.getElementById('user-image');
    userImage.src = `../assets/${getUser().class}.png`;
    
    const userName = document.getElementById('user-name');
    userName.textContent = 'Name: ' + getUser().name;
    
    const userSanity = document.getElementById('user-sanity');
    userSanity.textContent = 'Sanity: ' + getUser().sanity;
    
    const userEvidence = document.getElementById('user-evidence');
    userEvidence.textContent = 'Evidence: ' + getUser().evidence;
}
